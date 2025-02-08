import axios from 'axios';
import { createClient } from '@sanity/client';
import slugify from 'slugify';

const client = createClient({
  projectId: "08j139ix",
  dataset: "production",
  apiVersion: '2025-02-05',
  token: "skXHVnDGLo1xBY6D31r15DT446HFXVMtG574RU8wLfdZ12tRPdM1Ah7FPDYVCVhgqCYq2I9L4WvlR2tb828TrQwR8d1F4YXMiriEY5gfLY5BeC3n0ozY3zdJxs7Ju2aPeTghXKaMox2gsuaBzVWdv7hcsCWQPJGZqLfz6HIvBrijwrKyUUAL"
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log('Fetching image:', imageUrl);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop() || 'unknown.jpg',
    });

    console.log('Image uploaded successfully:', asset);
    return asset._id;
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function createCategory(category, counter) {
  try {
    console.log('Checking if category exists:', category.slug);
    const categoryExist = await client.fetch(`*[_type=="category" && slug==$slug][0]`, { slug: category.slug });
    if (categoryExist) {
      console.log('Category already exists:', categoryExist._id);
      return categoryExist._id;
    }

    const catObj = {
      _type: "category",
      _id: category.slug + "-" + counter,
      name: category.name,
      slug: category.slug
    };

    const response = await client.createOrReplace(catObj);
    console.log('Category created successfully', response);
    return response._id;
  } catch (error) {
    console.error('❌ Failed to create category:', category.name, error);
    return null;
  }
}

async function importData() {
  try {
    const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
    const products = response.data;

    let counter = 1;

    for (const product of products) {
      let imageRef = null;
      let catRef = null;

      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      if (product.category.name) {
        catRef = await createCategory(product.category, counter);
      }

      const sanityProduct = {
        _id: `product-${counter}`,
        _type: 'product',
        name: product.name,
        slug: {
          _type: 'slug',
          current: slugify(product.name || 'default-product', {
            lower: true,
            strict: true,
          }),
        },
        price: product.price,
        category: catRef ? {
          _type: 'reference',
          _ref: catRef
        } : undefined,
        tags: product.tags || [],
        quantity: 50,
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
        description: product.description || "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        features: product.features || [
          "Premium material",
          "Handmade upholstery",
          "Quality timeless classic",
        ],
        dimensions: product.dimensions || {
          _type: 'dimensions',
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        }
      };

      counter++;

      console.log('Uploading product:', sanityProduct);
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.name}`);
    }

    console.log('✅ Data import completed!');
  } catch (error) {
    console.error('❌ Error importing data:', error);
  }
}

importData();
