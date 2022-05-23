import encode from "../assets/encode.jpg";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div
      className="h-screen w-screen  flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${encode})` }}
    >
      <div className="w-full sm:w-4/5 md:w-5/7 lg:w-1/2 ">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
