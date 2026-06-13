import { Section } from "../../types/roadmap";

export const exceptions: Section = {
  id: "exceptions",
  title: "Exception Handling",

  groups: [
    {
      id: "basics",
      title: "Exception Basics",

      topics: [
        {
          id: "what-is-exception",
          title: "What is an Exception?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "syntax-errors-vs-exceptions",
          title: "Syntax Errors vs Exceptions",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "exception-hierarchy",
          title: "Python Exception Hierarchy",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "common-builtin-exceptions",
          title: "Common Built-in Exceptions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "try-except",
      title: "try / except",

      topics: [
        {
          id: "try-block",
          title: "try Block",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "except-block",
          title: "except Block",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "multiple-except",
          title: "Multiple except Blocks",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "catch-multiple",
          title: "Catching Multiple Exceptions",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "generic-exception",
          title: "Using Exception Class",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "else-finally",
      title: "else & finally",

      topics: [
        {
          id: "else-block",
          title: "else Block",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "finally-block",
          title: "finally Block",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "cleanup",
          title: "Resource Cleanup",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "raising",
      title: "Raising Exceptions",

      topics: [
        {
          id: "raise-keyword",
          title: "raise Keyword",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "raise-custom",
          title: "Raise Custom Exceptions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "exception-chaining",
          title: "Exception Chaining",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "custom",
      title: "Custom Exceptions",

      topics: [
        {
          id: "custom-exception-class",
          title: "Creating Custom Exception Classes",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "inherit-exception",
          title: "Inheriting from Exception",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "assertions",
      title: "Assertions",

      topics: [
        {
          id: "assert-statement",
          title: "assert Statement",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "assertion-error",
          title: "AssertionError",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "best-practices",
      title: "Best Practices",

      topics: [
        {
          id: "specific-exceptions",
          title: "Catch Specific Exceptions",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "avoid-bare-except",
          title: "Avoid Bare except",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "logging-exceptions",
          title: "Logging Exceptions",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "exceptions-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-try-except-else-finally",
          title: "Explain try-except-else-finally",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-raise",
          title: "raise vs print",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-custom-exception",
          title: "Custom Exceptions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-assert",
          title: "assert vs Exception",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-finally",
          title: "Will finally Always Execute?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }
  ]
};