import {
  Trophy,
  BookOpen,
  Clock3,
  TrendingUp,
} from "lucide-react";

import {
  getCompletedTopics,
  getOverallProgress,
  getTotalTopics,
} from "../../store/selectors";

export default function OverallProgress() {
  const total = getTotalTopics();

  const completed = getCompletedTopics();

  const progress = getOverallProgress();

  const remaining = total - completed;

  const estimatedHours = Math.ceil(
    remaining * 0.75
  );

  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-gradient-to-br
      from-slate-900
      to-slate-950
      p-8
      shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400">

            Overall Progress

          </p>

          <h2 className="mt-2 text-5xl font-bold">

            {progress}%

          </h2>

          <p className="mt-3 text-slate-400">

            {completed} of {total} topics completed

          </p>

        </div>

        <div
          className="
          h-24
          w-24
          rounded-full
          bg-blue-600/20
          flex
          items-center
          justify-center
          "
        >

          <TrendingUp
            className="text-blue-400"
            size={42}
          />

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div
          className="
          h-4
          rounded-full
          bg-slate-800
          overflow-hidden
          "
        >

          <div
            className="
            h-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-emerald-400
            transition-all
            duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}

      <div
        className="
        mt-10
        grid
        grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >

        <div
          className="
          rounded-2xl
          bg-slate-800/40
          p-5
          "
        >

          <BookOpen
            className="text-blue-400"
            size={22}
          />

          <p className="mt-3 text-slate-400">

            Completed

          </p>

          <h3 className="mt-1 text-2xl font-bold">

            {completed}

          </h3>

        </div>

        <div
          className="
          rounded-2xl
          bg-slate-800/40
          p-5
          "
        >

          <Clock3
            className="text-orange-400"
            size={22}
          />

          <p className="mt-3 text-slate-400">

            Remaining

          </p>

          <h3 className="mt-1 text-2xl font-bold">

            {remaining}

          </h3>

        </div>

        <div
          className="
          rounded-2xl
          bg-slate-800/40
          p-5
          "
        >

          <Trophy
            className="text-yellow-400"
            size={22}
          />

          <p className="mt-3 text-slate-400">

            Total Topics

          </p>

          <h3 className="mt-1 text-2xl font-bold">

            {total}

          </h3>

        </div>

        <div
          className="
          rounded-2xl
          bg-slate-800/40
          p-5
          "
        >

          <TrendingUp
            className="text-green-400"
            size={22}
          />

          <p className="mt-3 text-slate-400">

            Est. Hours Left

          </p>

          <h3 className="mt-1 text-2xl font-bold">

            {estimatedHours}

          </h3>

        </div>

      </div>

    </div>
  );
}