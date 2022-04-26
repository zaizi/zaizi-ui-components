import * as React from 'react';
import "./DefaultButton.scss";

interface Props {
  onClick: () => void;
  customClasses: string;
  label: string;
}

export const DefaultButton: React.FC<Props> = ({onClick, customClasses, label}) => {
  return (
    <button
      type="button"
      className={`default-button ${customClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};


let years = ["1960", "1964", "1968", "1972", "1976", "1980", "1984", "1988", "1992", "1996", "2000", "2004", "2008", "2012", "2016", "2021"]
let comingHome = false;
let congratulationsItaly = false;
years.forEach(year => {
  if(year === "1968" || year === "2021") {
    congratulationsItaly = true;
  } else {
    congratulationsItaly = false;
  }
  if(year) {console.log(`${year}: Coming Home? ${comingHome}, Congratulations Italy? ${congratulationsItaly}`)}
})