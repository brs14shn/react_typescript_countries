import axios from "axios"
import { CountryType } from "./types"


const App = () => {
//Alınan veriye type definition nasıl yapılır
const getCountries = async() =>{
        const countries =await axios.get<CountryType[]>("https://restcountries.com/v2/all")
        console.log(countries.data);
    }

  return (
    <div>Countries App with TypeScript</div>
  )
}

export default App