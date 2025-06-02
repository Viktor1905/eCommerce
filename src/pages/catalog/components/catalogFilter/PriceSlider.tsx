import { Control, Controller } from 'react-hook-form';
import Slider from 'rc-slider';
import { Filters } from './CatalogFilter.tsx';
import 'rc-slider/assets/index.css';

export function PriceSlider({ control, lowestPrice, highestPrice }: PriceSliderProps) {
  return (
    <div className={'p-2'}>
      <h2> Price: </h2>
      <Controller
        name="priceRange"
        control={control}
        render={({ field }) => (
          <div>
            <Slider
              range
              min={lowestPrice}
              max={highestPrice}
              value={Array.isArray(field.value) ? field.value : [lowestPrice, highestPrice]}
              onChange={(value: number | number[]): void => {
                if (Array.isArray(value)) {
                  field.onChange(value);
                }
              }}
              step={1}
              styles={{
                track: { backgroundColor: '#2aa989', height: 6, borderRadius: 10 },
                handle: {
                  backgroundColor: '#fff',
                  border: '2px solid #2aa989',
                },
              }}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${field.value[0]}</span>
              <span>${field.value[1]}</span>
            </div>
          </div>
        )}
      />
    </div>
  );
}

interface PriceSliderProps {
  control: Control<Filters>;
  lowestPrice: number;
  highestPrice: number;
}
