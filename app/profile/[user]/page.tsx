import UserProfileComponent from "./Components/UserProfileComponent";
import UserProvider from "@/app/context/UserContext";
import AuthContext from "@/app/context/AuthContext";

export default function UserProfile() {
  return (
    <UserProvider>
      <AuthContext>
        <UserProfileComponent />
      </AuthContext>
    </UserProvider>
  );
}
