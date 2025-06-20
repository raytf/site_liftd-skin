import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityAsset) {
  return imageBuilder.image(source);
}

export function getImageDimensions(image: SanityAsset) {
  if (!image?.asset?._ref) {
    return;
  }

  const dimensions = image.asset._ref.split('-')[2];
  const [width, height] = dimensions.split('x').map(Number);

  if (!width || !height || Number.isNaN(width) || Number.isNaN(height)) {
    return;
  }

  return { width, height, aspectRatio: width / height };
}
