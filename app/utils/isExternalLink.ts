export default function isExternalLink(url: string): boolean {
  const isExternal =
    url.startsWith("http") ||
    url.startsWith("mailto") ||
    url.startsWith("tel") ||
    url.startsWith("www");
  return isExternal;
}
