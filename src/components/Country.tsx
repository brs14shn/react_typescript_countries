import { CountryType } from "../types";
import { FunctionComponent } from "react";

interface ICountryProps {
  country: CountryType;
  // children?: React.ReactNode;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props;


  return (
    <>
      <div className="card shadow-lg">
        <img
          src={Object.values(country.flags)[1]}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{country.name}</h5>
          <p className="card-text">{}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <i className="fas fa-lg fa-landmark"></i> {country.capital}
          </li>
          <li className="list-group-item">
            {" "}
            <i className="fas fa-lg fa-comments"></i>
            {/* {Object.values(
    country.languages */}
          </li>

          <li className="list-group-item"> <i className="fas fa-lg fa-money-bill-wave"></i> 
          {/* {country?.currencies[0]?.symbol} */}
          {/* {(country.currencies)[0].name} */}
         </li>
        </ul>
      </div>
    </>
  );
};

export default Country;
