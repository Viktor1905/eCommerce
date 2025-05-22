export interface ProductProjectionResponse {
  limit: number;
  offset: number;
  count: number;
  total?: number;
  results: ProductProjection[];
}

export interface ProductProjection {
  id: string;
  version: number;
  createdAt: string;
  lastModifiedAt: string;
  productType: Reference;
  name: LocalizedString;
  description?: LocalizedString;
  slug: LocalizedString;
  categories: Reference[];
  masterVariant: ProductVariant;
  variants: ProductVariant[];
  searchKeywords: SearchKeywords;
  hasStagedChanges?: boolean;
  published?: boolean;
  taxCategory?: Reference;
  state?: Reference;
}

export interface ProductVariant {
  id: number;
  sku?: string;
  key?: string;
  prices?: Price[];
  images?: Image[];
  attributes?: Attribute[];
}

export interface Reference {
  typeId: string;
  id: string;
}

export type LocalizedString = Record<string, string>;

export interface Price {
  id: string;
  value: TypedMoney;
  country?: string;
}

export interface TypedMoney {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

export interface Image {
  url: string;
  dimensions: {
    w: number;
    h: number;
  };
}

export interface Attribute {
  name: string;
  value: unknown;
}

export type SearchKeywords = Record<string, SearchKeyword[]>;

export interface SearchKeyword {
  text: string;
}
