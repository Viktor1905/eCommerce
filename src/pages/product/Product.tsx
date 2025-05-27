import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductDetails } from '../../api/products/products';
import { ProductProjection } from '../../api/products/types/schemas';
import { ProductImageSlider } from './ProductImageSlider';

export function ProductDetailsPage() {
  useEffect(() => {
    document.title = 'Products | Zoo Shop | Pet Supplies';
  }, []);
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string>('');

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

  if (!id) return <div>Product Not Fond</div>;
  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  function handleOpenSlider(state: boolean) {
    setIsOpen(state);
  }

  return (
    <div className={styles['products-box']}>
      <h2 className={styles['products-title']}>{product.name['en-US']}</h2>
      <div className={styles['products-slider']}>
        {product.masterVariant.images.map((img) => (
          <img
            key={img.url}
            className={styles['products-image']}
            src={img.url}
            alt={img.label}
            onClick={() => {
              setSelectedUrl(img.url);
              handleOpenSlider(true);
            }}
          />
        ))}
      </div>
      <h3 className={styles['products-description-title']}>Description</h3>
      <p className={styles['products-description']}>{product.description['en-US']}</p>
      <ProductImageSlider
        images={product.masterVariant.images}
        names={product.name}
        isOpen={isOpen}
        mainImageUrl={selectedUrl}
        onClose={handleOpenSlider}
      />
    </div>
  );
}

function Spinner() {
  return <div className={styles.spinner} />;
}
