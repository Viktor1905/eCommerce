import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../../api/profile/profile';
import { customerResponse } from '../../api/sign-up/sign-up';
import { format } from 'date-fns';
import UserModalDialog from './components/UserModalDialog/UserModalDialog';
import PetModalDialog from './components/PetModalDialog/PetModalDialog';
import PasswordModalDialog from './components/PasswordModalDialog/PasswordModalDialog';
import { renderAddress } from '../addresses/AddressesPage';

export function getTokenFromCookie(): string | null {
  const match = /(?:^|;\s*)access_token=([^;]+)/.exec(document.cookie);
  return match ? match[1] : null;
}

export function ProfilePage() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<customerResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  function closeModal() {
    setIsUserModalOpen(false);
    setIsPetModalOpen(false);
    setIsPasswordModalOpen(false);
  }

  const refreshCustomer = useCallback(async () => {
    const token = getTokenFromCookie();
    if (!token) {
      void navigate('/login', { replace: true });
      return;
    }

    try {
      const customerInfo = await fetchProfile(token);
      setCustomer(customerInfo);
    } catch (error) {
      console.error('Error fetching profile:', error);
      void navigate('/login', { replace: true });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    void refreshCustomer();
  }, [refreshCustomer]);
  useEffect(() => {
    document.title = 'Profile | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <section className="w-fit m-auto flex flex-col justify-center items-center rounded-2xl bg-white">
      <h2 className="text-2xl pt-4 text-center text-jungle font-main-bd">Profile</h2>
      {isUserModalOpen && !isPetModalOpen && !isPasswordModalOpen && customer && (
        <UserModalDialog
          user={customer}
          closeModal={closeModal}
          refreshCustomer={refreshCustomer}
        />
      )}
      {isPetModalOpen && !isUserModalOpen && !isPasswordModalOpen && customer && (
        <PetModalDialog user={customer} closeModal={closeModal} refreshCustomer={refreshCustomer} />
      )}
      {isPasswordModalOpen && !isPetModalOpen && !isUserModalOpen && customer && (
        <PasswordModalDialog
          user={customer}
          closeModal={closeModal}
          refreshCustomer={refreshCustomer}
        />
      )}
      {loading ? (
        <div className="text-jungle p-2 m-2">Loading...</div>
      ) : customer ? (
        <div className="p-2 m-1 flex flex-col gap-2 text-olive">
          {/*user info block*/}
          <div className="flex flex-col gap-2 m-2 bg-light-gray pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <p className="text-lg font-bold flex justify-between">
              {customer.firstName} {customer.lastName}
              <button
                className="p-1 font-bold text-sm hover:cursor-pointer hover:text-gray-500"
                onClick={() => {
                  setIsUserModalOpen(true);
                }}
              >
                edit
              </button>
            </p>
            <p>{format(customer.dateOfBirth, 'dd MMMM, yyyy')}</p>
            <p>{customer.email}</p>
          </div>
          <button
            className="w-fit p-1 ml-auto mr-auto px-3 min-w-3xs bg-light-gray rounded-xl m-2 text-lg font-main font-medium hover:cursor-pointer hover:bg-gray-300"
            onClick={() => {
              setIsPasswordModalOpen(true);
            }}
          >
            Change password
          </button>
          {/*pet info block*/}
          <div className="flex flex-col gap-2 m-2 bg-light-gray pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <p className="text-lg font-bold flex justify-between">
              Pet
              <button
                className="p-1 text-sm text-olive hover:cursor-pointer justify-self-end"
                onClick={() => {
                  setIsPetModalOpen(true);
                }}
              >
                edit
              </button>
            </p>
            <p>{customer.custom.fields.petName}</p>
            <p>{format(customer.custom.fields.petBirthDate, 'dd MMMM, yyyy')}</p>
          </div>
          {/*addresses block*/}
          <div className="flex flex-col gap-2 m-2  pt-2 pb-2 pl-4 pr-4 rounded-3xl">
            <p className="text-lg font-bold">Addresses</p>
            <div className="flex flex-col gap-8">
              {customer.addresses.map((address) => {
                const isDefaultShipping = address.id === customer.defaultShippingAddressId;
                const isDefaultBilling = address.id === customer.defaultBillingAddressId;
                const isShipping =
                  customer.shippingAddressIds.findIndex((id) => id === address.id) >= 0
                    ? true
                    : false;
                const isBilling =
                  customer.billingAddressIds.findIndex((id) => id === address.id) >= 0
                    ? true
                    : false;
                return renderAddress({
                  address,
                  isDefaultShipping,
                  isDefaultBilling,
                  isShipping,
                  isBilling,
                });
              })}
            </div>
            <button
              className="w-fit p-1 ml-auto mr-auto px-3 min-w-3xs bg-light-gray rounded-xl m-2 text-lg font-main font-medium hover:cursor-pointer hover:bg-gray-300"
              onClick={() => {
                void navigate('addresses');
              }}
            >
              Manage addresses ➔
            </button>
          </div>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </section>
  );
}
