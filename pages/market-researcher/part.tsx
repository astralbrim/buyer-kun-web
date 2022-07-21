import {GetServerSideProps, NextPage} from "next";
import {PartModel} from "../../models/part";
import {getPart, saveParts} from "../../services/part";
import BasePageTemplate from "../../components/templates/basePageTemplate";
import PartsTable from "../../components/organisms/partsTable";

export interface PartProps {
  parts: PartModel[]
}
const Part: NextPage<PartProps> = (props) => {
  const {parts} = props;
  const onSave = async (data: PartModel[]) => {
    await saveParts(data);
  }
  return (
    <BasePageTemplate pageName="パーツ">
      <PartsTable
        data={parts}
        onSave={onSave}
      />
    </BasePageTemplate>
  )
}

export const getServerSideProps: GetServerSideProps<PartProps> = async () => {
  const part = await getPart();
  if(!part) return {
    notFound: true
  };
  return {
    props: {
      parts: part
    }
  }
}

export default Part;