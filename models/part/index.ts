import {ProductType} from "../../types/product-type";

export interface PartModel {
  name: string;
  type: ProductType;
  minPrice: number;
  maxPrice: number;
}