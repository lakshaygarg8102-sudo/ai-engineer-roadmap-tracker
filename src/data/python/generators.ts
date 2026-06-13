import { Section } from "../../types/roadmap";

export const generators: Section = {
  id: "generators",
  title: "Generators",

  groups: [
    {
      id: "generator-basics",
      title: "Generator Basics",

      topics: [
        {
          id: "what-is-generator",
          title: "What is a Generator?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "generator-function",
          title: "Generator Function",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "yield-keyword",
          title: "yield Keyword",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "generator-object",
          title: "Generator Object",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "generator-lifecycle",
      title: "Generator Lifecycle",

      topics: [
        {
          id: "generator-state",
          title: "Generator States",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "generator-execution",
          title: "Execution Flow",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "yield-resume",
          title: "Yield & Resume",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "generator-completion",
          title: "Generator Completion",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "generator-methods",
      title: "Generator Methods",

      topics: [
        {
          id: "generator-next",
          title: "next()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "generator-send",
          title: "send()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "generator-throw",
          title: "throw()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "generator-close",
          title: "close()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "yield-from",
      title: "yield from",

      topics: [
        {
          id: "yield-from-introduction",
          title: "yield from",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "delegating-generators",
          title: "Delegating Generators",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "generator-expressions",
      title: "Generator Expressions",

      topics: [
        {
          id: "generator-expression",
          title: "Generator Expressions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "list-vs-generator",
          title: "List Comprehension vs Generator Expression",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "coroutines",
      title: "Generator Coroutines",

      topics: [
        {
          id: "generator-coroutine",
          title: "Generator-based Coroutines",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "consumer-producer",
          title: "Producer Consumer Pattern",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "memory-efficient-generators",
          title: "Memory Efficient Processing",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "lazy-processing",
          title: "Lazy Processing",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "stream-processing",
          title: "Stream Processing",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "comparison",
      title: "Comparisons",

      topics: [
        {
          id: "iterator-vs-generator",
          title: "Iterator vs Generator",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "function-vs-generator",
          title: "Normal Function vs Generator",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "return-vs-yield",
          title: "return vs yield",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "generator-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-yield",
          title: "Explain yield",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-generator-memory",
          title: "Why are Generators Memory Efficient?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-generator-expression",
          title: "Generator Expression vs List Comprehension",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-send",
          title: "What does send() do?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-yield-from",
          title: "Explain yield from",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-generator-lifecycle",
          title: "Generator Lifecycle",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }
  ]
};