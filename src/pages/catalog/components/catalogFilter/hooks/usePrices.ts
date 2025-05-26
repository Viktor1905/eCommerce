import {
  ProductProjection,
  ProductProjectionResponse,
} from '../../../../../api/catalog/products.types.ts';

export function usePrices(products: ProductProjectionResponse | null): UsePrices {
  const pricesList: number[] =
    products?.results.map((item: ProductProjection): number => {
      const priceObj = item.masterVariant.prices[0];
      return priceObj.discounted?.value.centAmount
        ? priceObj.discounted.value.centAmount / 100
        : priceObj.value.centAmount / 100;
    }) ?? [];

  const lowestPrice = Math.min(...pricesList);
  const highestPrice = Math.max(...pricesList);

  return { pricesList, lowestPrice, highestPrice };
}

interface UsePrices {
  pricesList: number[];
  lowestPrice: number;
  highestPrice: number;
}
