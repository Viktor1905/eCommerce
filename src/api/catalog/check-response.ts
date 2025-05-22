import {
  LocalizedString,
  ProductProjection,
  ProductProjectionResponse,
  ProductVariant,
} from './products.types.ts';

export function isProductsResponse(obj: unknown): obj is ProductProjectionResponse {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'limit' in obj &&
    typeof obj.limit === 'number' &&
    'offset' in obj &&
    typeof obj.offset === 'number' &&
    'count' in obj &&
    typeof obj.count === 'number' &&
    'results' in obj
  );
}

export function isProductResponse(obj: unknown): obj is ProductProjection {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof obj.id === 'string' &&
    'version' in obj &&
    typeof obj.version === 'number' &&
    'createdAt' in obj &&
    typeof obj.createdAt === 'string' &&
    'lastModifiedAt' in obj &&
    typeof obj.lastModifiedAt === 'string' &&
    'name' in obj &&
    isLocalizedString(obj.name) &&
    'slug' in obj &&
    isLocalizedString(obj.slug) &&
    'masterVariant' in obj &&
    isProductVariant(obj.masterVariant) &&
    'variants' in obj &&
    Array.isArray(obj.variants) &&
    (obj.variants.length === 0 || isProductVariant(obj.variants[0])) &&
    'searchKeywords' in obj &&
    typeof obj.searchKeywords === 'object' &&
    obj.searchKeywords !== null
  );
}

function isLocalizedString(obj: unknown): obj is LocalizedString {
  if (typeof obj !== 'object' || obj === null) return false;
  return Object.values(obj).every((val) => typeof val === 'string');
}
function isProductVariant(obj: unknown): obj is ProductVariant {
  return typeof obj === 'object' && obj !== null && 'id' in obj && typeof obj.id === 'number';
}
