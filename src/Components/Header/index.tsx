import Moon from "/src/assets/Moon.svg";
import MoonActive from "/src/assets/MoonActive.svg";

function Header(props: {
  Active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${
        props.Active && "bg-[#2B3844]"
      } desktop:mb-[48px] desktop:px-[80px] desktop:py-[24px] py-[30px] px-[16px] flex justify-between shadow-md mb-[24px]`}
    >
      <h1
        className={`${
          props.Active && "text-[#FFF]"
        } desktop:text-[24px] desktop:leading-[32.74px] font-[800] text-[14px] leading-[20px] mr-[10px]`}
      >
        Where in the world?
      </h1>
      <div
        onClick={() => {
          props.setActive(!props.Active);
        }}
        className="flex items-center cursor-pointer"
      >
        <img
          className="desktop:w-[15px] mr-[10px]"
          src={props.Active ? MoonActive : Moon}
          alt="Moon"
        />
        <h1
          className={`${
            props.Active && "text-[#FFF]"
          } desktop:text-[16px] desktop:leading-[21.82px] desktop:w-[84px] font-[600] text-[12px] leading-[16.37px] w-[70px]`}
        >
          Dark Mode
        </h1>
      </div>
    </div>
  );
}

export default Header;
