import {
  Search,
  Bell,
  Moon,
  Bookmark,
  CheckCircle2,
} from "lucide-react";

import {
  getCompletedTopics,
  getOverallProgress,
  getTotalTopics,
} from "../../store/selectors";

export default function Navbar() {
  const completed = getCompletedTopics();
  const total = getTotalTopics();
  const progress = getOverallProgress();

  return (
    <header
      className="
        sticky
        top-0
        z-40
        bg-slate-950/90
        backdrop-blur
        border-b
        border-slate-800
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          px-8
          py-5
        "
      >
        {/* Left */}

        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-4
              text-slate-400
            "
          />

          <input
            placeholder="Search roadmap..."
            className="
              w-[420px]
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              py-3
              pl-12
              pr-20
              outline-none
              transition-all
              focus:border-blue-500
            "
          />

          <span
            className="
              absolute
              right-4
              top-3
              rounded-md
              border
              border-slate-700
              px-2
              py-1
              text-xs
              text-slate-400
            "
          >
            ⌘ K
          </span>

        </div>

        {/* Right */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* Progress */}

          <div
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              px-4
              py-2
            "
          >
            <div className="text-xs text-slate-400">
              Progress
            </div>

            <div className="font-semibold">
              {progress}%
            </div>
          </div>

          {/* Completed */}

          <div
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              px-4
              py-2
            "
          >
            <div className="text-xs text-slate-400">
              Topics
            </div>

            <div className="font-semibold">
              {completed}/{total}
            </div>
          </div>

          {/* Bookmark */}

          <button
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-3
              hover:border-blue-500
              transition
            "
          >
            <Bookmark size={18} />
          </button>

          {/* Notifications */}

          <button
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-3
              hover:border-blue-500
              transition
            "
          >
            <Bell size={18} />
          </button>

          {/* Theme */}

          <button
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-3
              hover:border-blue-500
              transition
            "
          >
            <Moon size={18} />
          </button>

          {/* Completion Badge */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-emerald-700
              bg-emerald-950/40
              px-4
              py-3
            "
          >
            <CheckCircle2
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium">
              Keep Learning 🚀
            </span>
          </div>

        </div>

      </div>
    </header>
  );
}