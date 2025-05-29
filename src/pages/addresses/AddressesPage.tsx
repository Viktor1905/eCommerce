import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromCookie, renderAddress } from '../profile/ProfilePage';
import { fetchProfile } from '../../api/profile/profile';
import { customerResponse, userAddress } from '../../api/sign-up/sign-up';
import AddressModalDialog from './AddressModalDialog/AddressModalDialog';

export default function AddressesPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<customerResponse | null>(null);
  const [address, setAddress] = useState<userAddress | null>(null);
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

  return (
    <section className="min-w-[300px] w-fit  m-auto relative flex flex-col justify-center items-center rounded-2xl bg-white">
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
        <div className="text-jungle p-2 m-2">Loading...</div>
      ) : customer ? (
        <div className="p-2 m-1 flex flex-col gap-2 text-olive">
          {/*addresses block*/}
          <div className="flex flex-col gap-2 m-2  pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <div className="flex flex-col gap-4">
              {customer.addresses.map((address) => {
                const isShipping = customer.shippingAddressIds.find((id) => id === address.id);
                const isDefault =
                  customer.defaultBillingAddressId === address.id ||
                  customer.defaultShippingAddressId === address.id;
                return (
                  <div key={address.id} className="flex no-wrap gap-2">
                    {renderAddress(isShipping ? 'Shipping' : 'Billing', {
                      isDefault,
                      address,
                    })}
                    <button
                      type="button"
                      onClick={() => {
                        const selected = customer.addresses.find((a) => a.id === address.id);
                        if (selected) {
                          setAddress(selected);
                          setIsModalOpen(true);
                        }
                      }}
                      className="text-lg text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
                      aria-label="Close modal"
                    >
                      ✏️
                    </button>
                  </div>
                );
              })}
            </div>
            <button
              className="w-fit p-1 ml-auto mr-auto px-3 min-w-3xs bg-light-gray rounded-xl m-2 text-lg font-main font-medium hover:cursor-pointer"
              onClick={() => {
                setAddress(null);
                setIsModalOpen(true);
              }}
            >
              Add new address
            </button>
          </div>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </section>
  );
}
