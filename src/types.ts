export interface Application {
  label: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  model: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: Application[];
  imageUrl: string;
}

