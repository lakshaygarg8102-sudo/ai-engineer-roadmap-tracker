import { Section } from "../../types/roadmap";

export const functions: Section = {
  id: "functions",
  title: "Functions",

  groups: [

    {
      id: "basics",
      title: "Function Basics",

      topics: [
        {
          id: "function-definition",
          title: "Defining Functions",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "calling-functions",
          title: "Calling Functions",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "return-statement",
          title: "return Statement",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "multiple-return-values",
          title: "Multiple Return Values",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "function-object",
          title: "Functions are First-Class Objects",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "parameters",
      title: "Parameters & Arguments",

      topics: [
        {
          id: "parameters",
          title: "Parameters",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "arguments",
          title: "Arguments",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "default-arguments",
          title: "Default Arguments",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "keyword-arguments",
          title: "Keyword Arguments",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "positional-arguments",
          title: "Positional Arguments",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "keyword-only",
          title: "Keyword-only Arguments",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "positional-only",
          title: "Positional-only Arguments",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "packing",
      title: "Packing & Unpacking",

      topics: [
        {
          id: "args",
          title: "*args",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "kwargs",
          title: "**kwargs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "packing",
          title: "Packing",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "unpacking",
          title: "Unpacking",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "scope",
      title: "Variable Scope",

      topics: [
        {
          id: "scope",
          title: "Scope",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "namespace",
          title: "Namespaces",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "legb",
          title: "LEGB Rule",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "global",
          title: "global",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "nonlocal",
          title: "nonlocal",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-functions",
      title: "Advanced Functions",

      topics: [
        {
          id: "lambda",
          title: "Lambda Functions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "nested-functions",
          title: "Nested Functions",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "closures",
          title: "Closures",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "higher-order-functions",
          title: "Higher Order Functions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "recursion",
          title: "Recursion",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "functional-programming",
      title: "Functional Programming",

      topics: [
        {
          id: "map",
          title: "map()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "filter",
          title: "filter()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "reduce",
          title: "reduce()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "zip",
          title: "zip()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "enumerate",
          title: "enumerate()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "any",
          title: "any()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "all",
          title: "all()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "iterators",
      title: "Iterator Helpers",

      topics: [
        {
          id: "iter",
          title: "iter()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "next",
          title: "next()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "callable",
          title: "callable()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "documentation",
      title: "Documentation & Typing",

      topics: [
        {
          id: "docstrings",
          title: "Docstrings",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "annotations",
          title: "Function Annotations",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "type-hints",
          title: "Type Hints",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-args-vs-kwargs",
          title: "*args vs **kwargs",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-global-nonlocal",
          title: "global vs nonlocal",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-legb",
          title: "Explain LEGB Rule",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-lambda",
          title: "Lambda vs Normal Function",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-map-filter",
          title: "map() vs filter()",
          estimatedMinutes: 25,
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
          id: "iq-recursion",
          title: "Recursion vs Iteration",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }

  ]
};