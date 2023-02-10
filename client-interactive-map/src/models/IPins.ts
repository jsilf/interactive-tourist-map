export interface IPins {
  map(arg0: (pin: IPins, i: number) => void): any;
  id: string;
  category: string;
  lat: number;
  long: number;
  color: string;
  name: string;
  information: string;
}
