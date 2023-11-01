export interface PropsTheme {
  children: React.ReactNode;
}

export enum ETypeClick {
  NEXT = "NEXT",
  PAST = "PAST",
  RESULT = "RESULT"
}

export interface IPropsProducts {
  product: IProduct;
}

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number | null;
}

export interface IQuestion {
  id: number;
  question: string;
  answers: string[];
}

export interface IPropsModal {
  active: boolean,
  setActive: (value: boolean) => void,
  error: string,
  setError: (value: string) => void
}

export type Data = IQuestion | IProduct;
