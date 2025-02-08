import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../../sanity/schemaTypes/product'
import { Category } from '../../sanity/schemaTypes/category'
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [product,Category],
}