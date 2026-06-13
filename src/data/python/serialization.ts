import { Section } from "../../types/roadmap";

export const serialization: Section = {
  id: "serialization",
  title: "Serialization & Data Exchange",

  groups: [

    {
      id: "fundamentals",
      title: "Serialization Fundamentals",

      topics: [
        {
          id: "what-is-serialization",
          title: "What is Serialization?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "serialization-vs-deserialization",
          title: "Serialization vs Deserialization",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "binary-vs-text",
          title: "Binary vs Text Formats",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "common-formats",
      title: "Common Formats",

      topics: [
        {
          id: "json",
          title: "JSON",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "yaml",
          title: "YAML",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "toml",
          title: "TOML",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "python-serialization",
      title: "Python Serialization",

      topics: [
        {
          id: "pickle",
          title: "pickle",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "pickle-security",
          title: "Pickle Security Risks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "shelve",
          title: "shelve",
          estimatedMinutes: 25,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "high-performance",
      title: "High Performance Formats",

      topics: [
        {
          id: "protobuf",
          title: "Protocol Buffers",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "msgpack",
          title: "MessagePack",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "apache-arrow",
          title: "Apache Arrow",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Production Usage",

      topics: [
        {
          id: "api-serialization",
          title: "API Serialization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "database-serialization",
          title: "Database Serialization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "model-serialization",
          title: "ML Model Serialization",
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
          id: "iq-json-pickle",
          title: "JSON vs Pickle",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-protobuf",
          title: "Why Protocol Buffers?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-pickle-security",
          title: "Why is Pickle Unsafe?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};