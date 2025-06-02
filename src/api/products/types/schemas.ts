import { z } from 'zod';

export const ApiErrorSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
  errors: z
    .array(
      z.object({
        code: z.string(),
        message: z.string(),
      })
    )
    .optional(),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;

export const AuthTokenResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  scope: z.string(),
  refresh_token: z.string(),
  token_type: z.string(),
});

export type AuthTokenResponse = z.infer<typeof AuthTokenResponseSchema>;

const DiscountedSchema = z.object({
  value: z.object({
    type: z.string(),
    currencyCode: z.string(),
    centAmount: z.number(),
    fractionDigits: z.number(),
  }),
  discount: z.object({
    typeId: z.string(),
    id: z.string(),
  }),
});

export const PriceSchema = z.object({
  id: z.string(),
  value: z.object({
    type: z.string(),
    currencyCode: z.string(),
    centAmount: z.number(),
    fractionDigits: z.number(),
  }),
  country: z.string().optional(),
  customerGroup: z
    .object({
      typeId: z.string(),
      id: z.string(),
    })
    .optional(),
  discounted: DiscountedSchema.optional(),
});

export const ImageSchema = z.object({
  url: z.string(),
  label: z.string().optional(),
  dimensions: z.object({
    w: z.number(),
    h: z.number(),
  }),
});

export const AttributeSchema = z.object({
  name: z.string(),
  value: z.union([z.record(z.string()), z.boolean()]),
});

export const MasterVariantSchema = z.object({
  id: z.number(),
  sku: z.string(),
  key: z.string().optional(),
  prices: z.array(PriceSchema),
  assets: z.array(z.unknown()),
  images: z.array(ImageSchema),
});

const SearchKeywordSchema = z.object({
  text: z.string(),
});

export const ProductProjectionSchema = z
  .object({
    id: z.string(),
    version: z.number(),
    productType: z.object({
      typeId: z.string(),
      id: z.string(),
    }),
    name: z.record(z.string()),
    description: z.record(z.string()),
    slug: z.record(z.string()),
    categories: z.array(
      z.object({
        typeId: z.string(),
        id: z.string(),
      })
    ),
    categoryOrderHints: z.record(z.unknown()).optional(),
    masterVariant: MasterVariantSchema,
    variants: z.array(MasterVariantSchema),
    searchKeywords: z.record(z.array(SearchKeywordSchema)),
    hasStagedChanges: z.boolean(),
    published: z.boolean(),
    createdAt: z.string(),
    lastModifiedAt: z.string(),
    metaTitle: z.record(z.string()),
    metaDescription: z.record(z.string()),
    key: z.string().optional(),
    priceMode: z.enum(['Embedded', 'Standalone']),
  })
  .passthrough();

export const ProductProjectionResponseSchema = z.object({
  limit: z.number(),
  offset: z.number(),
  count: z.number(),
  total: z.number(),
  results: z.array(ProductProjectionSchema),
  facets: z.record(z.unknown()).optional(),
});

export type ProductProjectionResponse = z.infer<typeof ProductProjectionResponseSchema>;
export type Price = z.infer<typeof PriceSchema>;
export type Image = z.infer<typeof ImageSchema>;
export type Attribute = z.infer<typeof AttributeSchema>;
export type MasterVariant = z.infer<typeof MasterVariantSchema>;
export type ProductProjection = z.infer<typeof ProductProjectionSchema>;
