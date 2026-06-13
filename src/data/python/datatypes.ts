import { Section } from "../../types/roadmap";

export const datatypes: Section = {
  id: "data-types",
  title: "Data Types",

  groups: [
    {
      id: "overview",
      title: "Overview",

      topics: [
        {
          id: "what-is-datatype",
          title: "What is a Data Type?",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "dynamic-types",
          title: "Dynamic Typing Revisited",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "built-in-types",
          title: "Built-in Data Types",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "type-checking",
          title: "Type Checking",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "numeric",
      title: "Numeric Types",

      topics: [
        {
          id: "int",
          title: "int",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "float",
          title: "float",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "complex",
          title: "complex",
          estimatedMinutes: 15,
          interviewImportance: 3,
        },
        {
          id: "bool",
          title: "bool",
          estimatedMinutes: 15,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sequence",
      title: "Sequence Types",

      topics: [
        {
          id: "string",
          title: "str",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "list",
          title: "list",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "tuple",
          title: "tuple",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "range",
          title: "range",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "mapping",
      title: "Mapping Type",

      topics: [
        {
          id: "dictionary",
          title: "dict",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "set-types",
      title: "Set Types",

      topics: [
        {
          id: "set",
          title: "set",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "frozenset",
          title: "frozenset",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "binary",
      title: "Binary Types",

      topics: [
        {
          id: "bytes",
          title: "bytes",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "bytearray",
          title: "bytearray",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "memoryview",
          title: "memoryview",
          estimatedMinutes: 20,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "special",
      title: "Special Types",

      topics: [
        {
          id: "none",
          title: "None",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "ellipsis",
          title: "Ellipsis (...)",
          estimatedMinutes: 10,
          interviewImportance: 2,
        },
        {
          id: "notimplemented",
          title: "NotImplemented",
          estimatedMinutes: 15,
          interviewImportance: 2,
        }
      ]
    },

    {
      id: "properties",
      title: "Important Properties",

      topics: [
        {
          id: "mutable-vs-immutable",
          title: "Mutable vs Immutable",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "hashable",
          title: "Hashable Objects",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "ordered-vs-unordered",
          title: "Ordered vs Unordered",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "iterable",
          title: "Iterable Objects",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-list-vs-tuple",
          title: "List vs Tuple",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-set-vs-list",
          title: "Set vs List",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-dict-internals",
          title: "How Dictionary Works Internally",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-hashable",
          title: "What is Hashability?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-none",
          title: "Difference between None and False",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    }
  ]
};