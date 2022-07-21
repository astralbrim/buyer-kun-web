import {Button, Input, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Chat, GppGood, Message, Money, Search} from "@mui/icons-material";
import {FC} from "react";
import {SettingModel} from "../../../models/setting";
import {SETTING_PROPERTY} from "./settingProperty";
import SelectInput from "../../molecules/selectInput";
import {cronExpressionArray} from "../../../utils/cronExpressionToArray";
import {useForm} from "react-hook-form";

export interface SettingFromProps {
  setting: SettingModel;
  save: (data: SettingModel) => void;
}
const SettingForm: FC<SettingFromProps> = (props) => {
  const {setting, save} = props;
  const {register, handleSubmit, control} = useForm<SettingModel>({defaultValues: setting});
  return (
    <form className="text-right">
      <List>
        <ListItem>
          <ListItemIcon><Chat /></ListItemIcon>
          <ListItemText aria-multiline={false}>{SETTING_PROPERTY["discordToken"].description}</ListItemText>
          <Input
            {...register("discordToken")}
            type="password"
            id="discord-token"
            defaultValue={setting.discordToken}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><Money /></ListItemIcon>
          <ListItemText aria-multiline={false}>{SETTING_PROPERTY["priceRatio"].description}</ListItemText>
          <Input
            {...register("priceRatio")}
            id="price-ratio"
            defaultValue={setting.priceRatio}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><Search /></ListItemIcon>
          <ListItemText aria-multiline={false}>{SETTING_PROPERTY["searchMarketPriceTimeInterval"].description}</ListItemText>
          <SelectInput
            name="searchMarketPriceTimeInterval"
            control={control}
            items={cronExpressionArray()}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><Message /></ListItemIcon>
          <ListItemText aria-multiline={false}>{SETTING_PROPERTY["postDiscordTimeInterval"].description}</ListItemText>
          <SelectInput
            name="postDiscordTimeInterval"
            control={control}
            items={cronExpressionArray()}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><GppGood /></ListItemIcon>
          <ListItemText aria-multiline={false}>{SETTING_PROPERTY["postGoodProductInterval"].description}</ListItemText>
          <SelectInput
            name="postGoodProductInterval"
            control={control}
            items={cronExpressionArray()}
          />
        </ListItem>
      </List>
        <Button className="w-1/2 inline-block mt-4 mr-4" onClick={handleSubmit(save, (_errors) => alert("ダメです"))} variant="outlined">保存</Button>
    </form>
  )
}

export default SettingForm;