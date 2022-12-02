import axios from "axios";
import { CountryType } from "./types";
import { useState, useEffect } from "react";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  //Alınan veriye type definition nasıl yapılır
  const getCountries = async () => {
    setLoading(false)
    try {
      const countries = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );

      setCountries(countries.data.slice(0, 20));
    } catch {
      console.log("Data not exist");
    }
    finally{
        setTimeout(()=>{
            setLoading(true)
        },3000)
      
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);

  return (
    <div>
      { loading ? "Loading" : countries.map((country) => {
        return (
        
          <Country country={country} />
      
        );
      })}
    </div>
  );
};

export default App;
