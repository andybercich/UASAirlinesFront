const NavBar = () => {
  return (
    <div className=" container max-w-full justify-center flex shadow-2xl items-center relative p-7  border-b border-gray-100">
      <img
        src="https://static.vecteezy.com/system/resources/previews/014/468/236/non_2x/plane-aircraft-travel-logo-design-template-vector.jpg"
        alt=""
        className="w-40  absolute left-10 pl-10 cursor-pointer "
      />
      <div className="flex w-1/3 justify-between ">
        <div className=" text-violet-950 font-semibold text-lg  hover:text-violet-900 cursor-pointer">
          Mis reservas
        </div>
        <div className="text-violet-950 font-semibold text-lg  hover:text-violet-900 cursor-pointer">
          Servicios
        </div>
        <div className=" text-violet-950 font-semibold text-lg hover:text-violet-800 cursor-pointer">
          Informacion
        </div>
      </div>
    </div>
  );
};

export default NavBar;
