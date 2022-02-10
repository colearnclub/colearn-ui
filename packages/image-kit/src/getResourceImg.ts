import ImgKitClient from './ImgKitClient';

export type ResourceImgSize = 'original' | 'card' | 'small';

export function getResourceImg(
  src?: string,
  size: ResourceImgSize = 'card',
): string | undefined {
  const client = ImgKitClient.instance();
  if (!src || src.indexOf(client.urlEndpoint) === -1) {
    return src;
  }
  switch (size) {
    case 'original':
      return src;
    case 'card':
      return client.getUrl({
        src,
        transformation: [{ height: 240, width: 380 }],
      });
    case 'small':
      return client.getUrl({ src, transformation: [{ height: 120 }] });
    default:
      break;
  }
  return src;
}
