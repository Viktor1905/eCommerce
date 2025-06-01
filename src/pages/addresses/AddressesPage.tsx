import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromCookie } from '../profile/ProfilePage';
import { fetchProfile, setDefaultAddress } from '../../api/profile/profile';
import { customerResponse, userAddress } from '../../api/sign-up/sign-up';
import AddressModalDialog from './AddressModalDialog/AddressModalDialog';
import AddressSelector, { addressToString } from '../../components/AddressSelector/AddressSelector';

export default function AddressesPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<customerResponse | null>(null);
  const [address, setAddress] = useState<userAddress | undefined>(undefined);
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function setAddressToEdit(newAddress: userAddress) {
    if (customer) {
      const selected = customer.addresses.find((a) => a.id === newAddress.id);
      if (selected) {
        setAddress(selected);
        setIsModalOpen(true);
      }
    }
  }

  async function handleSetDefaultAddress(addressID: string, defaultAddressType: string) {
    const token = getTokenFromCookie();
    if (!token || !customer) return;

    try {
      const updatedCustomer = await setDefaultAddress({
        addressID,
        defaultAddressType,
        customer,
        token,
      });
      setCustomer(updatedCustomer); // update UI with fresh data
    } catch (err) {
      console.error(err);
      // optionally show toast or inline error
    }
  }

  return (
    <section className="m-auto relative flex flex-col justify-center items-center rounded-2xl bg-white min-w-[300px] max-w-[450px]">
      <button
        type="button"
        onClick={() => {
          void navigate('/profile', { replace: true });
        }}
        className="absolute top-5 left-6 text-xl text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
        aria-label="Back"
      >
        &#x25C0;
      </button>
      <h2 className="text-2xl pt-4 text-center text-jungle font-main-bd">Addresses</h2>
      {isModalOpen && customer && (
        <AddressModalDialog address={address} customer={customer} closeModal={closeModal} />
      )}
      {loading ? (
        <div className="text-jungle p-2 ml-auto mr-auto">Loading...</div>
      ) : customer ? (
        <div className="flex flex-col gap-2 m-2 p-2 pl-4 pr-4 w-full rounded-3xl">
          <AddressSelector
            addresses={customer.addresses}
            selectedAddressID={customer.defaultShippingAddressId}
            validAddressesID={customer.shippingAddressIds}
            id="defaultBillingAddress"
            label="Default shipping"
            onSubmit={(address) => handleSetDefaultAddress(address.id, 'setDefaultShippingAddress')}
          />
          <AddressSelector
            addresses={customer.addresses}
            selectedAddressID={customer.defaultBillingAddressId}
            validAddressesID={customer.billingAddressIds}
            id="defaultShippingAddress"
            label="Default billing"
            onSubmit={(address) => handleSetDefaultAddress(address.id, 'setDefaultBillingAddress')}
          />
          {/**existing addresses to edit*/}
          <div className="flex flex-col gap-8">{renderAddresses(customer, setAddressToEdit)}</div>
          {/**add new address*/}
          <button
            className="w-fit p-1 ml-auto mr-auto px-3 text-olive min-w-3xs bg-light-gray rounded-xl m-2 text-lg font-main font-medium hover:cursor-pointer hover:bg-gray-300"
            onClick={() => {
              setAddress(undefined);
              setIsModalOpen(true);
            }}
          >
            Add new address
          </button>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </section>
  );
}

export function renderAddresses(
  customer: customerResponse,
  callback: (address: userAddress) => void
) {
  return customer.addresses.map((address) => {
    const isShipping = customer.shippingAddressIds.find((id) => id === address.id) !== undefined;
    const isBilling = customer.billingAddressIds.find((id) => id === address.id) !== undefined;
    const isDefaultBilling = customer.defaultShippingAddressId === address.id;
    const isDefaultShipping = customer.defaultBillingAddressId === address.id;
    return (
      <div key={address.id} className="flex no-wrap gap-2 justify-between text-olive">
        {renderAddress({
          isShipping,
          isBilling,
          isDefaultBilling,
          isDefaultShipping,
          address,
        })}
        <button
          onClick={() => {
            callback(address);
          }}
          className="text-olive font-bold hover:text-gray-500 focus:outline-none p-1 text-sm hover:cursor-pointer"
        >
          edit
        </button>
      </div>
    );
  });
}

export function renderAddress(addressInfo: {
  isShipping: boolean;
  isBilling: boolean;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
  address: userAddress;
}): ReactElement {
  return (
    <div key={addressInfo.address.id}>
      <div className="flex flex-row flex-wrap gap-2">
        {addressInfo.isShipping && (
          <div className="bg-light-gray p-1 pl-2 pr-2 rounded-full text-sm w-fit">shipping</div>
        )}
        {addressInfo.isBilling && (
          <div className="bg-light-gray p-1 pl-2 pr-2 rounded-full text-sm w-fit">billing</div>
        )}
        {addressInfo.isDefaultShipping && (
          <div className="bg-blue-100 p-1 pl-2 pr-2 rounded-full text-sm w-fit">
            default shipping
          </div>
        )}
        {addressInfo.isDefaultBilling && (
          <div className="bg-blue-100 p-1 pl-2 pr-2 rounded-full text-sm w-fit">
            default billing
          </div>
        )}
      </div>

      <p className="text-lg w-fit break-words">{addressToString(addressInfo.address)}</p>
    </div>
  );
}
