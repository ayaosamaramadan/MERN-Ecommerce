export type Productpro = {
  id: number;
  name: string;
  image: string| string[];
  price?: number;
  afterdiscount: number;
  stars?: number;
  quantity?: number | 0;
  isLove?: boolean;
  rate?: number;
  colors?: string[];

};

