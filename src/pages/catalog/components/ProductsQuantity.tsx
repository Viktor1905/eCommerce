import { ChangeEvent, ReactElement } from 'react';

export function ProductsQuantity({
  onChangeLimit,
  setPageQuantity,
  ProductsLength,
}: ProductsQuantityProps): ReactElement {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeLimit(Number(event.target.value));
    setPageQuantity(Math.ceil(ProductsLength / Number(event.target.value)));
  };
  return (
    <fieldset className="flex p-4 self-end ">
      <div className="flex items-center gap-2 ">
        <label
          htmlFor="six"
          className="border border-jungle w-[25px] text-center has-checked:bg-jungle has-checked:border-0"
        >
          <span>6</span>
          <input
            className="hidden"
            type="radio"
            id="six"
            name="quantity"
            value="6"
            defaultChecked
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="flex items-center gap-2">
        <label
          htmlFor="twelve"
          className="border border-jungle w-[25px] text-center has-checked:bg-jungle has-checked:border-0"
        >
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
      <div className="flex items-center gap-2">
        <label
          htmlFor="eighteen"
          className="border border-jungle w-[25px] text-center has-checked:bg-jungle has-checked:border-0"
        >
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
      <div className="flex items-center gap-2 checked:text-goldenrod">
        <label
          htmlFor="twenty-four"
          className="border border-jungle w-[25px] text-center has-checked:bg-jungle has-checked:border-0"
        >
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
    </fieldset>
  );
}

interface ProductsQuantityProps {
  onChangeLimit: (limit: number) => void;
  setPageQuantity: (page: number) => void;
  ProductsLength: number;
}
