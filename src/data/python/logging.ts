import { Section } from "../../types/roadmap";

export const loggingSection: Section = {
  id: "logging",
  title: "Logging",

  groups: [

    {
      id: "fundamentals",
      title: "Logging Fundamentals",

      topics: [
        {
          id: "why-logging",
          title: "Why Logging Instead of print()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "logging-module",
          title: "logging Module",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "logging-levels",
          title: "Logging Levels",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "configuration",
      title: "Configuration",

      topics: [
        {
          id: "basic-config",
          title: "basicConfig()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "custom-loggers",
          title: "Custom Loggers",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "logger-hierarchy",
          title: "Logger Hierarchy",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "handlers",
      title: "Handlers",

      topics: [
        {
          id: "stream-handler",
          title: "StreamHandler",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "file-handler",
          title: "FileHandler",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "rotating-handler",
          title: "RotatingFileHandler",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "timed-rotating-handler",
          title: "TimedRotatingFileHandler",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "formatting",
      title: "Formatting",

      topics: [
        {
          id: "formatter",
          title: "Formatter",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "structured-logging",
          title: "Structured JSON Logging",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "contextual-logging",
          title: "Contextual Logging",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Logging",

      topics: [
        {
          id: "centralized-logging",
          title: "Centralized Logging",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "logging-best-practices",
          title: "Logging Best Practices",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "observability",
          title: "Logging & Observability",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-print-vs-logging",
          title: "print() vs logging",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-log-levels",
          title: "Choosing Log Levels",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-production-logging",
          title: "Production Logging Architecture",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};