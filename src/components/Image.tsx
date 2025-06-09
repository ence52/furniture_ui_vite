interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image = ({ src, alt, ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ maxWidth: "100%", height: "auto" }}
      {...props}
    />
  );
};

export default Image;
