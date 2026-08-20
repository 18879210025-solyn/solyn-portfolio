import type { ImageProps } from "next/image";
import { withBasePath } from "@/lib/paths";

/** Static GitHub Pages export does not prefix next/image src with basePath. */
export default function Image({
  src,
  alt,
  width,
  height,
  className,
  style,
  priority,
}: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;

  return (
    <img
      src={typeof resolved === "string" ? resolved : undefined}
      alt={alt ?? ""}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
