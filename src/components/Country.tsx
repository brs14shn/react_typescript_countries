import { CountryType } from "../types";
import {FunctionComponent} from "react"
import { count } from "console";


interface ICountryProps {
  country :CountryType;
  children?: JSX.Element|JSX.Element[];
}


const Country:FunctionComponent<ICountryProps> = (props) => {
  
const {country} =props

  return (
    <div>
      
   {country.name} - {country.name}
   
    </div>
   
  )
}

export default Country