export interface IProduct {
  data: {
    Product: {
      id: string;
      name: string;
      image_url: string;
      description: string;
      price_in_cents: number;
      category: string;
      sales: string;
    };
  };
}
