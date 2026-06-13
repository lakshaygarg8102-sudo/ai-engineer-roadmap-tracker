import { Flame } from "lucide-react";

export default function DashboardHeader() {

    return (

        <div className="mb-8">

            <p className="text-slate-400">

                Welcome back 👋

            </p>

            <div className="flex items-center gap-3 mt-2">

                <h1 className="text-4xl font-bold">

                    Continue Learning

                </h1>

                <Flame
                    className="text-orange-400"
                    size={32}
                />

            </div>

        </div>

    );

}