import { Section } from "../../types/roadmap";

export const designPatterns: Section = {
  id: "design-patterns",
  title: "Design Patterns in Python",

  groups: [

    {
      id: "creational",
      title: "Creational Patterns",

      topics: [
        {
          id: "singleton",
          title: "Singleton",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "factory",
          title: "Factory",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "abstract-factory",
          title: "Abstract Factory",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "builder",
          title: "Builder",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "structural",
      title: "Structural Patterns",

      topics: [
        {
          id: "adapter",
          title: "Adapter",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "facade",
          title: "Facade",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "proxy",
          title: "Proxy",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "decorator-pattern",
          title: "Decorator Pattern",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "behavioral",
      title: "Behavioral Patterns",

      topics: [
        {
          id: "observer",
          title: "Observer",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "strategy",
          title: "Strategy",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "command",
          title: "Command",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "template-method",
          title: "Template Method",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "python-specific",
      title: "Pythonic Patterns",

      topics: [
        {
          id: "dependency-injection",
          title: "Dependency Injection",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "repository-pattern",
          title: "Repository Pattern",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "plugin-pattern",
          title: "Plugin Architecture",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "real-world",
      title: "Production Usage",

      topics: [
        {
          id: "patterns-fastapi",
          title: "Patterns in FastAPI",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "patterns-django",
          title: "Patterns in Django",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "patterns-ai",
          title: "Patterns in AI Systems",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-factory",
          title: "Factory vs Builder",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-singleton",
          title: "Singleton in Python",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-strategy",
          title: "Strategy Pattern",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};