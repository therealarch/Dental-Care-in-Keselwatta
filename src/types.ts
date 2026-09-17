export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  details?: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  verified?: boolean;
}

export interface TrustFact {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}
