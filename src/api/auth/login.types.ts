export interface LoginData {
  email: string;
  password: string;
  anonymousCart?: {
    id: string;
    typeId: string;
  };
}

export interface LoginResponse {
  customer: {
    addresses: string[];
    email: string;
    firstName: string;
    id: string;
    isEmailVerified: boolean;
    lastName: string;
    password: string;
    version: number;
    createdAt: string;
    lastModifiedAt: string;
    authenticationMode: string;
    stores: {
      key?: string;
      typeId?: string;
    }[];
  };
}
