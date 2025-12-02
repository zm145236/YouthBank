
import { CoinData, FAQItem, StepItem, TickerItem } from './types';
import React from 'react';

// Using the provided images for the coins
export const COINS: CoinData[] = [
  { 
    id: 'ellipx-blue', 
    symbol: 'ELX', 
    name: 'EllipX Blue', 
    rimColor: 'gold',
    innerColor: '#FCD34D', 
    imageUrl: 'https://storage.googleapis.com/youthbank/image/1.png',
    accentColor: '#3b82f6', 
  },
  { 
    id: 'xrp', 
    symbol: 'XRP', 
    name: 'Ripple', 
    rimColor: 'silver', 
    innerColor: '#3b82f6', 
    imageUrl: 'https://storage.googleapis.com/youthbank/image/4.png',
    accentColor: '#fbbf24', 
  },
  { 
    id: 'bnb', 
    symbol: 'BNB', 
    name: 'Binance', 
    rimColor: 'gold',
    innerColor: '#2e1065', 
    imageUrl: 'https://storage.googleapis.com/youthbank/image/12%20%E6%8B%B7%E8%B4%9D.png',
    accentColor: '#d8b4fe', 
  },
  { 
    id: 'ellipx-jade', 
    symbol: 'JADE', 
    name: 'EllipX Jade', 
    rimColor: 'jade', 
    innerColor: '#064e3b', 
    imageUrl: 'https://storage.googleapis.com/youthbank/image/2.png',
    accentColor: '#34d399', 
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is a cryptocurrency exchange?",
    answer: "A cryptocurrency exchange is an online platform that allows users to buy, sell, and trade cryptocurrencies. It acts as an intermediary between buyers and sellers, often providing features like charting tools, wallet services, and market analysis."
  },
  {
    question: "How does EllipX work?",
    answer: "EllipX uses advanced matching algorithms to pair buy and sell orders. Users create an account, deposit funds, and can immediately start trading on our secure and transparent platform."
  },
  {
    question: "What cryptocurrencies are supported?",
    answer: "We support over 50+ major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and many stablecoins."
  },
  {
    question: "Can I trade fiat currencies?",
    answer: "Yes, we support major fiat pairs including USD, EUR, and GBP via our secure payment gateway partners."
  }
];

export const STEPS: StepItem[] = [
  { number: "01", title: "Create account.", description: "All you need is an email, password, biometric data and 2FA." },
  { number: "02", title: "Complete KYC.", description: "Provide proof of ID using a number of options." },
  { number: "03", title: "Deposit fund.", description: "Purchase crypto directly on EllipX or transfer from another wallet." },
  { number: "04", title: "Trade.", description: "You're all set to trade and enjoy all the benefits of EllipX." }
];

export const TICKER_DATA: TickerItem[] = [
  { pair: "BTC/USDT", price: "42,305.20", change: "+1.2%", isPositive: true },
  { pair: "ETH/USDT", price: "2,230.55", change: "+0.8%", isPositive: true },
  { pair: "SOL/USDT", price: "98.40", change: "-2.1%", isPositive: false },
  { pair: "XRP/USDT", price: "0.55", change: "+0.1%", isPositive: true },
  { pair: "ADA/USDT", price: "0.51", change: "-1.5%", isPositive: false },
  { pair: "DOT/USDT", price: "7.20", change: "+3.4%", isPositive: true },
  { pair: "BTC/USDT", price: "42,305.20", change: "+1.2%", isPositive: true },
  { pair: "ETH/USDT", price: "2,230.55", change: "+0.8%", isPositive: true },
];
