import SidebarUserInfo from "../profile/[user]/Components/SidebarUserInfo";
import MarketPlaceFilter from "./components/MarketPlaceFilter";
import FilterNav from "../profile/[user]/Components/FilterNav";
import Header from "../Component/Header";
import BackgroundImage from "../Component/BackgroundImage";
import UserProfileCards from "../profile/[user]/Components/UserProfileCards";
import { Price, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface PostCardType {
  images: string[];
  title: string;
  content: string;
  price: Price;
}

// TODO: ADD THIS TO STATE MANAGEMENT
const fetchPostData = async (): Promise<
  {
    images: string[];
    title: string;
    content: string;
    price: Price;
  }[]
> => {
  const data = await prisma.post.findMany({
    select: {
      images: true,
      title: true,
      content: true,
      price: true,
    },
  });
  return data;
};

export default async function MarketplaceHome() {
  const posts = await fetchPostData();
  return (
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
        <div className=" z-50 w-full ">
          <FilterNav page={true} />
          <div className="flex flex-wrap w-full">
            {posts.map((post, i) => (
              <UserProfileCards key={i} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
