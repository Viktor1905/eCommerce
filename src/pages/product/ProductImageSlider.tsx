import styles from './ProductImageSlider.module.css';
import { useLayoutEffect, useState } from 'react';
import { useRef } from 'react';

interface ImageItem {
  url: string;
  label?: string;
  dimensions?: { w: number; h: number };
}

interface ProductImageSliderProps {
  images: ImageItem[];
  names: Record<string, string>;
  isOpen: boolean;
  mainImageUrl: string;
  onClose: (state: boolean) => void;
}

export function ProductImageSlider({
  images,
  names,
  isOpen,
  mainImageUrl,
  onClose,
}: ProductImageSliderProps) {
  const [mainImage, setMainImage] = useState(mainImageUrl);

  useLayoutEffect(() => {
    if (isOpen) {
      setMainImage(mainImageUrl);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, mainImageUrl]);

  if (!isOpen) return null;

  function slideImage(index: number) {
    const findMainImage = images.findIndex((img) => img.url === mainImage);
    const currentIndex = findMainImage + index;
    if (currentIndex >= 0 && currentIndex < images.length) setMainImage(images[currentIndex].url);
    if (currentIndex < 0) setMainImage(images[images.length - 1].url);
    if (currentIndex >= images.length) setMainImage(images[0].url);
  }

  return (
    <div className={styles['product-modal-window']}>
      <div
        className={styles['screen-protect-modal']}
        onClick={() => {
          onClose(false);
        }}
      ></div>
      <div className={styles['screen-info-modal']}>
        <div
          className={styles['close-button-modal']}
          onClick={() => {
            onClose(false);
          }}
        >
          {'\u00D7'}
        </div>
        <div className={styles['description-modal']}>{names['en-US']}</div>
        <div className={styles['images-modal']}>
          <div className={styles['main-image-modal']}>
            <ImageZoom src={mainImage || mainImageUrl} />
            <span
              className={`material-symbols-outlined ${styles['modal-arrow-left']}`}
              onClick={() => {
                slideImage(-1);
              }}
            >
              arrow_back_ios
            </span>
            <span
              className={`material-symbols-outlined ${styles['modal-arrow-right']}`}
              onClick={() => {
                slideImage(1);
              }}
            >
              arrow_forward_ios
            </span>
          </div>
          <div className={styles['preview-images-modal']}>
            {images.map((img) => {
              const isSelected = img.url === mainImage;
              return (
                <div
                  key={img.url}
                  className={styles['wrapper-preview-image']}
                  onClick={() => {
                    setMainImage(img.url);
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className={`
            ${styles.preview}
            ${isSelected ? styles['preview-selected'] : ''}
          `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImageZoom({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    container.style.backgroundPosition = `${x.toString()}% ${y.toString()}%`;
  };

  const resetPosition = () => {
    const container = containerRef.current;
    if (container) {
      container.style.backgroundPosition = 'center';
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles['zoom-container']}
      style={{ backgroundImage: `url(${src})` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    />
  );
}
