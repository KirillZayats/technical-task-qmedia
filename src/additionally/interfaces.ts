export interface PropsTheme {
  children: React.ReactNode;
}

export interface IPropsProducts {
  product:  IProduct;
};

interface IProduct {
  id: number,
  title: string,
  image: string,
  price: number,
  oldPrice: number | null,
}