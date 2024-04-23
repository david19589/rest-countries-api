import Search from "/src/assets/Search.png";
import SearchActive from "/src/assets/SearchActive.png";

function SearchBar(props: {
  Active: boolean;
  onSearch: (value: string) => void;
}) {
  return (
    <div
      className={`${
        props.Active ? "bg-[#2B3844]" : "bg-[#FFF]"
      } desktop:w-[480px] flex items-center mx-[16px] py-[14px] px-[30px] shadow-lg rounded-md mb-[40px]`}
    >
      <img
        className="w-[17px] mr-[26px]"
        src={props.Active ? SearchActive : Search}
        alt="Search"
      />
      <input
        className={`${
          props.Active && "text-[#FFF] bg-[#2B3844] placeholder-[#FFF]"
        }  desktop:text-[14px] font-[400] text-[12px] leading-[20px] outline-none w-full placeholder-[#C4C4C4]`}
        type="search"
        id="search"
        name="search"
        placeholder="Search for a country..."
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
