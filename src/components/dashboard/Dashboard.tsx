import DashboardHeader from "./DashboardHeader";
import OverallProgress from "./OverallProgress";
import ModuleGrid from "./ModuleGrid";
import ContinueLearning from "./ContinueLearning";
//import ProgressChart from "./ProgressChart";

export default function Dashboard() {
  return (
    <div
      className="
      max-w-7xl
      mx-auto
      px-8
      py-8
      space-y-10
      "
    >
      {/* Header */}

      <DashboardHeader />

      {/* Overall Progress */}

      <OverallProgress />

      {/* Learning Modules */}

      <ModuleGrid />

      {/* Bottom Grid */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-8
        "
      >
        <ContinueLearning />

        {/* <ProgressChart /> */}
      </div>
    </div>
  );
}