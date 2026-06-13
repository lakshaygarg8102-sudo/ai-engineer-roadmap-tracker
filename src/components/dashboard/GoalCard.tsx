import { ArrowRight } from "lucide-react";

export default function GoalCard() {

    return (

        <div className="

        bg-slate-900

        rounded-2xl

        p-6

        mt-8

        border

        border-slate-800

        ">

            <p className="text-slate-400">

                Today's Goal

            </p>

            <h2 className="

            text-2xl

            font-semibold

            mt-3

            ">

                Python → Functions

            </h2>

            <button className="

            mt-5

            flex

            items-center

            gap-2

            bg-blue-600

            px-5

            py-3

            rounded-xl

            hover:bg-blue-700

            ">

                Continue

                <ArrowRight/>

            </button>

        </div>

    );

}