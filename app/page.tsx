import BackgroundImage from "./Component/BackgroundImage";
import Header from "./Component/Header";
import HomePageContent from "./Component/HomePageContent";
import NavBar from "./Component/NavBar";
import AuthContext from "./context/AuthContext";
import PostsProvider from "./context/PostsContext";

export default function Home() {
  return (
    <AuthContext>
      <div className="bg-white h-screen">
        <Header />
        <BackgroundImage />
        <HomePageContent />
      </div>
    </AuthContext>
  );
}
