import { Section } from "../../types/roadmap";

export const controlflow: Section = {
  id: "control-flow",
  title: "Control Flow",

  groups: [
    {
      id: "decision-making",
      title: "Decision Making",

      topics: [
        {
          id: "if-statement",
          title: "if Statement",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "if-else",
          title: "if...else",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "if-elif-else",
          title: "if...elif...else",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "nested-if",
          title: "Nested if",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "ternary-operator",
          title: "Conditional (Ternary) Expression",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "loops",
      title: "Loops",

      topics: [
        {
          id: "while-loop",
          title: "while Loop",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "for-loop",
          title: "for Loop",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "nested-loops",
          title: "Nested Loops",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "infinite-loop",
          title: "Infinite Loops",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "loop-optimization",
          title: "Loop Optimization",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "loop-control",
      title: "Loop Control Statements",

      topics: [
        {
          id: "break",
          title: "break",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "continue",
          title: "continue",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "pass",
          title: "pass",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "loop-else",
          title: "Loop else",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "iteration",
      title: "Iteration",

      topics: [
        {
          id: "range-function",
          title: "range()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "enumerate-function",
          title: "enumerate()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "zip-function",
          title: "zip()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "reversed-function",
          title: "reversed()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "pattern-matching",
      title: "Pattern Matching",

      topics: [
        {
          id: "match-case",
          title: "match-case",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "guards",
          title: "Pattern Guards",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "wildcards",
          title: "Wildcard Pattern (_)",
          estimatedMinutes: 15,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "comprehension-preview",
      title: "Comprehension Preview",

      topics: [
        {
          id: "list-comprehension-intro",
          title: "Introduction to List Comprehension",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "nested-loops-comprehension",
          title: "Nested Loops vs Comprehension",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "control-flow-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-loop-else",
          title: "Explain loop else",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-break-vs-continue",
          title: "break vs continue",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-pass",
          title: "What is pass?",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "iq-for-vs-while",
          title: "for vs while",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-range",
          title: "How does range() work internally?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-enumerate",
          title: "enumerate() vs range()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-zip",
          title: "zip() Interview Questions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-match-case",
          title: "match-case vs if-elif",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    }
  ]
};