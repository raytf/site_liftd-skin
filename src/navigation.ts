import { getPermalink, getAsset } from './utils/permalinks';
import type { CallToAction } from './types';

interface MenuLink {
  text?: string;
  href?: string;
  links?: Array<MenuLink>;
}

interface HeaderData {
  position: 'left' | 'right';
  links: Array<MenuLink>;
  actions: Array<CallToAction>;
}

const homepageNav = [
  { text: 'About', href: '#about' },
  { text: 'Process', href: '#process' },
  { text: 'Concerns', href: '#concerns' },
  {
    text: 'Treatments',
    href: '#treatments',
  },
  {
    text: 'FAQs',
    href: '#faqs',
  },
];

export const headerData: HeaderData = {
  position: 'left',
  links: homepageNav,
  actions: [{ text: 'Book Now', onclick: 'openCalendly()', variant: 'fill' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: homepageNav,
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  openingHours: [
    { day: 'Mon', hours: '8.00 - 5.00' },
    { day: 'Tue', hours: '8.00 - 5.00' },
    { day: 'Wed', hours: '8.00 - 5.00' },
    { day: 'Thur', hours: '8.00 - 5.00' },
    { day: 'Fri', hours: '8.00 - 5.00' },
    { day: 'Sat', hours: '8.00 - 5.00' },
    { day: 'Sun', hours: '8.00 - 5.00' },
  ],
  contactInfo: {
    phone: '07 1234 5678',
    email: 'liftdskin@gmail.com',
    address: '1371 Gold Coast Hwy, Palm Beach QLD 4221',
  },
  footNote: `
    © 2025 LIFTD Skin. All Rights Reserved
  `,
};
