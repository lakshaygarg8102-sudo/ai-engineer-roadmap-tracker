import { Section } from "../../types/roadmap";

export const contextManagers: Section = {
  id: "context-managers",
  title: "Context Managers",

  groups: [
    {
      id: "basics",
      title: "Context Manager Basics",

      topics: [
        {
          id: "what-is-context-manager",
          title: "What is a Context Manager?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "why-context-manager",
          title: "Why Use Context Managers?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "with-statement-internals",
          title: "How the with Statement Works",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "resource-management",
          title: "Automatic Resource Management",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "protocol",
      title: "Context Manager Protocol",

      topics: [
        {
          id: "__enter__",
          title: "__enter__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "__exit__",
          title: "__exit__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "exception-handling-context",
          title: "Exception Handling in Context Managers",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "return-value-enter",
          title: "Return Value of __enter__()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "custom-context",
      title: "Custom Context Managers",

      topics: [
        {
          id: "custom-context-manager",
          title: "Creating Custom Context Managers",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "class-based-context-manager",
          title: "Class-based Context Managers",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "reusable-context-manager",
          title: "Reusable Context Managers",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "contextlib",
      title: "contextlib Module",

      topics: [
        {
          id: "contextmanager-decorator",
          title: "@contextmanager",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "closing",
          title: "closing()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "suppress",
          title: "suppress()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "nullcontext",
          title: "nullcontext()",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "redirect-stdout",
          title: "redirect_stdout()",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "redirect-stderr",
          title: "redirect_stderr()",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "exitstack",
          title: "ExitStack",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "async-context",
      title: "Async Context Managers",

      topics: [
        {
          id: "async-with",
          title: "async with",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "__aenter__",
          title: "__aenter__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "__aexit__",
          title: "__aexit__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "real-world",
      title: "Real World Examples",

      topics: [
        {
          id: "file-context",
          title: "File Context Managers",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "database-context",
          title: "Database Connections",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "lock-context",
          title: "Thread Locks",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "timer-context",
          title: "Execution Timer",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "transaction-context",
          title: "Database Transactions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "context-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-with-statement",
          title: "How with Statement Works Internally",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-enter-exit",
          title: "__enter__() vs __exit__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-contextmanager",
          title: "Class-based vs @contextmanager",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-exitstack",
          title: "When to Use ExitStack",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-context-manager-benefits",
          title: "Benefits of Context Managers",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }
  ]
};