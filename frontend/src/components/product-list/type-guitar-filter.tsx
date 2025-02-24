
import { GuitarType } from "../../common/types/product-type";

type TypeGuitarFilterProps = {
  handleChangefilterGuitarTypeClick : any
  filterGuitarTypes: GuitarType[]
}

function TypeGuitarFilter({handleChangefilterGuitarTypeClick, filterGuitarTypes}:TypeGuitarFilterProps): JSX.Element {
  return (
    <>
    {
        (Object.keys(GuitarType) as (keyof typeof GuitarType)[]).map(
            (typeGuitar, indexOfType) =>
             <div key={`${indexOfType}-type`}>
               <div className="form-checkbox catalog-filter__block-item">
                <input className="visually-hidden" type="checkbox" id={indexOfType.toString()} name={indexOfType.toString()}
                checked = {filterGuitarTypes.includes(GuitarType[typeGuitar])}
                onChange={() => handleChangefilterGuitarTypeClick(GuitarType[typeGuitar])}
               ></input>
               <label htmlFor={indexOfType.toString()}>{GuitarType[typeGuitar]}</label>

               </div>
              </div>
           )
          }
     </>

  )
}
export default TypeGuitarFilter;
