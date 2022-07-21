import {SettingModel} from "../../models/setting";
import {getAllSetting, postAllSetting} from "../../repository/setting";


export const getSetting = async (): Promise<SettingModel> => {
  let data: SettingModel;
  try {
    data = (await getAllSetting()).data;
  }catch (_e) {
    throw new Error();
  }
  return data;
}

export const saveSetting = async (setting: SettingModel): Promise<boolean> => {
  try {
    await postAllSetting(setting)
  }catch (error) {
    alert("保存できませんでした")
    return false;
  }
  return true;
}