import { Section } from "../../types/roadmap";

export const metaclasses: Section = {
  id: "metaclasses",
  title: "Metaclasses & Dynamic Class Creation",

  groups: [
    {
      id: "class-creation",
      title: "How Python Creates Classes",

      topics: [
        {
          id: "everything-is-object",
          title: "Everything is an Object",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "classes-are-objects",
          title: "Classes are Objects",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "who-creates-class",
          title: "Who Creates a Class?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "type-builtin",
          title: "type() Built-in",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "dynamic-class",
      title: "Dynamic Class Creation",

      topics: [
        {
          id: "dynamic-class-creation",
          title: "Creating Classes Dynamically",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "type-three-arguments",
          title: "type(name, bases, dict)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "runtime-class-generation",
          title: "Runtime Class Generation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "metaclass-basics",
      title: "Metaclass Basics",

      topics: [
        {
          id: "what-is-metaclass",
          title: "What is a Metaclass?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "metaclass-vs-class",
          title: "Class vs Metaclass",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "metaclass-lifecycle",
          title: "Metaclass Lifecycle",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "metaclass-methods",
      title: "Metaclass Methods",

      topics: [
        {
          id: "prepare",
          title: "__prepare__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "meta-new",
          title: "__new__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "meta-init",
          title: "__init__()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "meta-call",
          title: "__call__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "custom-metaclasses",
      title: "Custom Metaclasses",

      topics: [
        {
          id: "custom-metaclass",
          title: "Creating Custom Metaclasses",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "validation-metaclass",
          title: "Validation Using Metaclasses",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "registration-metaclass",
          title: "Class Registration",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "framework-usage",
      title: "Framework Usage",

      topics: [
        {
          id: "django-metaclass",
          title: "Metaclasses in Django",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "sqlalchemy-metaclass",
          title: "Metaclasses in SQLAlchemy",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pydantic-metaclass",
          title: "Metaclasses in Pydantic",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "orm-internals",
          title: "ORM Internals",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "design-patterns",
      title: "Design Patterns",

      topics: [
        {
          id: "singleton-metaclass",
          title: "Singleton using Metaclass",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "plugin-system",
          title: "Plugin Registration",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "factory-metaclass",
          title: "Factory Registration",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "metaclass-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-type",
          title: "Explain type()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-metaclass",
          title: "Explain Metaclasses",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-meta-call",
          title: "Object Creation Flow",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-frameworks",
          title: "Why Frameworks Use Metaclasses",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};