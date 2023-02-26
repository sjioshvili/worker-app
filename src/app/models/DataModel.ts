import { ChildItem } from './childItem';

export class DataModel {
  id!: string;
  int!: number;
  float!: number;
  color!: string;
  child!: ChildItem;
}
