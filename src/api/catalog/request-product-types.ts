import { z } from 'zod';
import { API_CONFIG } from '../login/login.ts';
import { getCatalogToken } from './catalog-token.ts';

export async function getProductTypes(): Promise<typesResponse> {
  const token: string = await getCatalogToken();
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-types`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const raw: unknown = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch product types');
    }

    const parsedTypes = ProductTypesSchema.safeParse(raw);

    if (!parsedTypes.success) {
      throw new Error('Invalid products response format');
    }

    return parsedTypes.data;
  } catch (error) {
    console.error('Failed to fetch types:', error);
    throw new Error(
      `Product types request failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export type typesResponse = z.infer<typeof ProductTypesSchema>;

export const ProductTypesSchema = z
  .object({
    results: z.array(
      z
        .object({
          description: z.string(),
          id: z.string(),
          name: z.string(),
        })
        .passthrough()
    ),
  })
  .passthrough();
