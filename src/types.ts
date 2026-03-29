export interface Product {
  id: string;
  name: string;
  description: string;
  resolution: string;
  fps: string;
  interface: string;
  sensor: string;
  price: string;
  image: string;
  category: 'QC' | 'AI' | 'Lab';
  resCategory: '4K' | '12MP' | 'VGA';
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: string;
  size: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
