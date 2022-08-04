import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "../constant";
import {PartModel} from "../../models/part";
export const PART_URL = `${BASE_URL}/part`

export const getAllParts = async (): Promise<AxiosResponse<PartModel[]>> => {
  return await axios.get<PartModel[]>(PART_URL).catch(
    (error) => {
      throw new Error(error)
    }
  )
}

export const postParts = async (data: PartModel[]): Promise<AxiosResponse<PartModel[]>> => {
  return await axios.post<PartModel[]>(`${PART_URL}/list`, data).catch(
    (error) => {
      throw new Error(error)
    }
  )
}