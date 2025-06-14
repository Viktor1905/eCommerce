import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductDetails } from '../../api/products/products';
import { ProductProjection } from '../../api/products/types/schemas';
import { ProductImageSlider } from './ProductImageSlider';
import { AddProductToCart } from './AddProductToCart';

export function ProductDetailsPage() {
  useEffect(() => {
    document.title = 'Products | Zoo Shop | Pet Supplies';
  }, []);
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mainImage, setMainImage] = useState(' ');

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    void (async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (product?.masterVariant.images.length) {
      setMainImage(product.masterVariant.images[0].url);
    }
  }, [product]);

  if (!id) return <div>Product Not Found</div>;
  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  function handleOpenSlider(state: boolean) {
    setIsOpen(state);
  }

  function slideImage(index: number) {
    const arrayImages = product?.masterVariant.images;
    const findMainImage = arrayImages?.findIndex((img) => img.url === mainImage);
    let currentIndex;
    if (arrayImages && findMainImage !== undefined && findMainImage !== -1) {
      currentIndex = findMainImage + index;
      if (currentIndex >= 0 && currentIndex < arrayImages.length)
        setMainImage(arrayImages[currentIndex].url);
      if (currentIndex < 0) setMainImage(arrayImages[arrayImages.length - 1].url);
      if (currentIndex >= arrayImages.length) setMainImage(arrayImages[0].url);
    }
  }

  return (
    <div className={styles['products-box']}>
      <h2 className={styles['products-title']}>{product.name['en-US']}</h2>
      <div className={styles['products-info']}>
        <div className={styles['products-slider']}>
          {product.masterVariant.images.map((img) => (
            <img
              key={img.url}
              className={styles['products-image']}
              src={img.url}
              alt={img.label}
              onClick={() => {
                setMainImage(img.url);
              }}
            />
          ))}
        </div>
        <div className={styles['products-slider-main-image']}>
          <img
            className={styles['products-image']}
            src={mainImage}
            alt={product.masterVariant.images[0].label}
            onClick={() => {
              handleOpenSlider(true);
            }}
          />
          <div className={styles.arrows}>
            <span
              className={`material-symbols-outlined ${styles['left-arrow']}`}
              onClick={() => {
                slideImage(1);
              }}
            >
              arrow_circle_left
            </span>
            <span
              className={`material-symbols-outlined ${styles['right-arrow']}`}
              onClick={() => {
                slideImage(-1);
              }}
            >
              arrow_circle_right
            </span>
          </div>
        </div>
        <ShowPrice product={product} />
      </div>
      <h3 className={styles['products-description-title']}>Description</h3>
      <p className={styles['products-description']}>{product.description['en-US']}</p>
      <ProductImageSlider
        images={product.masterVariant.images}
        names={product.name}
        isOpen={isOpen}
        mainImageUrl={mainImage}
        onClose={handleOpenSlider}
      />
    </div>
  );
}

export function Spinner() {
  return <div className={styles.spinner} />;
}

function ShowPrice({ product }: { product: ProductProjection }) {
  const priceCents = product.masterVariant.prices[0].value.centAmount;
  const discountPriceCents = product.masterVariant.prices[0].discounted?.value.centAmount ?? 0;

  const price = formatMoney(priceCents);
  const [dollar, cent] = price;

  const discountPrice = formatMoney(discountPriceCents);
  const [dollarDiscount, centDiscount] = discountPrice;

  const currencyCode = product.masterVariant.prices[0].value.currencyCode;
  const discountPercent = ((priceCents - discountPriceCents) / priceCents) * 100;

  return (
    <div className={styles['products-price']}>
      <div className={styles['main-price']}>
        {!product.masterVariant.prices[0].discounted ? (
          <>
            <span className={styles['current-code']}>{currencyCode}</span>
            <span className={styles['current-dollar']}>{dollar}</span>
            <span className={styles['current-cent']}>{cent}</span>
          </>
        ) : (
          <>
            <span className={styles['discount-percent']}>-{discountPercent}%</span>
            <span className={styles['current-code']}>{currencyCode}</span>
            <span className={styles['discount-dollar']}>{dollarDiscount}</span>
            <span className={styles['discount-cent']}>{centDiscount}</span>
          </>
        )}
      </div>
      <div className={styles['discount-block']}>
        {!product.masterVariant.prices[0].discounted ? (
          <span className={styles['text-best-prise']}>Best Price</span>
        ) : (
          <div className={styles['old-price']}>
            <span>List Price:</span>
            <span className={styles['current-code']}>{currencyCode}</span>
            <span className={styles['current-dollar']}>{dollar}.</span>
            <span className={styles['current-cent']}>{cent}</span>
          </div>
        )}
        <div className={styles['add-discount']}>
          <span className={styles['add-discount-title']}>Sign in to redeem.</span> Enjoy an extra
          10% off in celebration of your pet&rsquo;s birthday. Use code PETBDAY10 at checkout.
        </div>
      </div>
      <AddProductToCart />
    </div>
  );
}

function formatMoney(price: number): string[] {
  const dollars = Math.floor(price / 100).toString();
  const cents = (price % 100).toString().padStart(2, '0');
  return [dollars, cents];
}
