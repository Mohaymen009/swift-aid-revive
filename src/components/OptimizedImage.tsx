import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string; // pass "" for decorative images
  width: number;
  height: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  ...props
}) => {
  // Respect empty alt strings so decorative images are correctly hidden
  // from assistive tech. Never fall back to a filename.
  const altText = alt;

  // Generate source type for better browser compatibility
  const getSourceType = (path: string) => {
    const ext = path.split('.').pop()?.toLowerCase();
    if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
    if (ext === 'png') return 'image/png';
    if (ext === 'webp') return 'image/webp';
    return `image/${ext}`;
  };

  const sourceType = getSourceType(src);

  // Generate srcSet for responsive images
  const srcSet = `
    ${src} ${width}w,
    ${src.replace(/\.(jpg|jpeg|png)/, '-800w.$1')} 800w,
    ${src.replace(/\.(jpg|jpeg|png)/, '-400w.$1')} 400w
  `;

  return (
    <picture>
      {/* WebP fallback for non-webp images */}
      {!src.endsWith('.webp') && (
        <source
          srcSet={src.replace(/\.(jpg|jpeg|png)/, '.webp')}
          type="image/webp"
        />
      )}
      <source
        srcSet={srcSet}
        type={sourceType}
      />
      <img
        src={src}
        alt={altText}
        width={width}
        height={height}
        loading={loading}
        className={`max-w-full h-auto ${className}`}
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
        }}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
