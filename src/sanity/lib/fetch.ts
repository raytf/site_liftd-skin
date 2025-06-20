import type { ImageAsset, Slug } from '@sanity/types';

import { loadQuery } from './load-query';

export async function fetchTreatments(): Promise<Treatment[]> {
  const { data } = await loadQuery<Treatment[]>({
    query: `*[_type == "treatment" && defined(slug.current)]`,
  });

  return data;
}

export async function fetchTreatment(slug: string): Promise<Treatment> {
  const { data } = await loadQuery<Treatment>({
    query: `*[_type == "treatment" && slug.current == $slug][0]`,
    params: { slug },
  });

  return data;
}

export interface Treatment {
  title?: string;
  slug: Slug;
  heroImage: ImageAsset;
}
