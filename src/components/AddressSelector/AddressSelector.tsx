import { useEffect, useRef, useState } from 'react';
import { userAddress } from '../../api/sign-up/sign-up';
import { COUNTRIES_DATA } from '../CountrySelector/countries-data/countries-data';

interface CustomDropdownProps {
  error?: string;
  id: string;
  required?: boolean;
  selectedAddressID?: string;
  addresses: userAddress[];
  validAddressesID: string[];
  label: string;
}

export default function CustomAddressDropdown({
  error,
  id,
  required,
  selectedAddressID,
  addresses,
  validAddressesID,
  label,
}: CustomDropdownProps) {
  const selectedAddress = addresses.find((a) => a.id === selectedAddressID);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [pickedAddress, setPickedAddress] = useState(selectedAddress);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
        event.stopPropagation();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col max-w-full w-full">
      <label
        htmlFor={id}
        className="p-1 capitalize text-goldenrod font-medium font-main flex flex-row "
      >
        {required && <span className="text-red-700">*</span>}
        {label}
      </label>

      <div
        id={id}
        role="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="p-2 bg-khaki text-olive rounded-lg font-main text-left hover:cursor-pointer w-full max-w-full truncate whitespace-nowrap"
      >
        {pickedAddress ? addressToString(pickedAddress) : 'Select an address'}
      </div>

      {open && (
        <ul
          ref={dropdownRef}
          className="absolute top-18 z-50 bg-khaki text-olive rounded-lg shadow-lg max-h-60 w-full"
        >
          {addresses
            .filter((address) => validAddressesID.includes(address.id))
            .map((address) => (
              <li
                key={address.id}
                className="py-2 px-2 hover:bg-light-gray cursor-pointer"
                onClick={() => {
                  setPickedAddress(address);
                  setOpen(false);
                }}
              >
                <div className=" truncate whitespace-nowrap overflow-hidden">
                  {addressToString(address)}
                </div>
              </li>
            ))}
        </ul>
      )}

      <button
        disabled={isSubmitting}
        onClick={() => {
          setIsSubmitting(true);
        }}
        className={
          'w-fit p-1 ml-auto mr-auto px-3 text-olive min-w-3xs bg-light-gray ' +
          ' rounded-xl m-1 text-lg font-main font-medium hover:cursor-pointer hover:bg-gray-300'
        }
      >
        {isSubmitting ? 'Loading...' : 'Submit changes'}
      </button>

      <p className="text-sm text-coral h-5 p-1 break-words whitespace-normal">
        {error ?? '\u00A0'}
      </p>
    </div>
  );
}

export function addressToString(address: {
  streetName: string;
  city: string;
  country: string;
  postalCode: string;
}): string {
  const countryName =
    COUNTRIES_DATA.find((c) => c.code === address.country)?.name ?? address.country;
  return `${address.streetName}, ${address.city}, ${countryName}, ${address.postalCode}`;
}
