import { ReactNode } from 'react';

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  // New styling props
  rimColor?: string; // e.g. 'gold', 'silver'
  innerColor: string; // The background color of the face (fallback or side color)
  imageUrl: string; // The full coin image URL
  accentColor: string; // The glow color (blue, pink, etc)
  icon?: ReactNode; // Optional now, as we use images
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TickerItem {
  pair: string;
  price: string;
  change: string;
  isPositive: boolean;
}