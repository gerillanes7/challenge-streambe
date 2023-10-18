import { UserDTO } from "../../../domain/entities";

export interface ITable {
  data: any[];
  columns: string[];
  loading: string;
}
