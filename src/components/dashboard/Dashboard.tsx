import StatsCard from "./StatsCard";

import DashboardHeader from "./DashboardHeader";

import GoalCard from "./GoalCard";

import ProgressChart from "./ProgressChart";

export default function Dashboard(){

return(

<div className="p-10">

<div className="p-8 lg:p-10"></div>

<DashboardHeader/>

<div className="

grid

grid-cols-1
md:grid-cols-2
xl:grid-cols-4

gap-6

">

<StatsCard

title="Progress"

value="0%"

/>

<StatsCard

title="Topics"

value="0 / 1500"

/>

<StatsCard

title="Hours"

value="0"

/>

<StatsCard

title="Interview"

value="Beginner"

/>

</div>

<div className="

grid

grid-cols-2

gap-8

">

<GoalCard/>

<ProgressChart/>

</div>

</div>

)

}