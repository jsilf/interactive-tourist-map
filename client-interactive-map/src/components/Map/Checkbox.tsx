import { ChangeEventHandler, KeyboardEventHandler } from "react";
import styled from "styled-components";

import iconRed from "../../assets/icons/restaurant-icon.png";
import iconBlue from "../../assets/icons/sea-icon.png";
import iconGreen from "../../assets/icons/camera-icon.png";
import iconYellow from "../../assets/icons/hiking-icon.png";
import iconPurple from "../../assets/icons/shopping-icon.png";
import { IImages } from "../../models/IImages";
import LazyLoad from "react-lazy-load";

interface ICheckbox {
  label: string;
  isChecked: boolean;
  handleChange: ChangeEventHandler;
  handleKeyDown?: KeyboardEventHandler;
}

const icons: IImages[] = [
  {
    src: iconRed,
    alt: "restaurang ikon",
    name: "restaurang",
  },
  {
    src: iconBlue,
    alt: "badplats ikon",
    name: "badplats",
  },
  {
    src: iconGreen,
    alt: "sevärdhet ikon",
    name: "sevärdhet",
  },
  {
    src: iconYellow,
    alt: "vandring ikon",
    name: "vandring",
  },
  {
    src: iconPurple,
    alt: "butik ikon",
    name: "butik",
  },
];

const StyledLabel = styled.label`
  &,
  input {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    input:checked + span:before {
      transform: translateX(-30px);
    }
    .badplats {
      &:before {
        background-color: #808fa5 !important;
      }
    }
    .restaurang {
      &:before {
        background-color: #a58080 !important;
      }
    }
    .sevardhet {
      &:before {
        background-color: #8aa580 !important;
      }
    }
    .vandring {
      &:before {
        background-color: #a5a180 !important;
      }
    }
    .butik {
      &:before {
        background-color: #9080a5 !important;
      }
    }
  }
`;

export const Checkbox = ({ label, isChecked, handleChange }: ICheckbox) => {
  const replaceUmlauts = (str: string): string => {
    return str.replaceAll("ä", "a");
  };

  let iconVal = "";
  let iconAlt = "";

  for (const [, value] of Object.entries(icons)) {
    if (value.name === label) {
      iconVal += value.src;
      iconAlt += value.alt;
    }
  }

  return (
    <div className="checkbox-wrap text-white">
      <StyledLabel htmlFor={label}>
        <input
          aria-label={label}
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
          id={label}
          autoComplete="off"
        />
        <span className={replaceUmlauts(label)}></span>
      </StyledLabel>
      <LazyLoad>
        <img
          width={30}
          height={30}
          className="icon-img"
          alt={iconAlt}
          src={iconVal}
        />
      </LazyLoad>
      <h2 className="checkbox-wrap_text">{label}</h2>
    </div>
  );
};
