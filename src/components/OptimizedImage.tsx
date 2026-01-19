import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
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
  // Extract image name for better alt text if not provided
  const imageName = alt || src.split('/').pop()?.split('.')[0] || 'EMRS Medical Services';

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
        alt={imageName}
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
