import {
  CalendarDays,
  TrendingUp,
} from "lucide-react";

export default function ProgressChart() {
  const weeklyData = [
    { day: "Mon", topics: 4 },
    { day: "Tue", topics: 7 },
    { day: "Wed", topics: 3 },
    { day: "Thu", topics: 9 },
    { day: "Fri", topics: 5 },
    { day: "Sat", topics: 11 },
    { day: "Sun", topics: 8 },
  ];

  const max = Math.max(
    ...weeklyData.map((d) => d.topics)
  );

  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      p-8
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Weekly Progress
          </h2>

          <p className="text-slate-400 mt-1">
            Topics completed this week
          </p>

        </div>

        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-blue-600/20
          flex
          items-center
          justify-center
          "
        >
          <CalendarDays
            size={28}
            className="text-blue-400"
          />
        </div>

      </div>

      {/* Chart */}

      <div
        className="
        mt-10
        flex
        justify-between
        items-end
        h-72
        gap-4
        "
      >
        {weeklyData.map((item) => {

          const height =
            (item.topics / max) * 220;

          return (

            <div
              key={item.day}
              className="
              flex
              flex-col
              items-center
              flex-1
              "
            >
              <span className="mb-3 text-sm text-slate-400">

                {item.topics}

              </span>

              <div
                className="
                w-full
                rounded-t-xl
                bg-gradient-to-t
                from-blue-600
                via-cyan-500
                to-cyan-300
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer
                "
                style={{
                  height,
                }}
              />

              <span className="mt-4 text-slate-400">

                {item.day}

              </span>

            </div>

          );

        })}
      </div>

      {/* Footer */}

      <div
        className="
        mt-8
        flex
        items-center
        justify-between
        border-t
        border-slate-800
        pt-6
        "
      >
        <div>

          <p className="text-slate-400">
            This Week
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {weeklyData.reduce(
              (sum, item) => sum + item.topics,
              0
            )} Topics
          </h3>

        </div>

        <div className="flex items-center gap-3">

          <TrendingUp
            className="text-green-400"
            size={22}
          />

          <span className="text-green-400 font-semibold">
            +18%
          </span>

        </div>

      </div>
    </div>
  );
}