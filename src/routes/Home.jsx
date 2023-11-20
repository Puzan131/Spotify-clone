import spotify_logo from "../images/spotify_logo_white.svg";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/TextWithHover";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import NormalText from "../components/NormalText";
const HomeComponent = () => {
  return (
    <div className="h-screen w-full flex bg-black">
      <div className="h-full w-1/4 p-3">
        <div className="bg-[#121212] rounded-md p-5 flex flex-col gap-6 mb-3">
          <img src={spotify_logo} alt="logo" className="w-20" />
          <IconText icon="material-symbols:home" text="Home" active />
          <IconText icon="carbon:search" text="Search" />
          <IconText icon="clarity:library-solid" text="Your Library" />
        </div>
        <div className="bg-[#121212] rounded-md p-5 mb-3 flex flex-col gap-6">
          <IconText
            icon="material-symbols-light:add-box"
            text="Create Playlist"
          />
          <IconText icon="mdi:heart" text="Liked Songs" />
        </div>
        <div className="h-1/2 w-full  bg-[#121212] rounded-md p-5">
          <h1 className="text-lg text-white font-semibold mb-3 ">
            Let's find some podcasts to follow
          </h1>
          <h1 className="text-gray-400 w-48 text-md">
            We'll keep you updated on new episodes
          </h1>
          <h1 className="text-sm font-light mt-24 text-gray-400">Note:This site is a practice clone site created by Poojan Bhatt as a full stack project</h1>
        </div>
        <div className="text-white absolute bottom-0 hover:border-2  mx-6 my-16 cursor-pointer flex items-center gap-2 border border-gray-300 hover:border-white px-3 py-2 rounded-3xl">
          <Icon icon="tabler:world" color="white" fontSize={23} />
          <span className="text-sm hover:font-semibold ">English</span>
        </div>
      </div>
      <div className="right w-3/4 h-full">
        <div className="navbar w-full h-[10%] flex gap-5 items-center tracking-widest  justify-end bg-[#0F0F0F]  rounded-md mt-3 pr-9">
          <TextWithHover text="Premium" />
          <TextWithHover text="Support" />
          <TextWithHover text="Download" />
          <span className="text-white font-bold">|</span>
          <Link to="/signup">
            <TextWithHover
              text="Sign Up"
              AdditionalStyling="text-sm tracking-normal hover:scale-110"
            />
          </Link>
          <Link to="/login">
            <TextWithHover
              text="Login"
              AdditionalStyling="text-sm  hover:scale-110 tracking-normal bg-[#454545] font-bold  py-2 px-4 rounded-3xl"
            />
          </Link>
        </div>
        <div className="main overflow-y-scroll h-[83%] bg-gradient-to-t from-[#121212] from-50% via-[#282828] via-85% to-[#3e3e3e]  rounded-md p-8">
          <PlaylistView />
          <div className="footer mt-16 flex gap-28">
            <div>
              <h1 className="text-white text-md font-semibold">Company</h1>
              <NormalText text="About" />
              <NormalText text="Jobs" />
              <NormalText text="For The Record" />
            </div>
            <div>
              <h1 className="text-white text-md font-semibold">Communities</h1>
              <NormalText text="For Artists" />
              <NormalText text="Developers" />
              <NormalText text="Advertising" />
              <NormalText text="Investors" />
              <NormalText text="Vendors" />
            </div>
            <div>
              <h1 className="text-white text-md font-semibold">Useful Links</h1>
              <NormalText text="Free Mobile App" />
              <NormalText text="Support" />
            </div>
          </div>
          <hr className="my-7 bg-black" />
          <h1 className="text-white font-light text-sm">&copy; 2023 Poojan Bhatt</h1>
        </div>
      </div>
    </div>
  );
};

const PlaylistView = () => {
  return (
    <div>
      <div className="text-white font-bold text-2xl mb-8">
        Spotify Playlists
      </div>
      <div className=" w-full flex justify-between">
        <Card
          title="Today's Top Hits"
          description="Tate McRae is on top of the Hottest 50!"
          imageLink="https://static1.squarespace.com/static/5fd953e5e5517503cf76c906/5fd9540491b0852848962342/609d7547651d0b1dd8608204/1623981756104/tth+weeknd.jpeg?format=1500w"
        />
        <Card
          title="RapCaviar"
          description="New music from Drake, Lil Wayne an..."
          imageLink="https://images.genius.com/03077cf6e86f1c29f942b9da25dcbe28.640x640x1.jpg"
        />
        <Card
          title="All Out 2010s"
          description="The biggest songs of 2010s."
          imageLink="https://i.scdn.co/image/ab67706f00000003f95e0d3dd06dbadb407ef766"
        />
        <Card
          title="Rock Classics"
          description="Rock legends & epic songs that continue..."
          imageLink="https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e"
        />
        <Card
          title="Chill Hits"
          description="Kick back to the best new chill."
          imageLink="https://i1.sndcdn.com/artworks-000877918654-f6i3xi-t500x500.jpg"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
