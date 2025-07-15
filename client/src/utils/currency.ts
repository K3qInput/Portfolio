// Exchange rates as of July 15, 2025 (updated from market data)
export const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,    // Euro
  GBP: 0.78,    // British Pound
  CAD: 1.38,    // Canadian Dollar
  AUD: 1.52,    // Australian Dollar
  JPY: 158.50,  // Japanese Yen
  INR: 85.97,   // Indian Rupee
  CNY: 7.26,    // Chinese Yuan
  KRW: 1385.50, // South Korean Won
  BRL: 5.43,    // Brazilian Real
  MXN: 18.25,   // Mexican Peso
  RUB: 88.45,   // Russian Ruble
  ZAR: 18.12,   // South African Rand
  SGD: 1.35,    // Singapore Dollar
  HKD: 7.82,    // Hong Kong Dollar
  CHF: 0.90,    // Swiss Franc
  SEK: 10.85,   // Swedish Krona
  NOK: 10.92,   // Norwegian Krone
  DKK: 6.87,    // Danish Krone
  PLN: 3.98,    // Polish Zloty
};

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number;
}

export const CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: EXCHANGE_RATES.USD },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: EXCHANGE_RATES.EUR },
  { code: 'GBP', name: 'British Pound', symbol: '£', rate: EXCHANGE_RATES.GBP },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: EXCHANGE_RATES.CAD },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: EXCHANGE_RATES.AUD },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: EXCHANGE_RATES.JPY },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: EXCHANGE_RATES.INR },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rate: EXCHANGE_RATES.CNY },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', rate: EXCHANGE_RATES.KRW },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', rate: EXCHANGE_RATES.BRL },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', rate: EXCHANGE_RATES.MXN },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: EXCHANGE_RATES.SGD },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', rate: EXCHANGE_RATES.HKD },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rate: EXCHANGE_RATES.CHF },
];

// Common country to currency mapping
export const COUNTRY_CURRENCY_MAP: Record<string, string> = {
  'US': 'USD', 'USA': 'USD', 'United States': 'USD',
  'IN': 'INR', 'India': 'INR',
  'GB': 'GBP', 'UK': 'GBP', 'United Kingdom': 'GBP',
  'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR', 'ES': 'EUR', 'NL': 'EUR', 'AT': 'EUR', 'BE': 'EUR', 'FI': 'EUR', 'IE': 'EUR', 'PT': 'EUR', 'GR': 'EUR',
  'CA': 'CAD', 'Canada': 'CAD',
  'AU': 'AUD', 'Australia': 'AUD',
  'JP': 'JPY', 'Japan': 'JPY',
  'CN': 'CNY', 'China': 'CNY',
  'KR': 'KRW', 'South Korea': 'KRW',
  'BR': 'BRL', 'Brazil': 'BRL',
  'MX': 'MXN', 'Mexico': 'MXN',
  'SG': 'SGD', 'Singapore': 'SGD',
  'HK': 'HKD', 'Hong Kong': 'HKD',
  'CH': 'CHF', 'Switzerland': 'CHF',
};

// Language to currency mapping
export const LANGUAGE_CURRENCY_MAP: Record<string, string> = {
  'en-US': 'USD',
  'en-IN': 'INR',
  'hi': 'INR',
  'hi-IN': 'INR',
  'en-GB': 'GBP',
  'en-CA': 'CAD',
  'en-AU': 'AUD',
  'ja': 'JPY',
  'ja-JP': 'JPY',
  'zh': 'CNY',
  'zh-CN': 'CNY',
  'ko': 'KRW',
  'ko-KR': 'KRW',
  'pt-BR': 'BRL',
  'es-MX': 'MXN',
  'de': 'EUR',
  'fr': 'EUR',
  'it': 'EUR',
  'es': 'EUR',
  'nl': 'EUR',
};

export function detectUserCurrency(): string {
  // Try to detect from navigator language
  const language = navigator.language || navigator.languages?.[0] || 'en-US';
  const currencyFromLanguage = LANGUAGE_CURRENCY_MAP[language];
  
  if (currencyFromLanguage) {
    return currencyFromLanguage;
  }
  
  // Try to detect from timezone
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes('India') || timezone.includes('Kolkata')) return 'INR';
    if (timezone.includes('Europe')) return 'EUR';
    if (timezone.includes('London')) return 'GBP';
    if (timezone.includes('Toronto') || timezone.includes('Vancouver')) return 'CAD';
    if (timezone.includes('Sydney') || timezone.includes('Melbourne')) return 'AUD';
    if (timezone.includes('Tokyo')) return 'JPY';
    if (timezone.includes('Shanghai') || timezone.includes('Beijing')) return 'CNY';
    if (timezone.includes('Seoul')) return 'KRW';
    if (timezone.includes('Sao_Paulo')) return 'BRL';
    if (timezone.includes('Mexico')) return 'MXN';
    if (timezone.includes('Singapore')) return 'SGD';
    if (timezone.includes('Hong_Kong')) return 'HKD';
    if (timezone.includes('Zurich')) return 'CHF';
  } catch (error) {
    console.log('Timezone detection failed:', error);
  }
  
  // Default to USD
  return 'USD';
}

export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
  const fromRate = EXCHANGE_RATES[fromCurrency as keyof typeof EXCHANGE_RATES] || 1;
  const toRate = EXCHANGE_RATES[toCurrency as keyof typeof EXCHANGE_RATES] || 1;
  
  // Convert to USD first, then to target currency
  const usdAmount = amount / fromRate;
  return usdAmount * toRate;
}

export function formatCurrency(amount: number, currency: string): string {
  const currencyInfo = CURRENCIES.find(c => c.code === currency);
  if (!currencyInfo) return `$${amount}`;
  
  const convertedAmount = convertCurrency(amount, 'USD', currency);
  
  // Format based on currency
  if (currency === 'JPY' || currency === 'KRW') {
    // No decimal places for these currencies
    return `${currencyInfo.symbol}${Math.round(convertedAmount).toLocaleString()}`;
  } else {
    return `${currencyInfo.symbol}${convertedAmount.toFixed(2)}`;
  }
}

export function getCurrencyInfo(currency: string): Currency | undefined {
  return CURRENCIES.find(c => c.code === currency);
}