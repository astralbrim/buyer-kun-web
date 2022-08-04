import axios, {AxiosResponse} from "axios";
import {PartType} from "../../models/part-type";
import {BASE_URL} from "../constant";

export const PART_TYPES_URL = `${BASE_URL}/part-types`
export const getAllPartTypes = async (): Promise<AxiosResponse<PartType[]>> => {
  return await axios.get<PartType[]>(PART_TYPES_URL).catch(
    (error) => {
      throw new Error(error)
    }
  )
}

export const postPartTypes = async (partTypes: PartType[]): Promise<AxiosResponse<PartType[]>> => {
  return await axios.post<PartType[]>(`${PART_TYPES_URL}/list`, partTypes).catch(
    (error) => {
      throw new Error(error);
    }
  )
}