import { Section } from "../../types/roadmap";

export const importSystem: Section = {
  id: "import-system",
  title: "Python Import System",

  groups: [

    {
      id: "basics",
      title: "Import Fundamentals",

      topics: [
        {
          id: "import-statement",
          title: "How import Works",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "module-search-path",
          title: "Module Search Path (sys.path)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "module-caching",
          title: "Module Caching (sys.modules)",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "import-once",
          title: "Why Modules Execute Only Once",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "packages",
      title: "Packages",

      topics: [
        {
          id: "packages",
          title: "Packages",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "init-py",
          title: "__init__.py",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "namespace-packages",
          title: "Namespace Packages",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "relative-imports",
          title: "Absolute vs Relative Imports",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced Import System",

      topics: [
        {
          id: "importlib",
          title: "importlib",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "finders-loaders",
          title: "Finders & Loaders",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "import-hooks",
          title: "Import Hooks",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "lazy-imports",
          title: "Lazy Imports",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "problems",
      title: "Common Problems",

      topics: [
        {
          id: "circular-import",
          title: "Circular Imports",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "reload-module",
          title: "Reloading Modules",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "plugin-architecture",
          title: "Plugin Architecture",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-import",
          title: "Explain Python Import System",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-sys-modules",
          title: "Role of sys.modules",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-circular",
          title: "Circular Imports",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};