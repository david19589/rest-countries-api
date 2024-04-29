import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import Filter from "../Filter";

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}

function Index(props: {
  Active: boolean;
  countries: Country[];
  searchValue: string;
  selectedRegion: string;
  onSearch: (value: string) => void;
  onRegionSelect: (region: string) => void;
}) {
  const filteredCountries = props.countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(props.searchValue.toLowerCase());
    const matchesRegion =
      props.selectedRegion === "All" || country.region === props.selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <div className="desktop:flex desktop:flex-row desktop:justify-between desktop:px-[80px] mb-[48px]">
        <SearchBar Active={props.Active} onSearch={props.onSearch} />
        <Filter Active={props.Active} onRegionSelect={props.onRegionSelect} />
      </div>
      <div className="tablet:flex-row tablet:justify-center flex flex-wrap content-center flex-col gap-[56px] mx-[56px] pb-[24px]">
        {filteredCountries.map((country, index) => (
          <div
            className={`${
              props.Active && "bg-[#2B3844]"
            } max-w-[267px] tablet:w-[267px] tablet:h-[370px] shadow-lg`}
            key={index}
          >
            <Link to={`/Country/${country.name.common.toLowerCase()} `}>
              <div className="tablet:flex tablet:justify-center">
                <img
                  className="tablet:max-h-[195px]"
                  src={country.flags.svg}
                  alt={country.name.common}
                />
              </div>
            </Link>
            <div
              className={`${
                props.Active && "text-[#FFF]"
              } px-[24px] pt-[24px] pb-[46px]`}
            >
              <h1 className="font-[800] text-[18px] leading-[26px] mb-[16px]">
                {country.name.common}
              </h1>
              <div className="flex flex-wrap mb-[8px] gap-[5px]">
                <h1 className="font-[600] text-[14px] leading-[16px]">
                  Population:
                </h1>
                <h2 className="font-[300] text-[14px] leading-[16px]">
                  {country.population.toLocaleString()}
                </h2>
              </div>
              <div className="flex flex-wrap mb-[8px] gap-[5px]">
                <h1 className="font-[600] text-[14px] leading-[16px]">
                  Region:
                </h1>
                <h2 className="font-[300] text-[14px] leading-[16px]">
                  {country.region}
                </h2>
              </div>
              <div className="flex flex-wrap gap-[5px]">
                <h1 className="font-[600] text-[14px] leading-[16px]">
                  Capital:
                </h1>
                <h2 className="font-[300] text-[14px] leading-[16px]">
                  {country.capital}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Index;
