export interface Vendor {
  id: number;
  cnpj: string;
  name: string;
}

export interface Card extends Partial<Product> {
  title: string;
  subtitle: string | null;
  price?: number;
}

export interface Product {
  createdAt: Date;
  desc: string | null;
  price: number;
  productCategory: string | null;
  productId: number;
  soldAmount: number | null;
  vendor: Vendor;
}

export interface ProductStore {
  products: Product[];
  selectedProduct?: Card;
  totalPrice?: number;
}

export type ProductStoreType = ProductStore;

const productDataInitialState: ProductStoreType = {
  products: [],
};

export default productDataInitialState;
