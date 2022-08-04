import {FC, useState} from "react";
import {
  Button, Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import {PartModel} from "../../../models/part";
import {useFieldArray, useForm} from "react-hook-form";
import SelectInput from "../../molecules/selectInput";
import {getAll} from "../../../services/part-types";
import {PartType} from "../../../models/part-type";

export interface PartsTableProps {
  data: PartModel[];
  onSave: (data: PartModel[]) => Promise<void>;
}
export interface PartsForm {
  parts: PartModel[];
}
const PartsTable: FC<PartsTableProps> = (props) => {
  const {data, onSave} = props;
  console.log(data);
  const {handleSubmit, register, control, watch} = useForm<PartsForm>({defaultValues: {parts: data}});
  const {fields, append, remove} = useFieldArray({control, name: "parts"});
  const watchFields = watch("parts");
  const addPart = () => {
    append({name: "",maxPrice: Number(), minPrice: Number(), partTypes: {name: ""}})
  }
  const removePart = (index: number) => {
    remove(index);
  }
  const [partTypes, setPartTypes] = useState<PartType[]>();

  useState(
    () => {
      const getPartTypes = async () => {
        const result = await getAll();
        if(!result) return;
        setPartTypes(result);
      }
      void getPartTypes();
    }
  )

  if(!partTypes) return null;

  const selectPartTypes = partTypes.map(
    (partType) => ({display: partType.name, value: partType.name})
  )

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>パーツ名</TableCell>
              <TableCell>相場の調査対象</TableCell>
              <TableCell>最低価格</TableCell>
              <TableCell>最高価格</TableCell>
              <TableCell>種類</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <TextField {...register(`parts.${index}.name` as const)} />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked={field.isResearchTarget} {...register(`parts.${index}.isResearchTarget` as const)}/>
                </TableCell>
                <TableCell>
                  <TextField disabled={!watchFields[index].isResearchTarget} {...register(`parts.${index}.minPrice` as const)}/>
                </TableCell>
                <TableCell>
                  <TextField disabled={!watchFields[index].isResearchTarget}  {...register(`parts.${index}.maxPrice` as const)}/>
                </TableCell>
                <TableCell>
                  <SelectInput
                    control={control}
                    items={selectPartTypes}
                    {...register(`parts.${index}.partTypes.name` as const)}
                  />
                </TableCell>
                <TableCell><Button onClick={() => removePart(index)}>削除</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex">
        <Button className="w-1/2 inline-block mt-4 mr-4" onClick={() => addPart()} variant="outlined">追加</Button>
        <Button className="w-1/2 inline-block mt-4 mr-4" onClick={handleSubmit((data) => onSave(data.parts), (error) => alert(error))} variant="outlined">保存</Button>
      </div>
    </div>
  )

}

export default PartsTable;