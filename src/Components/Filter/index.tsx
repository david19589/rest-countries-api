import { useState } from "react";
import ArrowDown from "/src/assets/ArrowDown.png";
import ArrowDownActive from "/src/assets/ArrowDownActive.png";

function Filter(props: {
  Active: boolean;
  onRegionSelect: (region: string) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] =
    useState<string>("Filter by Region");

  const options = [
    { id: 0, label: "All" },
    { id: 1, label: "Africa" },
    { id: 2, label: "Americas" },
    { id: 3, label: "Asia" },
    { id: 4, label: "Europe" },
    { id: 5, label: "Oceania" },
  ];
  const handleClick = (option: string) => {
    props.onRegionSelect(option);
    setSelectedOption(option);
    setOpen(false);
  };
  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`${
          props.Active ? "text-[#FFF] bg-[#2B3844]" : "bg-[#FFF]"
        } desktop:w-[216.5px] flex items-center mx-[16px] shadow-md w-[204.5px] rounded-md py-[16px] px-[24px] cursor-pointer`}
      >
        <button className="desktop:text-[14px] text-start outline-none w-full mr-[62px] font-[400] text-[12px] leading-[20px]">
          {selectedOption}
        </button>
        <img
          className="w-[10px]"
          src={props.Active ? ArrowDownActive : ArrowDown}
          alt="ArrowDown"
        />
      </div>
      {open && (
        <div
          className={`${
            props.Active ? "text-[#FFF] bg-[#2B3844]" : "bg-[#FFF]"
          } desktop:w-[216px] desktop:text-[14px] desktop:leading-[20px] absolute mx-[16px] shadow-md w-[204px] rounded-md mt-[4px] py-[16px] px-[24px] font-[400] text-[12px] leading-[16px] flex flex-col gap-[8px]`}
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                handleClick(option.label);
              }}
              className="cursor-pointer w-fit"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
