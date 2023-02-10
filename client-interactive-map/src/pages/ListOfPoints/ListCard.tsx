import LazyLoad from "react-lazy-load";
import cows from "../../assets/images/cows.webp";
import crabs from "../../assets/images/crabs.webp";
import sea from "../../assets/images/sea.webp";
import sjobod from "../../assets/images/sjobod.webp";
import sunsetSea from "../../assets/images/sunset-close-up.webp";
import { IImages } from "../../models/IImages";

interface IList {
  category: string;
}

const images: IImages[] = [
  {
    src: crabs,
    alt: "krabbor i tina",
    name: "restaurang",
  },
  {
    src: sea,
    alt: "champagnebadet",
    name: "badplats",
  },
  {
    src: cows,
    alt: "kor som korsar en vik",
    name: "sevärdhet",
  },
  {
    src: sunsetSea,
    alt: "solnedgång vid horisonten",
    name: "vandring",
  },
  {
    src: sjobod,
    alt: "sjöbod i kvällsljus",
    name: "butik",
  },
];

export const ListCard = ({ category }: IList) => {
  let img = "";
  let alt = "";

  for (const [, value] of Object.entries(images)) {
    if (value.name === category) {
      img += value.src;
      alt += value.alt;
    }
  }

  return (
    <LazyLoad>
      <div className="point-list_image overlay">
        <img alt={alt} src={img} />
      </div>
    </LazyLoad>
  );
};
