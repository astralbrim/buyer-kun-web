import {FC} from "react";
import {
  Button,
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

export interface PartsTableProps {
  data: PartModel[];
  onSave: (data: PartModel[]) => Promise<void>;
}
export interface PartsForm {
  parts: PartModel[];
}
const PartsTable: FC<PartsTableProps> = (props) => {
  const {data, onSave} = props;
  const {handleSubmit, register, control} = useForm<PartsForm>({defaultValues: {parts: data}});
  const {fields, append, remove} = useFieldArray({control, name: "parts"})
  const addPart = () => {
    append({name: "", type: "graphic-board", maxPrice: Number(), minPrice: Number()})
  }
  const removePart = (index: number) => {
    remove(index);
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>パーツ名</TableCell>
              <TableCell>最低価格</TableCell>
              <TableCell>最高価格</TableCell>
              <TableCell>種類</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <TextField defaultValue={field.name} {...register(`parts.${index}.name` as const)} />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={field.minPrice} {...register(`parts.${index}.minPrice` as const)}/>
                </TableCell>
                <TableCell>
                  <TextField defaultValue={field.maxPrice} {...register(`parts.${index}.maxPrice` as const)}/>
                </TableCell>
                <TableCell>
                  <TextField defaultValue={field.type} {...register(`parts.${index}.type` as const)} />
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