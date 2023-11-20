import { Icon } from "@iconify/react";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="h-screen w-full bg-stone-950 flex flex-col justify-between items-center ">
      <nav className="w-full h-24 flex px-12 items-center bg-black ">
        <Icon icon="logos:spotify" width="120" />
      </nav>
      <div className="bg-black h-2/3 w-1/2 flex flex-col  items-center p-10 rounded">
        <h1 className="text-white text-4xl font-bold mb-14 uppercase">
          Login to Spotify
        </h1>
        <TextInput
          label="Email or Username"
          placeholder="Email or Username"
          type="text"
        />
        <TextInput label="Password" placeholder="Password" type="password" />
        <button className="bg-green-500 hover:font-bold hover:scale-105 font-semibold w-1/2 py-3 rounded-3xl mt-3">
          Login
        </button>
        <span className="text-gray-400 mt-6">Don't have an account?</span>
        <span className="font-semibold text-white underline cursor-pointer uppercase">
          <Link to="/signup">
          Sign Up for Spotify
          </Link>
        </span>
      </div>
      <div className="">
        <h1 className="text-gray-400 text-sm uppercase">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </h1>
      </div>
    </div>
  );
};
export default LoginComponent;
