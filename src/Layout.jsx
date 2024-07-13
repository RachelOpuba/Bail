import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function HomeLayout({ children }) {
  return (
    <>
      <div className="flex flex-col jusify-center mx-auto w-full min-h-screen">
       <Navbar/>
        <main className="flex-1 mt-[90px]">{children}</main>
        <div className="">

        <Footer/>
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
