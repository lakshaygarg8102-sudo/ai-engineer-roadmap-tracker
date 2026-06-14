import {
  LayoutDashboard,
  Sigma,
  Database,
  Brain,
  Cpu,
  Bot,
  Boxes,
  Cloud,
  Container,
  FolderGit2,
  ChevronDown,
  ChevronRight,
  Code2,
} from "lucide-react";

import { useState } from "react";

import { roadmapModules } from "../../data";

import { getModuleProgress } from "../../store/selectors";

import { useRoadmapStore } from "../../store/roadmapStore";

const moduleIcons: Record<string, any> = {
  python: Code2,
  numpy: Boxes,
  pandas: Database,
  sql: Database,
  statistics: Sigma,
  machine_learning: Brain,
  deep_learning: Cpu,
  pytorch: Cpu,
  llms: Bot,
};

const platformItems = [
  {
    name: "Docker",
    icon: Container,
  },
  {
    name: "Kubernetes",
    icon: Boxes,
  },
  {
    name: "AWS",
    icon: Cloud,
  },
  {
    name: "Projects",
    icon: FolderGit2,
  },
];

export default function Sidebar() {
  const [learningOpen, setLearningOpen] = useState(true);
  const [aiOpen, setAiOpen] = useState(true);
  const [platformOpen, setPlatformOpen] = useState(true);

  const currentModule = useRoadmapStore(
    (state) => state.currentModule
  );

  const setCurrentModule = useRoadmapStore(
    (state) => state.setCurrentModule
  );

  return (
    <aside className="w-80 h-screen sticky top-0 overflow-y-auto bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-3xl font-bold">
          🚀 AI Roadmap
        </h1>

        <p className="text-slate-400 mt-2">
          AI Platform Engineer
        </p>

      </div>

      {/* Content */}

      <div className="flex-1 p-5 space-y-8">

        {/* Learning */}

        <div>

          <button
            onClick={() => setLearningOpen(!learningOpen)}
            className="flex items-center justify-between w-full px-2 mb-3"
          >

            <span className="text-xs tracking-[0.2em] font-semibold text-slate-500">
              LEARNING
            </span>

            {learningOpen ? (
              <ChevronDown size={16} className="text-slate-500" />
            ) : (
              <ChevronRight size={16} className="text-slate-500" />
            )}

          </button>

          {learningOpen && (

            <div className="space-y-2">

              {/* Dashboard */}

              <button
                onClick={() =>
                  setCurrentModule("dashboard")
                }
                className={`flex items-center gap-4 w-full rounded-xl px-4 py-3 transition-all

                ${
                  currentModule === "dashboard"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`}
              >

                <LayoutDashboard size={20} />

                <span>Dashboard</span>

              </button>

              {/* Modules */}

              {roadmapModules.map((module) => {

                const Icon =
                  moduleIcons[module.id] ??
                  Database;

                const progress =
                  getModuleProgress(module.id);

                const active =
                  currentModule === module.id;

                return (

                  <button
                    key={module.id}

                    onClick={() =>
                      setCurrentModule(module.id)
                    }

                    className={`group w-full rounded-xl px-4 py-3 transition-all

                    ${
                      active
                        ? "bg-blue-600"
                        : "hover:bg-slate-800"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-4">

                        <Icon
                          size={20}
                          className={
                            active
                              ? "text-white"
                              : "text-slate-400 group-hover:text-blue-400"
                          }
                        />

                        <span>{module.title}</span>

                      </div>

                      <span className="text-xs font-semibold">

                        {progress.progress}%

                      </span>

                    </div>

                    <div className="mt-3 h-1.5 rounded-full bg-slate-800 overflow-hidden">

                      <div
                        className="h-full bg-blue-400"
                        style={{
                          width: `${progress.progress}%`,
                        }}
                      />

                    </div>

                  </button>

                );

              })}

              <button className="flex items-center gap-4 w-full rounded-xl px-4 py-3 hover:bg-slate-800">

                <Sigma
                  size={20}
                  className="text-slate-400"
                />

                <span>Mathematics</span>

              </button>

            </div>

          )}

        </div>

        {/* AI */}

        <div>

          <button
            onClick={() => setAiOpen(!aiOpen)}
            className="flex items-center justify-between w-full px-2 mb-3"
          >

            <span className="text-xs tracking-[0.2em] font-semibold text-slate-500">
              ARTIFICIAL INTELLIGENCE
            </span>

            {aiOpen ? (
              <ChevronDown size={16} className="text-slate-500" />
            ) : (
              <ChevronRight size={16} className="text-slate-500" />
            )}

          </button>

          {aiOpen && (

            <div className="space-y-2">

              {[
                { name: "Machine Learning", icon: Brain },
                { name: "Deep Learning", icon: Cpu },
                { name: "PyTorch", icon: Cpu },
                { name: "LLMs", icon: Bot },
              ].map((item) => {

                const Icon = item.icon;

                return (

                  <button
                    key={item.name}
                    className="group flex items-center gap-4 w-full rounded-xl px-4 py-3 hover:bg-slate-800 transition-all"
                  >

                    <Icon
                      size={20}
                      className="text-slate-400 group-hover:text-blue-400"
                    />

                    <span>{item.name}</span>

                  </button>

                );

              })}

            </div>

          )}

        </div>

        {/* Platform */}

        <div>

          <button
            onClick={() => setPlatformOpen(!platformOpen)}
            className="flex items-center justify-between w-full px-2 mb-3"
          >

            <span className="text-xs tracking-[0.2em] font-semibold text-slate-500">
              PLATFORM
            </span>

            {platformOpen ? (
              <ChevronDown size={16} className="text-slate-500" />
            ) : (
              <ChevronRight size={16} className="text-slate-500" />
            )}

          </button>

          {platformOpen && (

            <div className="space-y-2">

              {platformItems.map((item) => {

                const Icon = item.icon;

                return (

                  <button
                    key={item.name}
                    className="group flex items-center gap-4 w-full rounded-xl px-4 py-3 hover:bg-slate-800 transition-all"
                  >

                    <Icon
                      size={20}
                      className="text-slate-400 group-hover:text-blue-400"
                    />

                    <span>{item.name}</span>

                  </button>

                );

              })}

            </div>

          )}

        </div>

      </div>

    </aside>
  );
}