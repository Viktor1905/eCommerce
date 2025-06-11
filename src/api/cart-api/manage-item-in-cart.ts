import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';
import { cartResponse, CartSchema } from './cart-types';
import { getCartByCartID, getLastActiveCart } from './get-cart';

interface AddLineItemAction {
  action: 'addLineItem';
  productId: string;
  quantity?: number;
}

interface RemoveLineItemAction {
  action: 'removeLineItem';
  lineItemId: string;
  quantity: number;
}

interface AddDiscountCodeAction {
  action: 'addDiscountCode';
  code: string;
}

interface RemoveDiscountCodeAction {
  action: 'removeDiscountCode';
  discountCode: {
    typeId: 'discount-code';
    id: string;
  };
}

interface ChangeLineItemQuantityAction {
  action: 'changeLineItemQuantity';
  lineItemId: string;
  quantity: number;
}

interface RecalculateAction {
  action: 'recalculate';
  updateProductData: boolean;
}

type CartAction =
  | AddLineItemAction
  | RemoveLineItemAction
  | AddDiscountCodeAction
  | RemoveDiscountCodeAction
  | ChangeLineItemQuantityAction
  | RecalculateAction;

type Actions = CartAction[];

export const updateCart = async (cart: cartResponse, actions: Actions) => {
  const version = cart.version;
  const body = {
    version,
    actions: actions,
  };

  const token = getTokenFromCookie();
  if (!token) throw new Error('Invalid or expired token');

  const response = await fetch(`${API_URL}/me/carts/${cart.id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(body),
  });

  const raw: unknown = await response.json();
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const cartData = CartSchema.safeParse(raw);
  if (!cartData.success) {
    throw new Error('Invalid response format');
  }
  return cartData.data;
};

export const addItemToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity?: number;
}) => {
  const cart = await getLastActiveCart();
  const actions: Actions = [
    {
      action: 'addLineItem',
      productId,
      quantity: quantity ?? 1,
    },
  ];

  return await updateCart(cart, actions);
};

export const removeItemFromCart = async ({
  lineItemId,
  quantity,
}: {
  lineItemId: string;
  quantity?: number;
}) => {
  const cart = await getLastActiveCart();
  const actions: Actions = [
    {
      action: 'removeLineItem',
      lineItemId,
      quantity: quantity ?? 1,
    },
  ];

  return await updateCart(cart, actions);
};

export const changeLineItemQuantity = async ({
  lineItemId,
  quantity,
}: {
  lineItemId: string;
  quantity?: number;
}) => {
  const cart = await getLastActiveCart();
  const actions: Actions = [
    {
      action: 'changeLineItemQuantity',
      lineItemId,
      quantity: quantity ?? 1,
    },
  ];

  return await updateCart(cart, actions);
};

export const addDiscountCode = async ({ code }: { code: string }) => {
  const cart = await getLastActiveCart();
  const actions: Actions = [
    {
      action: 'addDiscountCode',
      code,
    },
  ];

  const updatedCart = await updateCart(cart, actions);

  return updatedCart;
};

export const removeDiscountCode = async ({ codeID }: { codeID: string }) => {
  const cart = await getLastActiveCart();
  const actions: Actions = [
    {
      action: 'removeDiscountCode',
      discountCode: {
        typeId: 'discount-code',
        id: codeID,
      },
    },
  ];

  return await updateCart(cart, actions);
};

export const setCartAsLastActive = async (cardID: string) => {
  const cart = await getCartByCartID(cardID);
  const actions: Actions = [
    {
      action: 'recalculate',
      updateProductData: true,
    },
  ];

  return await updateCart(cart, actions);
};
