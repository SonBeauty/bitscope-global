import InfoUser from "@/components/PageComponents/Profile/InfoUser";
import LayoutProfile from "@/components/PageComponents/Profile/LayoutProfile";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state: RootState) => state.users.user);
  return (
    <>
      <LayoutProfile
        title=""
        name={user?.name || ""}
        username={user?.username || ""}
      >
        <InfoUser email={user?.email || ""} phone={user?.phone} />
      </LayoutProfile>
    </>
  );
};
export default Profile;