import { Section } from "../../types/roadmap";

export const oops: Section = {
  id: "oops",
  title: "Object-Oriented Programming (OOP)",

  groups: [

    {
      id: "basics",
      title: "OOP Basics",

      topics: [
        {
          id: "what-is-oop",
          title: "What is Object-Oriented Programming?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "procedural-vs-oop",
          title: "Procedural vs OOP",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "class",
          title: "Class",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "object",
          title: "Object",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "class-vs-object",
          title: "Class vs Object",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "attributes",
      title: "Attributes",

      topics: [
        {
          id: "instance-attributes",
          title: "Instance Attributes",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "class-attributes",
          title: "Class Attributes",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "dynamic-attributes",
          title: "Dynamic Attributes",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "__dict__",
          title: "__dict__",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "constructors",
      title: "Constructors",

      topics: [
        {
          id: "__init__",
          title: "__init__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "self",
          title: "self",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "__new__",
          title: "__new__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "constructor-overloading",
          title: "Constructor Overloading",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "methods",
      title: "Methods",

      topics: [
        {
          id: "instance-method",
          title: "Instance Methods",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "class-method",
          title: "@classmethod",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "static-method",
          title: "@staticmethod",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "method-overloading",
          title: "Method Overloading",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "method-overriding",
          title: "Method Overriding",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "pillars",
      title: "Four Pillars of OOP",

      topics: [
        {
          id: "encapsulation",
          title: "Encapsulation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "abstraction",
          title: "Abstraction",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "inheritance",
          title: "Inheritance",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "polymorphism",
          title: "Polymorphism",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "inheritance-types",
      title: "Inheritance",

      topics: [
        {
          id: "single-inheritance",
          title: "Single Inheritance",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "multiple-inheritance",
          title: "Multiple Inheritance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "multilevel-inheritance",
          title: "Multilevel Inheritance",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "hierarchical-inheritance",
          title: "Hierarchical Inheritance",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "hybrid-inheritance",
          title: "Hybrid Inheritance",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "super",
          title: "super()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "mro",
          title: "Method Resolution Order (MRO)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "magic-methods",
      title: "Magic (Dunder) Methods",

      topics: [
        {
          id: "__str__",
          title: "__str__()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "__repr__",
          title: "__repr__()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "__len__",
          title: "__len__()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "__eq__",
          title: "__eq__()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "__hash__",
          title: "__hash__()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "__call__",
          title: "__call__()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "properties",
      title: "Properties",

      topics: [
        {
          id: "property-decorator",
          title: "@property",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "getter",
          title: "Getter",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "setter",
          title: "Setter",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "deleter",
          title: "Deleter",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "composition",
      title: "Composition",

      topics: [
        {
          id: "composition",
          title: "Composition",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "aggregation",
          title: "Aggregation",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "composition-vs-inheritance",
          title: "Composition vs Inheritance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "solid",
      title: "SOLID Principles",

      topics: [
        {
          id: "solid-overview",
          title: "SOLID Overview",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "srp",
          title: "Single Responsibility Principle",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "ocp",
          title: "Open Closed Principle",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "lsp",
          title: "Liskov Substitution Principle",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "isp",
          title: "Interface Segregation Principle",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "dip",
          title: "Dependency Inversion Principle",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "oops-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-class-vs-object",
          title: "Class vs Object",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-init-vs-new",
          title: "__init__() vs __new__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-static-vs-class",
          title: "@staticmethod vs @classmethod",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-super",
          title: "How super() Works",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-mro",
          title: "Explain MRO",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-encapsulation",
          title: "Explain Encapsulation",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-polymorphism",
          title: "Explain Polymorphism",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-composition",
          title: "Composition vs Inheritance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};