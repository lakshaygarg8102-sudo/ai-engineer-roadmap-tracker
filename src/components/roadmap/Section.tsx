import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Section as SectionType } from "../../types/roadmap";
import { useRoadmapStore } from "../../store/roadmapStore";

interface Props {
  moduleId: string;
  section: SectionType;
}
export default function Section({ section }: Props) {
  const completedTopics = useRoadmapStore(
    (state) => state.completedTopics
  );


  const toggleTopic = useRoadmapStore(
    (state) => state.toggleTopic
  );

  const isCompleted = useRoadmapStore(
    (state) => state.isCompleted
  );

  const firstIncompleteTopic = useMemo(() => {
    for (const group of section.groups) {
      for (const topic of group.topics) {
        if (!completedTopics.includes(topic.id)) {
          return topic.id;
        }
      }
    }

    return null;
  }, [completedTopics, section]);

  const sectionCompleted =
    firstIncompleteTopic === null;

  const [open, setOpen] = useState(
    !sectionCompleted
  );

  const highlightedTopic = useRef<
    HTMLDivElement | null
  >(null);

  useEffect(() => {
    if (highlightedTopic.current) {
      highlightedTopic.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 hover:bg-slate-800 transition"
      >
        <div className="flex items-center gap-3">

          {open ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}

          <div>

            <h2 className="text-xl font-bold">

              {section.title}

            </h2>

            {sectionCompleted && (
              <p className="text-green-400 text-sm mt-1">
                ✓ Section Completed
              </p>
            )}

          </div>

        </div>

        <span className="text-sm text-slate-400">
          {section.groups.reduce(
            (count, group) =>
              count + group.topics.length,
            0
          )}{" "}
          Topics
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-800">

          {section.groups.map((group) => (

            <div
              key={group.id}
              className="border-b border-slate-800 p-5 last:border-b-0"
            >

              <h3 className="mb-4 text-lg font-semibold text-blue-400">

                {group.title}

              </h3>

              <div className="space-y-2">

                {group.topics.map((topic) => {
                  const completed =
                    isCompleted(topic.id);

                  const active =
                    topic.id ===
                    firstIncompleteTopic;

                  return (
                    <div
                      key={topic.id}
                      ref={
                        active
                          ? highlightedTopic
                          : null
                      }
                      className={`rounded-xl transition-all

                      ${
                        active
                          ? "border border-blue-500 bg-blue-500/10"
                          : ""
                      }`}
                    >
                      <label
                        className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-800"
                      >
                        <div>

                          <p
                            className={`font-medium

                            ${
                              completed
                                ? "text-slate-500 line-through"
                                : ""
                            }`}
                          >
                            {topic.title}
                          </p>

                          <p className="text-sm text-slate-500">

                            {topic.estimatedMinutes} mins

                          </p>

                        </div>

                        <input
                          type="checkbox"
                          checked={completed}
                          onChange={() =>
                            toggleTopic(topic.id)
                          }
                          className="h-5 w-5 accent-blue-500"
                        />

                      </label>
                    </div>
                  );
                })}

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}