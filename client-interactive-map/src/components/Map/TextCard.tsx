import { ITextProps } from "../../models/ITextProps";

export const TextCard = ({ title, text, onClick }: ITextProps) => {
  return (
    <div className="text-card text-white">
      <div className="close-btn" onClick={onClick}></div>
      <h3 className="text-card_title">{title}</h3>
      <p className="text-card_text">{text}</p>
    </div>
  );
};
