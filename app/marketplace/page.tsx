import SidebarUserInfo from "../profile/[user]/Components/SidebarUserInfo";
import MarketPlaceFilter from "./components/MarketPlaceFilter";
import Header from "../Component/Header";
import BackgroundImage from "../Component/BackgroundImage";
import MarketplaceHome from "./components/MarketPlaceHome";
import PostsProvider from "../context/PostsContext";

export default function MarketplaceIndex() {
  return (
    <PostsProvider>
      <div className="bg-white min-h-screen h-full">
        <Header />
        <BackgroundImage />
        <div className="flex mt-[100px]">
          <div className="w-[400px] z-50  ">
            <div className="flex flex-col items-center  border-r border-slate min-h-screen h-full ">
              <div className=" flex mx-4 justify-center w-80 h-[115px] p-4 overflow-y-auto mt-6">
                <SidebarUserInfo />
              </div>
              <MarketPlaceFilter />
            </div>
          </div>
          <MarketplaceHome />
        </div>
      </div>
    </PostsProvider>
  );
}
