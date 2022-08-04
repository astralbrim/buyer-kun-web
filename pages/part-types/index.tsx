import {GetServerSideProps, NextPage} from "next";
import BasePageTemplate from "../../components/templates/basePageTemplate";
import {PartTypesTable} from "../../components/organisms/partTypesTable";
import {PartType} from "../../models/part-type";
import {getAll, savePartTypes} from "../../services/part-types";

export interface PartTypesProps {
  data: PartType[]
}

const PartTypes: NextPage<PartTypesProps> = (props) =>  {
  const {data} = props;
  const onSaveButtonClick = async (partTypes: PartType[]) => {
    await savePartTypes(partTypes);
  }
  return (
    <BasePageTemplate pageName="パーツの種類">
      <PartTypesTable
        data={data}
        onSave={onSaveButtonClick}
      />
    </BasePageTemplate>
  )
}

export const getServerSideProps: GetServerSideProps<PartTypesProps> = async () => {
  const data = await getAll();
  if(!data) return {
    notFound: true
  }
  return {
    props: {
      data
    }
  }
}

export default PartTypes;