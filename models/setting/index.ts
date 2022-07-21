import {CronExpression} from "../../types/cronExpression";

export interface SettingModel {
  discordToken?: string;
  postDiscordTimeInterval?: CronExpression;
  priceRatio?: number;
  searchMarketPriceTimeInterval?: CronExpression;
  postGoodProductInterval?: CronExpression;
}