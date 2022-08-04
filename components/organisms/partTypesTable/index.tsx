import {FC} from "react";
import {PartType} from "../../../models/part-type";
import {useFieldArray, useForm} from "react-hook-form";
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

export interface PartTypesTableProps {
  data: PartType[],
  onSave: (data: PartType[]) => Promise<void>,
}

export interface PartTypesForm {
  partTypes: PartType[]
}

export const PartTypesTable: FC<PartTypesTableProps> = (props) => {
  const {data, onSave} = props;
  const {register, handleSubmit, control} = useForm<PartTypesForm>({defaultValues: {
    partTypes: data
    }});
  const {fields, append, remove} = useFieldArray({control, name: "partTypes"});
  const add = () => {
    append({name: ""});
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              {fields.map((field, index) => (
                <TableRow key={field.id}>
                  <TableCell>
                    <TextField defaultValue={field.name} {...register(`partTypes.${index}.name` as const)} />
                  </TableCell>
                  <TableCell><Button onClick={() => remove(index)}>削除</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>
      <div className="flex">
        <Button className="w-1/2 inline-block mt-4 mr-4" onClick={() => add()} variant="outlined">追加</Button>
        <Button className="w-1/2 inline-block mt-4 mr-4" onClick={handleSubmit((data) => onSave(data.partTypes), (error) => alert(error))} variant="outlined">保存</Button>
      </div>
    </div>
  )

}