import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../../api/profile/profile';
import { customerResponse, userAddress } from '../../api/sign-up/sign-up';
import { COUNTRIES_DATA } from '../../components/CountrySelector/countries-data/countries-data';
import { format } from 'date-fns';

export function getTokenFromCookie(): string | null {
  const match = /(?:^|;\s*)access_token=([^;]+)/.exec(document.cookie);
  return match ? match[1] : null;
}

export function ProfilePage() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<customerResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [billingAddress, setBillingAddress] = useState<{
    isDefault: boolean;
    address?: userAddress;
  }>({
    isDefault: false,
    address: undefined,
  });
  const [shippingAddress, setShippingAddress] = useState<{
    isDefault: boolean;
    address?: userAddress;
  }>({
    isDefault: false,
    address: undefined,
  });

  useEffect(() => {
    document.title = 'Profile | Zoo Shop | Pet Supplies';

    const token = getTokenFromCookie();
    if (!token) {
      void navigate('/login', { replace: true });
      return;
    }

    const fetchCustomer = async () => {
      try {
        const customerInfo = await fetchProfile(token);
        // Set billing address
        if (customerInfo.defaultBillingAddressId) {
          const billing = customerInfo.addresses.find(
            (address) => address.id === customerInfo.defaultBillingAddressId
          );
          setBillingAddress({ isDefault: true, address: billing });
        } else {
          const billing = customerInfo.addresses.find(
            (address) => address.id === customerInfo.billingAddressIds[0]
          );
          setBillingAddress({ isDefault: false, address: billing });
        }

        // Set shipping address (similar logic)
        if (customerInfo.defaultShippingAddressId) {
          const shipping = customerInfo.addresses.find(
            (address) => address.id === customerInfo.defaultShippingAddressId
          );
          setShippingAddress({ isDefault: true, address: shipping });
        } else {
          const shipping = customerInfo.addresses.find(
            (address) => address.id === customerInfo.shippingAddressIds[0]
          );
          setShippingAddress({ isDefault: false, address: shipping });
        }

        setCustomer(customerInfo);
      } catch (error) {
        console.error('Error fetching profile:', error);
        void navigate('/login', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    void fetchCustomer();
  }, [navigate]);
  useEffect(() => {
    document.title = 'Profile | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <section className="w-fit m-auto flex flex-col justify-center items-center rounded-2xl bg-white">
      <h2 className="text-2xl pt-4 text-center text-jungle font-main-bd">Profile</h2>
      {loading ? (
        <div className="text-jungle p-2 m-2">Loading...</div>
      ) : customer ? (
        <div className="p-2 m-1 flex flex-col gap-2 text-olive">
          {/*user info block*/}
          <div className="flex flex-col gap-2 m-2 bg-light-gray pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <p className="text-lg font-bold flex justify-between">
              {customer.firstName} {customer.lastName}
              <button className="p-1 text-sm hover:cursor-pointer justify-self-end">edit</button>
            </p>
            <p>{format(customer.dateOfBirth, 'dd MMMM, yyyy')}</p>
            <p>{customer.email}</p>
          </div>
          {/*addresses block*/}
          <div className="flex flex-col gap-2 m-2  pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <p className="text-lg font-bold">Addresses</p>
            <div className="flex flex-col gap-4">
              {renderAddress('Billing', billingAddress)}
              {renderAddress('Shipping', shippingAddress)}
            </div>
            <button
              className="w-fit p-1 ml-auto mr-auto px-3 min-w-3xs bg-light-gray rounded-xl m-2 text-lg font-main font-medium hover:cursor-pointer"
              onClick={() => {
                void navigate('addresses');
              }}
            >
              Manage addresses ➔
            </button>
          </div>
          {/*pet info block*/}
          <div className="flex flex-col gap-2 m-2 bg-light-gray pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <p className="text-lg font-bold flex justify-between">
              Pet
              <button className="p-1 text-sm text-olive hover:cursor-pointer justify-self-end">
                edit
              </button>
            </p>
            <p>{customer.custom.fields.petName}</p>
            <p>{format(customer.custom.fields.petBirthDate, 'dd MMMM, yyyy')}</p>
          </div>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </section>
  );
}

function addressToString({
  streetName,
  city,
  country,
  postalCode,
}: {
  streetName: string;
  city: string;
  country: string;
  postalCode: string;
}): string {
  const countryName = COUNTRIES_DATA.find((c) => c.code === country)?.name ?? country;
  return `${streetName}, ${city}, ${countryName}, ${postalCode}`;
}

export function renderAddress(
  label: string,
  addressInfo: { isDefault: boolean; address?: userAddress }
): ReactElement {
  if (!addressInfo.address) return <div>{`Missing ${label} address`}</div>;
  return (
    <div id={addressInfo.address.id}>
      <span className="font-bold">{label}:</span>
      {addressInfo.isDefault && (
        <span className="bg-light-gray ml-2 p-1 pl-2 pr-2 rounded-full text-sm">default</span>
      )}
      <p className="text-lg w-fit break-words">{addressToString(addressInfo.address)}</p>
    </div>
  );
}
