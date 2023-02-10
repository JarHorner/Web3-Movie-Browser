import { FilmIcon } from "@heroicons/react/24/solid";

const Header = (props) => {
  return (
    <div
      id=" default_header"
      className="h-20 m-3 bg-slate-400 rounded-2xl flex flex-row justify-start"
    >
      <div className="flex-1">
        <FilmIcon
          className=" w-20 ml-5 hover:cursor-pointer hover:scale-105 transition-all"
          onClick={() => props.renderHomeView()}
        />
      </div>
      <div className="flex-1"></div>
      <div className="flex mr-10 justify-center items-center">
        <button className="bg-white/50 hover:bg-red-600 font-bold py-2.5 px-8 rounded-2xl hover:scale-105 transition-all">
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
