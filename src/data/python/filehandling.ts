import { Section } from "../../types/roadmap";

export const filehandling: Section = {
  id: "file-handling",
  title: "File Handling",

  groups: [
    {
      id: "basics",
      title: "File Basics",

      topics: [
        {
          id: "what-is-file",
          title: "What is File Handling?",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "open-function",
          title: "open()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "close-function",
          title: "close()",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "context-manager-file",
          title: "with Statement",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "modes",
      title: "File Modes",

      topics: [
        {
          id: "mode-r",
          title: "Read Mode (r)",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "mode-w",
          title: "Write Mode (w)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "mode-a",
          title: "Append Mode (a)",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "mode-x",
          title: "Exclusive Create Mode (x)",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "mode-rplus",
          title: "Read & Write Mode (r+)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "mode-wplus",
          title: "Write & Read Mode (w+)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "mode-aplus",
          title: "Append & Read Mode (a+)",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "binary-mode",
          title: "Binary Mode (b)",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "text-mode",
          title: "Text Mode (t)",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "reading",
      title: "Reading Files",

      topics: [
        {
          id: "read",
          title: "read()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "readline",
          title: "readline()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "readlines",
          title: "readlines()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iterate-file",
          title: "Iterating over File Objects",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "writing",
      title: "Writing Files",

      topics: [
        {
          id: "write",
          title: "write()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "writelines",
          title: "writelines()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "flush",
          title: "flush()",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "pointer",
      title: "File Pointer",

      topics: [
        {
          id: "tell",
          title: "tell()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "seek",
          title: "seek()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "cursor-position",
          title: "Cursor Position",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "serialization",
      title: "Serialization",

      topics: [
        {
          id: "json-module",
          title: "JSON Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pickle-module",
          title: "pickle Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "marshal-module",
          title: "marshal Module",
          estimatedMinutes: 20,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "structured-files",
      title: "Structured Files",

      topics: [
        {
          id: "csv-module",
          title: "CSV Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "configparser",
          title: "configparser",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "pathlib-files",
          title: "File Handling with pathlib",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced Topics",

      topics: [
        {
          id: "buffering",
          title: "File Buffering",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "encoding-files",
          title: "File Encoding",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "text-vs-binary",
          title: "Text Files vs Binary Files",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "file-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-with-open",
          title: "Why use with open()?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-read-vs-readline",
          title: "read() vs readline() vs readlines()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-seek-tell",
          title: "seek() vs tell()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-json-pickle",
          title: "JSON vs Pickle",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-csv",
          title: "CSV Module Interview Questions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }
  ]
};