import {getAllPartTypes, postPartTypes} from "../../repository/part-type";
import {PartType} from "../../models/part-type";

export const getAll = async (): Promise<PartType[] | null> => {
  let data: PartType[];
  try {
    data = (await getAllPartTypes()).data;
  }catch (e) {
    console.log("取得できませんでした");
    return null;
  }
  return data;
}

export const savePartTypes = async (partTypes: PartType[]) => {
  let data: PartType[];
  try {
    data = (await postPartTypes(partTypes)).data;
  }catch (e) {
    console.log("保存できませんでした");
    return null;
  }
  return data;
}