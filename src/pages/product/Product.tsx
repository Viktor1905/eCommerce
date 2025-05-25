import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductDetails } from '../../api/products/products';
import { ProductProjection } from '../../api/products/types/schemas';

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className={styles['products-box']}>
      <h2 className={styles['products-title']}>{product.name['en-US']}</h2>
      <img className={styles['products-image']} src={product.masterVariant.images[0].url}></img>
      <img className={styles['products-image']} src={product.masterVariant.images[1].url}></img>
      <h3 className={styles['products-description-title']}>Description</h3>
      <p className={styles['products-description']}>{product.description['en-US']}</p>
    </div>
  );
}

function Spinner() {
  return <div className={styles.spinner} />;
}
