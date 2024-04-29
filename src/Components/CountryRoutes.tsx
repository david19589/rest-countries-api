import Index from "./Index";
import Detail from "./Detail";
import { Routes, Route } from "react-router-dom";

interface Country {
  code: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: { [key: string]: string }[];
  languages: {
    [key: string]: string;
  }[];
  borders: string[];
}

function CountryRoutes(props: {
  Active: boolean;
  countries: Country[];
  searchValue: string;
  selectedRegion: string;
  onSearch: (value: string) => void;
  onRegionSelect: (region: string) => void;
}) {
  return (
    <div className={`${props.Active ? "bg-[#202C36]" : ""}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Index
              Active={props.Active}
              countries={props.countries}
              searchValue={props.searchValue}
              selectedRegion={props.selectedRegion}
              onSearch={props.onSearch}
              onRegionSelect={props.onRegionSelect}
            />
          }
        />
        <Route
          path="/Country/:Country"
          element={<Detail Active={props.Active} countries={props.countries} />}
        />
      </Routes>
    </div>
  );
}

export default CountryRoutes;
