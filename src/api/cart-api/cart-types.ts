import { z } from 'zod';
import { MasterVariantSchema, PriceSchema } from '../products/types/schemas';

const MoneySchema = z.object({
  type: z.string(),
  currencyCode: z.string(),
  centAmount: z.number(),
  fractionDigits: z.number(),
});

const DiscountOnTotalPriceSchema = z
  .object({
    discountedAmount: MoneySchema,
    includedDiscounts: z.array(z.unknown()),
  })
  .optional();

const DiscountCodeInfoSchema = z.object({
  discountCode: z.object({
    typeId: z.string(),
    id: z.string(),
  }),
  state: z.string(),
});

const DirectDiscountSchema = z.object({
  id: z.string(),
  value: z.object({ type: z.string(), permyriad: z.number() }),
  targer: z.object({ type: z.string(), predicate: z.number() }),
});

export const LineItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  productKey: z.string(),
  name: z.record(z.string()),
  productType: z.object({
    typeId: z.literal('product-type'),
    id: z.string(),
    version: z.number(),
  }),
  productSlug: z.record(z.string()),
  variant: MasterVariantSchema,
  price: PriceSchema.passthrough(),
  quantity: z.number(),
  discountedPricePerQuantity: z.array(z.unknown()), // structure??
  perMethodTaxRate: z.array(z.unknown()), // structure??
  addedAt: z.string().datetime(),
  lastModifiedAt: z.string().datetime(),
  state: z.array(
    z.object({
      quantity: z.number(),
      state: z.object({
        typeId: z.literal('state'),
        id: z.string(),
      }),
    })
  ),
  priceMode: z.enum(['Platform', 'External']),
  lineItemMode: z.enum(['Standard', 'GiftLineItem']),
  totalPrice: z.object({
    type: z.literal('centPrecision'),
    currencyCode: z.string(),
    centAmount: z.number(),
    fractionDigits: z.number(),
  }),
  taxedPricePortions: z.array(z.unknown()), // structure??
});

export const CartSchema = z
  .object({
    id: z.string(),
    version: z.number(),
    customerId: z.string().optional(),
    cartState: z.string(),
    totalPrice: z.object({
      type: z.string(),
      currencyCode: z.string(),
      centAmount: z.number(),
      fractionDigits: z.number(),
    }),
    discountCodes: z.array(DiscountCodeInfoSchema).optional(),
    directDiscounts: z.array(DirectDiscountSchema).optional(),
    discountOnTotalPrice: DiscountOnTotalPriceSchema,
    taxMode: z.string(),
    taxRoundingMode: z.string(),
    taxCalculationMode: z.string(),
    deleteDaysAfterLastModification: z.number().optional(),
    origin: z.string(),
    totalLineItemQuantity: z.number().optional(),
    lineItems: z.array(LineItemSchema).optional(),
  })
  .passthrough();

export type cartResponse = z.infer<typeof CartSchema>;
export type cartItemResponse = z.infer<typeof LineItemSchema>;

export const mew = {
  id: '9cedde38-11b0-48bb-866d-35933b33ef9e',
  productId: 'ac96bbe8-502c-41d4-8e3b-c5067cf3c243',
  productKey: 'Transformer-house-dog',
  name: {
    'en-US': 'Transformer house "Vorsinka"',
    ru: 'Дом-трансформер "Ворсинка", 43 х 43 х 34 см',
  },
  productType: {
    typeId: 'product-type',
    id: '648d662f-dbd9-4419-a38a-c213dd13a42b',
    version: 9,
  },
  productSlug: {
    'en-US': 'transformer-house-vorsinka-43-x-43-x-34-cm',
    ru: 'transformer-house-vorsinka-43-x-43-x-34-cm',
  },
  variant: {
    id: 1,
    sku: 'Transformer-house-dog',
    prices: [
      {
        id: 'dae5e996-ae83-45e7-a957-7eedbe6c7b82',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3000,
          fractionDigits: 2,
        },
      },
    ],
    assets: [],
    images: [
      {
        url: 'https://images.cdn.europe-west1.gcp.commercetools.com/22452355-5cf7-4d0b-b952-020fc9ac88f1/700%20%288%29-haUrO2hi.jpg',
        label: 'Transformer-house-dog',
        dimensions: {
          w: 700,
          h: 700,
        },
      },
      {
        url: 'https://images.cdn.europe-west1.gcp.commercetools.com/22452355-5cf7-4d0b-b952-020fc9ac88f1/700%20%2811%29-YhiJh3kE.jpg',
        label: 'Transformer-house-dog',
        dimensions: {
          w: 700,
          h: 700,
        },
      },
      {
        url: 'https://images.cdn.europe-west1.gcp.commercetools.com/22452355-5cf7-4d0b-b952-020fc9ac88f1/700%20%2810%29-zwV3PZmr.jpg',
        label: 'Transformer-house-dog',
        dimensions: {
          w: 700,
          h: 700,
        },
      },
      {
        url: 'https://images.cdn.europe-west1.gcp.commercetools.com/22452355-5cf7-4d0b-b952-020fc9ac88f1/700%20%289%29-orQBIodT.jpg',
        label: 'Transformer-house-dog',
        dimensions: {
          w: 700,
          h: 700,
        },
      },
    ],
  },
  price: {
    id: 'dae5e996-ae83-45e7-a957-7eedbe6c7b82',
    value: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 3000,
      fractionDigits: 2,
    },
  },
  quantity: 13,
  discountedPricePerQuantity: [],
  perMethodTaxRate: [],
  addedAt: '2025-06-10T14:55:48.246Z',
  lastModifiedAt: '2025-06-10T14:55:48.246Z',
  state: [
    {
      quantity: 13,
      state: {
        typeId: 'state',
        id: 'fa016697-0a2a-45b3-84ec-2596d848f68c',
      },
    },
  ],
  priceMode: 'Platform',
  lineItemMode: 'Standard',
  totalPrice: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: 39000,
    fractionDigits: 2,
  },
  taxedPricePortions: [],
};
