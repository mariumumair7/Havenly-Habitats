export async function getProducts() {
    return [
      { id: 1, name: "Product A", price: 20, image: "/images/product1.jpg", stock: true, description: "This is Product A" },
      { id: 2, name: "Product B", price: 35, image: "/images/product2.jpg", stock: false, description: "This is Product B" },
      { id: 3, name: "Product C", price: 50, image: "/images/product3.jpg", stock: true, description: "This is Product C" },
    ];
  }
  
  export async function getProductById(id: number) {
    const products = await getProducts();
    return products.find((product) => product.id === id) || null;
  }
  