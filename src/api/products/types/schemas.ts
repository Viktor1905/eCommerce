import { z } from 'zod';

export const MoneySchema = z.object({
  type: z.string(),
  currencyCode: z.string(),
  centAmount: z.number(),
  fractionDigits: z.number(),
});

export const ReferenceSchema = z.object({
  typeId: z.string(),
  id: z.string(),
});

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

export const AuthTokenResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  scope: z.string(),
  refresh_token: z.string(),
  token_type: z.string(),
});

const DiscountedPriceSchema = z.object({
  value: MoneySchema,
  discount: ReferenceSchema,
});

export const PriceSchema = z
  .object({
    id: z.string(),
    value: MoneySchema,
    country: z.string().optional(),
    customerGroup: ReferenceSchema.optional(),
    discounted: DiscountedPriceSchema.optional(),
  })
  .passthrough();

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
  value: z.any(),
});

export const MasterVariantSchema = z
  .object({
    id: z.number(),
    sku: z.string().optional(),
    key: z.string().optional(),
    prices: z.array(PriceSchema).optional(),
    images: z.array(ImageSchema).optional(),
    attributes: z.array(AttributeSchema).optional(),
    assets: z.array(z.unknown()).optional(),
  })
  .passthrough();

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
    description: z.record(z.string()).optional(),
    slug: z.record(z.string()),
    categories: z.array(ReferenceSchema),
    categoryOrderHints: z.record(z.unknown()).optional(),
    masterVariant: MasterVariantSchema,
    variants: z.array(MasterVariantSchema),
    searchKeywords: z.record(z.array(SearchKeywordSchema)).optional(),
    hasStagedChanges: z.boolean().optional(),
    published: z.boolean().optional(),
    createdAt: z.string(),
    lastModifiedAt: z.string(),
    metaTitle: z.record(z.string()).optional(),
    metaDescription: z.record(z.string()).optional(),
    key: z.string().optional(),
    priceMode: z.string().optional(),
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

export const ErrorPayloadSchema = z.object({
  message: z.string(),
});

const DiscountCodeInfoSchema = z.object({
  discountCode: ReferenceSchema,
  state: z.string(),
});

const IncludedDiscountSchema = z.object({
  discount: ReferenceSchema,
  discountedAmount: MoneySchema,
});

const DiscountOnTotalPriceSchema = z.object({
  discountedAmount: MoneySchema,
  includedDiscounts: z.array(IncludedDiscountSchema),
});

export const LineItemSchema = z
  .object({
    id: z.string(),
    productId: z.string(),
    productKey: z.string().optional(),
    name: z.record(z.string()),
    productType: ReferenceSchema,
    productSlug: z.record(z.string()).optional(),
    variant: MasterVariantSchema,
    price: PriceSchema,
    quantity: z.number(),
    totalPrice: MoneySchema,
    state: z.array(
      z.object({
        quantity: z.number(),
        state: ReferenceSchema,
      })
    ),
    discountedPricePerQuantity: z.array(z.unknown()),
    priceMode: z.string(),
    lineItemMode: z.string(),
    addedAt: z.string(),
    lastModifiedAt: z.string(),
  })
  .passthrough();

export const CartSchema = z
  .object({
    id: z.string(),
    version: z.number(),
    customerId: z.string().optional(),
    lineItems: z.array(LineItemSchema),
    cartState: z.string(),
    totalPrice: MoneySchema,
    createdAt: z.string(),
    lastModifiedAt: z.string(),
    discountCodes: z.array(DiscountCodeInfoSchema).optional(),
    discountOnTotalPrice: DiscountOnTotalPriceSchema.optional(),
    totalLineItemQuantity: z.number().optional(),
    origin: z.string(),
    shipping: z.array(z.unknown()).optional(),
    shippingMode: z.string().optional(),
  })
  .passthrough();

export type ApiError = z.infer<typeof ApiErrorSchema>;
export type AuthTokenResponse = z.infer<typeof AuthTokenResponseSchema>;
export type ProductProjectionResponse = z.infer<typeof ProductProjectionResponseSchema>;
export type Price = z.infer<typeof PriceSchema>;
export type Image = z.infer<typeof ImageSchema>;
export type Attribute = z.infer<typeof AttributeSchema>;
export type MasterVariant = z.infer<typeof MasterVariantSchema>;
export type ProductProjection = z.infer<typeof ProductProjectionSchema>;
export type ErrorPayload = z.infer<typeof ErrorPayloadSchema>;
export type Cart = z.infer<typeof CartSchema>;
export type LineItem = z.infer<typeof LineItemSchema>;
