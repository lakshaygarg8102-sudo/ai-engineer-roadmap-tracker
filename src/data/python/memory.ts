import { Section } from "../../types/roadmap";

export const memory: Section = {
  id: "memory-model",
  title: "Variables & Memory Model",

  groups: [
    {
      id: "objects",
      title: "Objects & Variables",

      topics: [
        {
          id: "python-object",
          title: "What is a Python Object?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "variables-vs-objects",
          title: "Variables vs Objects",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "names-and-bindings",
          title: "Names & Bindings",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "assignment-binding",
          title: "Assignment Binding",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "object-identity",
          title: "Object Identity",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "id-function",
          title: "id()",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "type-function",
          title: "type()",
          estimatedMinutes: 10,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory",
      title: "Memory Management",

      topics: [
        {
          id: "memory-allocation",
          title: "Memory Allocation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "stack-vs-heap",
          title: "Stack vs Heap",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "reference-counting",
          title: "Reference Counting",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "garbage-collection",
          title: "Garbage Collection",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "gc-module",
          title: "gc Module",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "object-lifetime",
          title: "Object Lifetime",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "del-keyword",
          title: "del Keyword",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "references",
      title: "References",

      topics: [
        {
          id: "references",
          title: "References",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "aliasing",
          title: "Aliasing",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "pass-by-object-reference",
          title: "Pass by Object Reference",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "reference-cycles",
          title: "Reference Cycles",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "mutability",
      title: "Mutability",

      topics: [
        {
          id: "mutable-objects",
          title: "Mutable Objects",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "immutable-objects",
          title: "Immutable Objects",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "string-interning",
          title: "String Interning",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "integer-caching",
          title: "Integer Caching",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "memory-optimization",
          title: "Memory Optimization",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "copying",
      title: "Copying Objects",

      topics: [
        {
          id: "assignment-vs-copy",
          title: "Assignment vs Copy",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "copy-module",
          title: "copy Module",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "shallow-copy",
          title: "Shallow Copy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "deep-copy",
          title: "Deep Copy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-object",
          title: "What is a Python Object?",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "iq-is-vs-equals",
          title: "Difference between == and is",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-shallow-deep",
          title: "Shallow Copy vs Deep Copy",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-string-interning",
          title: "Explain String Interning",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-reference-counting",
          title: "Explain Reference Counting",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-gc",
          title: "Explain Garbage Collection",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    }
  ]
};