// Images served from ImageKit (media library: /Onshorelabs/CEO rules/assets,
// the client's original files). ImageKit resizes and picks the format per
// request, so these skip Next's own optimiser; see imagekitLoader.
//
// The free plan refuses originals over 25 megapixels, so those few stay in
// public/ until resized copies are uploaded.
const ENDPOINT = "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/assets";

/** URL for a file under the assets folder, e.g. ik("rules/hero.jpg"). */
export const ik = (path: string) => `${ENDPOINT}/${encodeURI(path)}`;

export const isImageKit = (src: string) => src.startsWith("https://ik.imagekit.io/");

/** next/image loader: width and quality become an ImageKit transform. */
export function imagekitLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const [base, existing] = src.split("?tr=");
  const tr = [existing, `w-${width},q-${quality ?? 80}`].filter(Boolean).join(":");
  return `${base}?tr=${tr}`;
}
