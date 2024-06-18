export function constructBannerUrl(data) {
  const baseUrl = process.env.BASE_URL;
  const attributes = data?.attributes?.BannerPost?.data?.attributes;
  if (!attributes) return '';

  return `${baseUrl}${attributes.url}`;
}