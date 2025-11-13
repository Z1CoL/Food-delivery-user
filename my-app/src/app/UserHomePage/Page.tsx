import AllFood from "@/_components/AllFood";
import TodaysOffer from "@/_components/TodaysOffer";
import UserNavigation from "@/_components/userNavigation";

export default function UserHomePage() {
  return (
    <div>
      <UserNavigation />
      <TodaysOffer />
      <AllFood/>
    </div>
  );
}
