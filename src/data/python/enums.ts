import { Section } from "../../types/roadmap";

export const enums: Section = {
  id: "enums",
  title: "Enumerations (Enum)",

  groups: [
    {
      id: "basics",
      title: "Enum Fundamentals",

      topics: [
        {
          id: "what-is-enum",
          title: "What is an Enum?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "why-use-enum",
          title: "Why Use Enums?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "enum-module",
          title: "enum Module",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "creating-enums",
          title: "Creating Enums",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "enum-members",
      title: "Members & Values",

      topics: [
        {
          id: "enum-members",
          title: "Enum Members",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "member-name",
          title: "name Attribute",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "member-value",
          title: "value Attribute",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "iterating-enums",
          title: "Iterating Over Enums",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "enum-types",
      title: "Enum Types",

      topics: [
        {
          id: "intenum",
          title: "IntEnum",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "strenum",
          title: "StrEnum (Python 3.11+)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "flag",
          title: "Flag",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "intflag",
          title: "IntFlag",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "auto",
          title: "auto()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-enums",
      title: "Advanced Enum Features",

      topics: [
        {
          id: "custom-values",
          title: "Custom Values",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "enum-methods",
          title: "Methods Inside Enums",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "enum-properties",
          title: "Properties",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "functional-api",
          title: "Functional API",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "comparison",
      title: "Comparison",

      topics: [
        {
          id: "enum-vs-constants",
          title: "Enum vs Constants",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "enum-vs-literal",
          title: "Enum vs Literal",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "enum-vs-string",
          title: "Enum vs String",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "real-world",
      title: "Real World Usage",

      topics: [
        {
          id: "api-status",
          title: "API Status Codes",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "permissions",
          title: "Permissions using Flags",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "configuration",
          title: "Configuration Enums",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "enum-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-enum",
          title: "Explain Enum",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-intenum",
          title: "Enum vs IntEnum",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-flag",
          title: "Flag vs IntFlag",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-auto",
          title: "How auto() Works",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }
  ]
};