import {SettingModel} from "../../models/setting";
import {CronExpression} from "../../types/cronExpression";
import {getAllSetting, postAllSetting} from "../../repository/setting";


export const getSetting = async (): Promise<SettingModel> => {
  let data: SettingModel;
  try {
    data = (await getAllSetting()).data;
  }catch (e) {
    data = {};
    data.searchMarketPriceTimeInterval = CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT;
    data.discordToken = "unko";
    data.priceRatio = 1;
    data.postDiscordTimeInterval = CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT;
    data.postGoodProductInterval = CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT;
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