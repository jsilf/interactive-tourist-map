export interface IMarker {
  name: string;
  position: { lat: number; lng: number };
  icon: string;
  category: string;
  handleClick: () => void;
}
