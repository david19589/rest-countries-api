import { Link, useParams } from "react-router-dom";
import ArrowLeft from "/src/assets/ArrowLeft.png";
import ArrowLeftActive from "/src/assets/ArrowLeftActive.png";

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

function Detail(props: { Active: boolean; countries: Country[] }) {
  const { Country } = useParams();
  const countryObj = props.countries.find(
    (country) => country.name.common.toLowerCase() === Country?.toLowerCase()
  );

  const languages = countryObj?.languages
    ? Object.keys(countryObj.languages).join(", ")
    : "";

  const currencies = countryObj?.currencies
    ? Object.keys(countryObj.currencies).join(", ")
    : "";

  const borders =
    countryObj?.borders?.map((country) => {
      return country;
    }) || [];

  return (
    <div className="px-[28px] desktop:px-[80px] pb-[68px]">
      <Link className="flex w-fit" to={"/"}>
        <div
          className={`${
            props.Active && "text-[#FFF] border-hidden bg-[#2B3844]"
          } desktop:mb-[80px] flex items-center cursor-pointer border-[rgb(0 0 0 / 14%)] border-[2px] rounded-md shadow-md w-fit px-[24px] py-[6px] gap-[9px] mb-[64px]`}
        >
          <img
            src={props.Active ? ArrowLeftActive : ArrowLeft}
            alt="ArrowLeft"
          />
          <h1>Back</h1>
        </div>
      </Link>
      <div>
        {countryObj && (
          <div className="flex flex-col items-center desktop:flex-row desktop:justify-center">
            <img
              className="desktop:mr-[144px] w-[100%] tablet:w-[560px] mb-[44px]"
              src={countryObj.flags.svg}
              alt={countryObj.name.common}
            />
            <div className="self-start tablet:self-center">
              <h1
                className={`${
                  props.Active && "text-[#FFF]"
                } desktop:text-[32px] desktop:leading-[43px] desktop:mb-[23px] font-[800] text-[22px] leading-[30px] mb-[16px]`}
              >
                {countryObj.name.common}
              </h1>
              <div className="tablet:flex tablet:flex-row tablet:gap-[100px]">
                <div className="flex flex-col gap-[8px] mb-[16px]">
                  <div className="tablet:max-w-[225px] desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Official Name:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      }  desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {countryObj.name.official}
                    </h2>
                  </div>

                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Population:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {countryObj.population.toLocaleString()}
                    </h2>
                  </div>
                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Region:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {countryObj.region}
                    </h2>
                  </div>
                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Sub Region:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {countryObj.subregion}
                    </h2>
                  </div>
                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Capital:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {countryObj.capital}
                    </h2>
                  </div>
                </div>
                <div className="desktop:w-[203px] flex flex-col gap-[8px] mb-[34px]">
                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Top Level Domain:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {countryObj.tld}
                    </h2>
                  </div>
                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Currencies:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {currencies}
                    </h2>
                  </div>
                  <div className="desktop:mb-0 flex flex-wrap mb-[8px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[600] text-[14px] leading-[16px]`}
                    >
                      Languages:
                    </h1>
                    <h2
                      className={`${
                        props.Active && "text-[#d5d5d5]"
                      } desktop:text-[16px] desktop:leading-[32px] font-[300] text-[14px] leading-[16px]`}
                    >
                      {languages}
                    </h2>
                  </div>
                  <div className="flex flex-wrap max-w-[224px] gap-[5px]">
                    <h1
                      className={`${
                        props.Active && "text-[#FFF]"
                      } font-[600] text-[16px] leading-[24px] mb-[8px]`}
                    >
                      Border Countries:
                    </h1>
                    {borders.map((border, index) => (
                      <div key={index}>
                        <button
                          className={`${
                            props.Active && "text-[#d5d5d5] bg-[#2B3844]"
                          } font-[400] text-[16px] leading-[24px] cursor-default px-[30px] py-[6px] shadow-md block mb-[8px]`}
                        >
                          {border}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
