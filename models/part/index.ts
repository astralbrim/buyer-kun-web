import {PartType} from "../part-type";

export interface PartModel {
  name: string;
  partTypes: PartType;
  minPrice?: number;
  maxPrice?: number;
  isResearchTarget: boolean;
}