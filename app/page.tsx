import BackgroundImage from "./Component/BackgroundImage";
import Header from "./Component/Header";
import HomePageContent from "./Component/HomePageContent";
import NavBar from "./Component/NavBar";
import AuthContext from "./context/AuthContext";
import PostsProvider from "./context/PostsContext";
import RootLayout from "./layout";

export default function Home() {
  return <HomePageContent />;
}
