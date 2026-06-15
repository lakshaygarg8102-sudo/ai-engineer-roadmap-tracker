import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Section as SectionType } from "../../types/roadmap";
import { useRoadmapStore } from "../../store/roadmapStore";

interface Props {
  moduleId: string;
  section: SectionType;
  isFirstSection: boolean;
}

export default function Section({ moduleId, section, isFirstSection }: Props) {
  const completedTopics = useRoadmapStore((state) => state.completedTopics);
  const toggleTopic = useRoadmapStore((state) => state.toggleTopic);
  const isCompleted = useRoadmapStore((state) => state.isCompleted);
  const setCurrentSection = useRoadmapStore((state) => state.setCurrentSection);
  const getCurrentSection = useRoadmapStore((state) => state.getCurrentSection);

  // Find first incomplete topic in this section
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

  const sectionCompleted = firstIncompleteTopic === null;

  // Determine if this section should be open on mount:
  // 1. If user has previously visited a section in this module, open only that one
  // 2. Otherwise, open the first section that has incomplete topics
  const [open, setOpen] = useState(() => {
    const lastSection = getCurrentSection(moduleId);

    if (lastSection) {
      // User has visited this module before — open only the last visited section
      return lastSection === section.id;
    }

    // Fresh start — open the first section (isFirstSection) if it has topics left,
    // or open the first incomplete section
    return isFirstSection && !sectionCompleted;
  });

  const highlightedTopic = useRef<HTMLDivElement | null>(null);

  // Only scroll to first incomplete topic when section IS open
  useEffect(() => {
    if (open && highlightedTopic.current) {
      // Small delay to allow DOM to render the open section before scrolling
      const timer = setTimeout(() => {
        highlightedTopic.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // When completedTopics changes (topic ticked/unticked), re-scroll if section is open
  useEffect(() => {
    if (open && highlightedTopic.current) {
      const timer = setTimeout(() => {
        highlightedTopic.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstIncompleteTopic]);

  const handleToggle = () => {
    const next = !open;
    setOpen(next);

    if (next) {
      setCurrentSection(moduleId, section.id);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between p-5 hover:bg-slate-800 transition"
      >
        <div className="flex items-center gap-3">
          {open ? <ChevronDown size={20} /> : <ChevronRight size={20} />}

          <div>
            <h2 className="text-xl font-bold">{section.title}</h2>

            {sectionCompleted && (
              <p className="mt-1 text-sm text-green-400">✓ Section Completed</p>
            )}
          </div>
        </div>

        <span className="text-sm text-slate-400">
          {section.groups.reduce(
            (count, group) => count + group.topics.length,
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
                  const completed = isCompleted(topic.id);
                  // Highlight the first incomplete topic in the section
                  const active = topic.id === firstIncompleteTopic;

                  return (
                    <div
                      key={topic.id}
                      ref={active ? highlightedTopic : null}
                      className={`rounded-xl transition-all ${
                        active ? "border border-blue-500 bg-blue-500/10" : ""
                      }`}
                    >
                      <label className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-800">
                        <div>
                          <p
                            className={`font-medium ${
                              completed ? "text-slate-500 line-through" : ""
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
                          onChange={() => {
                            toggleTopic(topic.id);
                            setCurrentSection(moduleId, section.id);
                          }}
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
