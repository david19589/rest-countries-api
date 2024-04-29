import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import CountryRoutes from "./Components/CountryRoutes";
import { BrowserRouter } from "react-router-dom";

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

function App() {
  const [Active, setActive] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className={`${Active ? "bg-[#202C36]" : ""} h-full`}>
        <Header Active={Active} setActive={setActive} />
        <CountryRoutes
          Active={Active}
          countries={countries}
          searchValue={searchValue}
          selectedRegion={selectedRegion}
          onSearch={setSearchValue}
          onRegionSelect={setSelectedRegion}
        />
      </div>
    </BrowserRouter>
  );
}
export default App;
