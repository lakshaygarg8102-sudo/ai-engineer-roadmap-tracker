import { Section } from "../../types/roadmap";

export const modules: Section = {
  id: "modules",
  title: "Modules & Packages",

  groups: [
    {
      id: "module-basics",
      title: "Module Basics",

      topics: [
        {
          id: "what-is-module",
          title: "What is a Module?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "creating-module",
          title: "Creating Modules",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "import-module",
          title: "import Statement",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "from-import",
          title: "from ... import ...",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "import-alias",
          title: "import ... as",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "packages",
      title: "Packages",

      topics: [
        {
          id: "what-is-package",
          title: "What is a Package?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "__init__",
          title: "__init__.py",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "namespace-packages",
          title: "Namespace Packages",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "package-structure",
          title: "Package Structure",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "imports",
      title: "Import System",

      topics: [
        {
          id: "absolute-import",
          title: "Absolute Imports",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "relative-import",
          title: "Relative Imports",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "circular-import",
          title: "Circular Imports",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "sys-path",
          title: "sys.path",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "pythonpath",
          title: "PYTHONPATH",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "special-variables",
      title: "Special Variables",

      topics: [
        {
          id: "__name__",
          title: "__name__",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "__main__",
          title: "__main__",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "__file__",
          title: "__file__",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "__package__",
          title: "__package__",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "standard-library",
      title: "Standard Library",

      topics: [
        {
          id: "math-module",
          title: "math",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "random-module",
          title: "random",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "os-module",
          title: "os",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "sys-module",
          title: "sys",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pathlib-module",
          title: "pathlib",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "module-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-module-package",
          title: "Module vs Package",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-name-main",
          title: "Explain __name__ == '__main__'",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-relative-import",
          title: "Relative vs Absolute Imports",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-circular-import",
          title: "How to Solve Circular Imports",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-sys-path",
          title: "How Python Finds Modules",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};