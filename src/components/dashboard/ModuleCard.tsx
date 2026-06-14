import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  icon: string;
  progress: number;
  completed: number;
  total: number;
  onClick: () => void;
}

export default function ModuleCard({
  title,
  icon,
  progress,
  completed,
  total,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      text-left
      rounded-2xl
      bg-slate-900
      border
      border-slate-800
      p-6
      hover:border-blue-500
      hover:scale-[1.02]
      transition-all
      duration-300
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="text-4xl">

            {icon}

          </div>

          <div>

            <h3 className="text-xl font-semibold">

              {title}

            </h3>

            <p className="text-slate-400 text-sm">

              {completed} / {total} Topics

            </p>

          </div>

        </div>

        <ArrowRight
          className="text-slate-500"
          size={20}
        />

      </div>

      <div className="mt-6">

        <div className="flex justify-between mb-2">

          <span className="text-sm text-slate-400">

            Progress

          </span>

          <span className="font-semibold text-blue-400">

            {progress}%

          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">

          <div
            className="h-full bg-blue-500 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </button>
  );
}