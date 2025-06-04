import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';

export function ProductsQuantity({
  onChangeLimit,
  setPageQuantity,
  ProductsLength,
}: ProductsQuantityProps): ReactElement {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeLimit(Number(event.target.value));
    setPageQuantity(Math.ceil(ProductsLength / Number(event.target.value)));
    setOpen(false);
    setItemsPerPage(event.target.value);
  };

  const [itemsPerPage, setItemsPerPage] = useState('6');
  const [open, setOpen] = useState(false);
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

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  return (
    <fieldset className="flex pr-4 self-end relative">
      <div className="flex flex-row gap-2">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="hover:cursor-pointer"
        >
          items per page:
        </div>

        <div
          className="flex items-center gap-2"
          onClick={() => {
            setOpen(true);
          }}
        >
          <label className=" w-[25px] text-center bg-jungle hover:cursor-pointer">
            <span>{itemsPerPage}</span>
          </label>
        </div>
      </div>
      {open && (
        <ul
          ref={dropdownRef}
          className="absolute right-4 top-6 z-50 text-olive rounded-lg shadow-lg max-h-60 w-fit"
        >
          {itemsPerPage !== '6' && (
            <li>
              <div className="flex items-center gap-2 ">
                <label htmlFor="six" className="border border-jungle w-[25px] text-center">
                  <span>6</span>
                  <input
                    className="hidden"
                    type="radio"
                    id="six"
                    name="quantity"
                    value="6"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </li>
          )}
          {itemsPerPage !== '12' && (
            <li>
              <div className="flex items-center gap-2">
                <label htmlFor="twelve" className="border border-jungle w-[25px] text-center">
                  <span>12</span>
                  <input
                    className="hidden"
                    type="radio"
                    id="twelve"
                    name="quantity"
                    value="12"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </li>
          )}
          {itemsPerPage !== '18' && (
            <li>
              <div className="flex items-center gap-2">
                <label htmlFor="eighteen" className="border border-jungle w-[25px] text-center">
                  <span>18</span>
                  <input
                    className="hidden"
                    type="radio"
                    id="eighteen"
                    name="quantity"
                    value="18"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </li>
          )}
          {itemsPerPage !== '24' && (
            <li>
              <div className="flex items-center gap-2 checked:text-goldenrod">
                <label htmlFor="twenty-four" className="border border-jungle w-[25px] text-center">
                  <span>24</span>
                  <input
                    className="hidden"
                    type="radio"
                    id="twenty-four"
                    name="quantity"
                    value="24"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </li>
          )}
        </ul>
      )}
    </fieldset>
  );
}

interface ProductsQuantityProps {
  onChangeLimit: (limit: number) => void;
  setPageQuantity: (page: number) => void;
  ProductsLength: number;
}
