import {GetServerSideProps, NextPage} from "next";
import BasePageTemplate from "../components/templates/basePageTemplate";
import {SettingModel} from "../models/setting";
import SettingForm from "../components/organisms/settingForm";
import {getSetting, saveSetting} from "../services/setting";

export interface SettingPageProps {
  data: SettingModel;
}
const useLogic = (): [(data: SettingModel) => void] => {
  const onSaveButtonClick = async (data: SettingModel) => {
    await saveSetting(data);
  }
  return [onSaveButtonClick]
}
const Setting: NextPage<SettingPageProps> = (props) => {
  const {data} = props;
  const [onSaveButtonClick] = useLogic();
  return (
    <BasePageTemplate pageName="設定">
      <SettingForm
        setting={data}
        save={onSaveButtonClick}
      />
    </BasePageTemplate>
  )
}

export const getServerSideProps: GetServerSideProps<SettingPageProps> = async () => {

  const data = await getSetting();
  if(!data) return {
    notFound: true,
  }
  const props: SettingPageProps = {
    data: await getSetting(),
  }
  return {props}
}

export default Setting;
