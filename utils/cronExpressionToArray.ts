import {CronExpression} from "../types/cronExpression";

export const cronExpressionArray = (): {value: string, display: string}[] => {
  const keys = Object.keys(CronExpression);
  const values = Object.values(CronExpression);

  return keys.map((key, index) => {
    return {value: values[index], display: key}
  })
}