import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Section as SectionType } from "../../types/roadmap";

interface Props {
  section: SectionType;
}

export default function Section({ section }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 hover:bg-slate-800"
      >
        <div className="flex items-center gap-3">
          {open ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h2 className="text-xl font-bold">{section.title}</h2>
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
            <div key={group.id} className="p-5 border-b border-slate-800">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                {group.title}
              </h3>

              <div className="space-y-2">
                {group.topics.map((topic) => (
                  <label
                    key={topic.id}
                    className="flex justify-between items-center rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer"
                  >
                    <div>
                      <p>{topic.title}</p>
                      <p className="text-sm text-slate-500">
                        {topic.estimatedMinutes} mins
                      </p>
                    </div>

                    <input type="checkbox" />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

