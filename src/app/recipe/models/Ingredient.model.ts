import {PortionUnits} from "./PortionUnit.model";


export interface Ingredient {
  name: string
  quantity: number
  unit: PortionUnits
}
