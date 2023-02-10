import { IPins } from "./IPins";

export class Category {
  constructor(
    public _id: string,
    public category: string,
    public pins: IPins
  ) {}
}
