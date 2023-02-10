import { IPins } from "./IPins";

export interface ICategory {
  _id: string;
  category: string;
  pins: IPins;
}
