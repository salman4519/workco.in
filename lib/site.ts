export const site = {
  name: 'Workco',
  url: 'https://workco.in',
  tagline: 'Premium coworking spaces',
  title: 'Workco | Premium Coworking Spaces, Day Pass from ₹199',
  description:
    'Workco premium coworking spaces. Day pass from ₹199, memberships from ₹3,999 a month, conference rooms from ₹299 per 30 minutes and private cabins for teams.',
  phoneDisplay: '92925 86987',
  phoneIntl: '+919292586987',
  whatsapp: 'https://wa.me/919292586987',
  instagram: 'https://www.instagram.com/workco.in',
};

export const waLink = (text: string) => `${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Plan = {
  name: string;
  price: number;
  per: string;
  perks: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Daily Pass',
    price: 199,
    per: 'per day, 9 AM to 8 PM',
    perks: ['Hot desk in the open workspace', 'Pantry and lobby access', 'No membership needed'],
    cta: 'Get a pass',
  },
  {
    name: 'Silver',
    price: 3999,
    per: 'per month',
    perks: ['Hot desk at your branch', 'Preferred seat when available', 'Meeting rooms at ₹249 per 30 min'],
    cta: 'Choose Silver',
  },
  {
    name: 'Gold',
    price: 4999,
    per: 'per month',
    perks: ['Everything in Silver', '3 hours of meeting rooms a month', 'At your registered branch'],
    cta: 'Choose Gold',
    featured: true,
  },
  {
    name: 'Diamond',
    price: 5999,
    per: 'per month',
    perks: ['Everything in Gold', '4 hours of meeting rooms, any branch', 'Desk access at other branches'],
    cta: 'Choose Diamond',
  },
];

export const meetingRooms = [
  { name: 'Pay as you go', note: 'Open to everyone', price: 299, unit: '/ 30 min' },
  { name: 'Conference membership', note: '5 hours a month, any branch', price: 1999, unit: '/ month' },
];

export const cabins = [
  { name: 'Compact', note: 'For one or two', price: 11999 },
  { name: 'Standard', note: 'For small teams', price: 14999 },
  { name: 'Premium', note: 'For growing teams', price: 19999 },
];

export const inr = (n: number) => '₹' + n.toLocaleString('en-IN');
