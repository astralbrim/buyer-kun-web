import {SettingModel} from "../../models/setting";
import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "../constant";
export const SETTING_URL = `${BASE_URL}/setting`

export const getAllSetting = async (): Promise<AxiosResponse<SettingModel>> => {
  return await axios.get<SettingModel>(SETTING_URL)
    .catch((error) => {
      throw new Error(error);
    })
}

export const postAllSetting = async (data: SettingModel): Promise<AxiosResponse<SettingModel>> => {
  return await axios.post(SETTING_URL, data)
    .catch((error) => {
      throw new Error(error);
    })
}