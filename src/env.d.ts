// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />
/// <reference types="@sanity/astro/module" />

interface Window {
  updateStep: (index: number) => void;
  openCalendly: () => void;
  closeCalendly: () => void;
}
