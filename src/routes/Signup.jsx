import { Icon } from "@iconify/react";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  return (
    <div className="h-full w-full bg-stone-950 flex flex-col justify-between items-center ">
      <nav className="w-full h-24 flex px-12 items-center bg-black ">
        <Icon icon="logos:spotify" width="120" />
      </nav>
      <div className="bg-black h-2/3 w-1/2 flex flex-col  items-center p-10 mb-20 rounded">
        <h1 className="text-white text-4xl font-semibold mb-14 w-1/2">
          Sign Up to start listening
        </h1>
        <TextInput
          label="What's your email?"
          placeholder="Enter your email"
          type="email"
        />
         <TextInput
          label="Confirm your email"
          placeholder="Enter your email again"
          type="email"
        />
        <TextInput label="Create password" placeholder="Enter a strong password" type="password" />
        <TextInput label="What should we call you?" placeholder="Enter your profile name" type="text" />
        <button className="bg-green-500 hover:font-bold hover:scale-105 font-semibold w-1/2 py-3 rounded-3xl mt-3">
          SignUp
        </button>
        <span className="text-gray-400 mt-6">Already on Spotify?</span>
        <span className="font-semibold text-white underline cursor-pointer uppercase">
          <Link to="/login">
          Login to Spotify
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
export default SignUpComponent;
