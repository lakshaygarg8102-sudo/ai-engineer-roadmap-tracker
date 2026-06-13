import { Section } from "../../types/roadmap";

export const dataclasses: Section = {
  id: "dataclasses",
  title: "Dataclasses",

  groups: [
    {
      id: "basics",
      title: "Dataclass Fundamentals",

      topics: [
        {
          id: "what-is-dataclass",
          title: "What is a Dataclass?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "why-dataclass",
          title: "Why Use Dataclasses?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "dataclass-decorator",
          title: "@dataclass",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "generated-methods",
          title: "Automatically Generated Methods",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "fields",
      title: "Fields",

      topics: [
        {
          id: "field-function",
          title: "field()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "default-values",
          title: "Default Values",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "default-factory",
          title: "default_factory",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "metadata",
          title: "metadata",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "repr-compare-init",
          title: "repr, compare & init Parameters",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-fields",
      title: "Advanced Fields",

      topics: [
        {
          id: "initvar",
          title: "InitVar",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "classvar-dataclass",
          title: "ClassVar",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "kw-only",
          title: "Keyword-only Fields",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "lifecycle",
      title: "Object Lifecycle",

      topics: [
        {
          id: "post-init",
          title: "__post_init__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "custom-initialization",
          title: "Custom Initialization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "immutability",
      title: "Immutability",

      topics: [
        {
          id: "frozen-dataclass",
          title: "Frozen Dataclasses",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "unsafe-hash",
          title: "unsafe_hash",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "hash-generation",
          title: "Hash Generation",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "comparison",
      title: "Comparison & Ordering",

      topics: [
        {
          id: "eq-option",
          title: "eq=True",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "order-option",
          title: "order=True",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "comparison-methods",
          title: "Generated Comparison Methods",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "inheritance",
      title: "Inheritance",

      topics: [
        {
          id: "dataclass-inheritance",
          title: "Dataclass Inheritance",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "multiple-inheritance-dataclass",
          title: "Multiple Inheritance",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "slots-dataclass",
          title: "slots=True",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "serialization",
      title: "Serialization",

      topics: [
        {
          id: "asdict",
          title: "asdict()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "astuple",
          title: "astuple()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "replace",
          title: "replace()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "ecosystem",
      title: "Dataclass Ecosystem",

      topics: [
        {
          id: "attrs-library",
          title: "attrs Library",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pydantic-vs-dataclass",
          title: "Pydantic vs Dataclass",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "namedtuple-vs-dataclass",
          title: "namedtuple vs Dataclass",
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
          id: "iq-dataclass",
          title: "Why Use Dataclasses?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-post-init",
          title: "__post_init__() Interview Questions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-default-factory",
          title: "default_factory Interview",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-frozen",
          title: "Frozen Dataclass",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-pydantic",
          title: "Dataclass vs Pydantic",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};