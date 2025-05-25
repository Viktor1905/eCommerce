// export interface ApiError {
//   statusCode: number;
//   message: string;
//   errors?: { code: string; message: string }[];
// }

// export interface AuthTokenResponse {
//   access_token: string;
//   expires_in: number;
//   scope: string;
//   refresh_token: string;
//   token_type: string;
// }

// export interface Price {
//   id: string;
//   value: {
//     type: string;
//     currencyCode: string;
//     centAmount: number;
//     fractionDigits: number;
//   };
//   country?: string;
//   customerGroup?: { typeId: string; id: string };
//   discounted?: Record<string, unknown>;
// }

// export interface Image {
//   url: string;
//   label?: string;
//   dimensions?: { w: number; h: number };
// }

// export interface Attribute {
//   name: string;
//   value: Record<string, string> | boolean;
// }

// export interface MasterVariant {
//   id: number;
//   sku: string;
//   key?: string;
//   prices: Price[];
//   assets: any[];
//   images: Image[];
//   attributes: Attribute[];
// }

// export interface ProductProjection {
//   id: string;
//   version: number;
//   productType: { typeId: string; id: string };
//   name: Record<string, string>;
//   description: Record<string, string>;
//   slug: Record<string, string>;
//   categories: Array<{ typeId: string; id: string }>;
//   categoryOrderHints: Record<string, unknown>;
//   masterVariant: MasterVariant;
//   variants: MasterVariant[];
//   searchKeywords: Record<string, unknown>;
//   hasStagedChanges: boolean;
//   published: boolean;
//   createdAt: string;
//   lastModifiedAt: string;
//   metaTitle: Record<string, string>;
//   metaDescription: Record<string, string>;
// }
