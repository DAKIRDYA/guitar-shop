import { GuitarStringCount } from "../../common/types/product-type";

type StringCountFilterProps = {
  handleChangefilterStringCountClick : any
  filterGuitarStringCounts: GuitarStringCount[]
}

function StringCountFilter({handleChangefilterStringCountClick, filterGuitarStringCounts}:StringCountFilterProps): JSX.Element {
  return (
      <>
                  {
                  (Object.keys(GuitarStringCount).filter((v) =>
                    isNaN(Number(v)),
                  ) as (keyof typeof GuitarStringCount)[]
                  ).map(
                    (stringCount, indexOfType) =>
                      <div key={`${indexOfType.toString()}-strings`}>
                      <div className="form-checkbox catalog-filter__block-item">
                      <input className="visually-hidden" type="checkbox" id={`${indexOfType.toString()}-strings`} name={`${indexOfType.toString()}-strings`}
                              checked = {filterGuitarStringCounts.includes(GuitarStringCount[stringCount])}
                              onChange={() => handleChangefilterStringCountClick(GuitarStringCount[stringCount])}

                      ></input>
                      <label htmlFor={`${indexOfType.toString()}-strings`}>{GuitarStringCount[stringCount]}</label>
                      </div>
                     </div>
                  )
                  }
      </>

  )
}
export default StringCountFilter;
