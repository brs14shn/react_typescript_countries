import axios from "axios";
import { CountryType } from "./types";
import { useState, useEffect } from "react";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //Alınan veriye type definition nasıl yapılır
  const getCountries = async () => {
    setLoading(true);
    try {
      const countries = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );

      setCountries(countries.data.slice(0, 20));
    } catch {
      console.log("Data not exist");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);

  return (
    <div className ="mt-4 d-flex flex-wrap gap-5 p-3 justify-content-around">
      {loading
        ? "Loading"
        : countries.map((country) => {
            return <Country key={country.name} country={country} />;
          })}
    </div>
  );
};

export default App;
