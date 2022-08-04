import {NextPage} from "next";
import BasePageTemplate from "../../components/templates/basePageTemplate";

export interface StockManagerProps {

}
const Index: NextPage<StockManagerProps> = (props) => {
  return (
    <BasePageTemplate pageName="在庫管理">

    </BasePageTemplate>
  )
}

export default Index;