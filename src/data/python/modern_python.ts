import { Section } from "../../types/roadmap";

export const modernPython: Section = {
  id: "modern-python",
  title: "Modern Python (3.10 - 3.13)",

  groups: [

    {
      id: "language-features",
      title: "Modern Language Features",

      topics: [
        {
          id: "match-case",
          title: "Structural Pattern Matching (match/case)",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "pattern-guards",
          title: "Pattern Guards",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sequence-patterns",
          title: "Sequence & Mapping Patterns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "class-patterns",
          title: "Class Patterns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "or-patterns",
          title: "OR Patterns & Wildcards",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "exception-groups",
      title: "Modern Exception Handling",

      topics: [
        {
          id: "exception-group",
          title: "ExceptionGroup",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "except-star",
          title: "except*",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "parallel-exceptions",
          title: "Handling Parallel Exceptions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "async-improvements",
      title: "Modern AsyncIO",

      topics: [
        {
          id: "taskgroup",
          title: "TaskGroup",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "asyncio-timeout",
          title: "asyncio.timeout()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "structured-concurrency",
          title: "Structured Concurrency",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "typing-improvements",
      title: "Modern Typing",

      topics: [
        {
          id: "typing-extensions",
          title: "typing_extensions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pep-695",
          title: "PEP 695 Generic Syntax",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "modern-type-alias",
          title: "Modern Type Aliases",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "modern-standard-library",
      title: "New Standard Library",

      topics: [
        {
          id: "tomllib",
          title: "tomllib",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "zoneinfo",
          title: "zoneinfo",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "graphlib",
          title: "graphlib",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "importlib-metadata",
          title: "importlib.metadata",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "advanced-runtime",
      title: "Advanced Runtime Tools",

      topics: [
        {
          id: "contextvars",
          title: "contextvars",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "exitstack",
          title: "ExitStack & AsyncExitStack",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "faulthandler",
          title: "faulthandler",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "signal-module",
          title: "signal Module",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "resource-module",
          title: "resource Module",
          estimatedMinutes: 25,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "production",
      title: "Production Python",

      topics: [
        {
          id: "modern-project-template",
          title: "Modern Python Project Template",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "python-313-features",
          title: "Python 3.13 Improvements",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "migration-guide",
          title: "Migrating Legacy Code",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-match-case",
          title: "match/case vs if/elif",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-taskgroup",
          title: "TaskGroup vs gather()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-contextvars",
          title: "contextvars vs threading.local",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};