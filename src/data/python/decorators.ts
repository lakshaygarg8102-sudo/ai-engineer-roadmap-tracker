import { Section } from "../../types/roadmap";

export const decorators: Section = {
  id: "decorators",
  title: "Decorators",

  groups: [
    {
      id: "basics",
      title: "Decorator Fundamentals",

      topics: [
        {
          id: "what-is-decorator",
          title: "What is a Decorator?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "why-decorators",
          title: "Why Use Decorators?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "first-class-functions-review",
          title: "First-Class Functions Review",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "functions-as-arguments",
          title: "Passing Functions as Arguments",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "returning-functions",
          title: "Returning Functions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "closures",
      title: "Closures Review",

      topics: [
        {
          id: "closure-review",
          title: "Closures",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "lexical-scoping",
          title: "Lexical Scoping",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "closure-state",
          title: "Maintaining State with Closures",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "building-decorators",
      title: "Building Decorators",

      topics: [
        {
          id: "simple-decorator",
          title: "Simple Decorator",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "wrapper-function",
          title: "Wrapper Function",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "decorator-syntax",
          title: "@decorator Syntax",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "multiple-decorators",
          title: "Multiple Decorators",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-decorators",
      title: "Advanced Decorators",

      topics: [
        {
          id: "decorators-with-arguments",
          title: "Decorators with Arguments",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "parameterized-decorators",
          title: "Parameterized Decorators",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "decorator-factory",
          title: "Decorator Factory",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "class-decorators",
          title: "Class Decorators",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "builtin-decorators",
      title: "Built-in Decorators",

      topics: [
        {
          id: "property-review",
          title: "@property",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "classmethod-review",
          title: "@classmethod",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "staticmethod-review",
          title: "@staticmethod",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "functools-wraps",
          title: "@functools.wraps",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "lru-cache",
          title: "@functools.lru_cache",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cached-property",
          title: "@cached_property",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "real-world",
      title: "Real World Usage",

      topics: [
        {
          id: "logging-decorator",
          title: "Logging Decorators",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "timing-decorator",
          title: "Execution Time Decorator",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "authentication-decorator",
          title: "Authentication Decorators",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "retry-decorator",
          title: "Retry Decorator",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memoization",
          title: "Memoization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "decorator-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-what-is-decorator",
          title: "Explain Decorators",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-closure-decorator",
          title: "How Closures Enable Decorators",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-wraps",
          title: "Why Use functools.wraps?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-lru-cache",
          title: "How lru_cache Works",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-multiple-decorators",
          title: "Decorator Execution Order",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }
  ]
};