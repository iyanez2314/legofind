import UserProfileComponent from "./Components/UserProfileComponent";
import UserProvider from "@/app/context/UserContext";

export default function UserProfile() {
  return (
    <UserProvider>
      <UserProfileComponent />
    </UserProvider>
  );
}
