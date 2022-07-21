import {PartModel} from "../../models/part";
import {getAllParts, postParts} from "../../repository/part";

export const getPart = async (): Promise<PartModel[] | null> => {
  let data: PartModel[];
  try {
    data = (await getAllParts()).data;
  }
  catch (error) {
    console.log("取得できませんでした。");
    return null;
  }

  return data;
}

export const saveParts = async (parts: PartModel[]): Promise<boolean> => {
  try {
    await postParts(parts)
  } catch (error) {
    console.log("保存できませんでした。");
    return false;
  }
  return true;
}