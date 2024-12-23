import ManagementTeam from "../components/team/team";
import TeamHeader from "../components/team/teamHeader";

export default function Page() {
  return (
    <div className="text-white">
      <TeamHeader/>
      <ManagementTeam/>
    </div>
  );
}