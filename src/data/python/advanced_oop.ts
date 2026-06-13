import { Section } from "../../types/roadmap";

export const advancedOOP: Section = {
  id: "advanced-oop",
  title: "Advanced Python OOP",

  groups: [
    {
      id: "abc",
      title: "Abstract Base Classes",

      topics: [
        {
          id: "what-is-abc",
          title: "What are Abstract Base Classes?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "abc-module",
          title: "abc Module",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "abstractmethod",
          title: "@abstractmethod",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "abstract-properties",
          title: "Abstract Properties",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "abstract-class-design",
          title: "Designing Abstract Classes",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "duck-typing",
      title: "Duck Typing",

      topics: [
        {
          id: "duck-typing",
          title: "Duck Typing",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "dynamic-polymorphism",
          title: "Dynamic Polymorphism",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "protocols-runtime",
          title: "Protocols vs Duck Typing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "descriptors",
      title: "Descriptors",

      topics: [
        {
          id: "descriptor-intro",
          title: "What are Descriptors?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "__get__",
          title: "__get__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "__set__",
          title: "__set__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "__delete__",
          title: "__delete__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "data-descriptor",
          title: "Data Descriptor",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "non-data-descriptor",
          title: "Non-Data Descriptor",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "slots",
      title: "__slots__",

      topics: [
        {
          id: "slots-introduction",
          title: "__slots__",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-optimization-slots",
          title: "Memory Optimization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "slots-limitations",
          title: "__slots__ Limitations",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "reflection",
      title: "Reflection & Introspection",

      topics: [
        {
          id: "getattr",
          title: "getattr()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "setattr",
          title: "setattr()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "hasattr",
          title: "hasattr()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "delattr",
          title: "delattr()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "dir-function",
          title: "dir()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "vars-function",
          title: "vars()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "inspect-module",
          title: "inspect Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "instance-checking",
      title: "Runtime Type Checking",

      topics: [
        {
          id: "isinstance",
          title: "isinstance()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "issubclass",
          title: "issubclass()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "type-function",
          title: "type()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "monkey-patching",
      title: "Monkey Patching",

      topics: [
        {
          id: "what-is-monkey-patching",
          title: "Monkey Patching",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "runtime-modification",
          title: "Runtime Modification",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "advanced-oop-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-descriptor",
          title: "Explain Descriptors",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-slots",
          title: "__slots__ Interview Questions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-abc",
          title: "ABC vs Interface",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-duck-typing",
          title: "Duck Typing Interview",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-reflection",
          title: "Reflection & Introspection",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }
  ]
};