import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
             style={{ backgroundImage: "url('https://i.ibb.co/02DvRcV/404.jpg')" }}>

            <div className="px-10 py-16 w-full lg:w-[50%] flex flex-col items-start justify-center rounded-xl">
                <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-black">Go Home, You’re Drunk!</h1>

               <Link to="/">
               <button className="py-3 px-8 rounded-full bg-[#92E3A9] hover:bg-[#4ec46f] text-white mt-5">
                    BACK TO HOME
                </button>
               </Link>
            </div>
        </div>
    );
};

export default Page404;
