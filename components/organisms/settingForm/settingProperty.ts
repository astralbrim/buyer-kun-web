export const SETTING_PROPERTY: {[key: string]: {description: string}} = {
  discordToken: {
    description: "ディスコードのトークン",
  },
  priceRatio: {
    description: "相場よりどれだけ価格の低いものを通知するか",
  },
  searchMarketPriceTimeInterval: {
      description: "相場の調査のインターバル",
  },
  postDiscordTimeInterval: {
      description: "ディスコードに相場を報告するインターバル",
  },
  postGoodProductInterval: {
      description: "ディスコードに相場より価格の低いものを通知するインターバル"
  }
}