import { Section } from "../../types/roadmap";

export const constraintsKeys: Section = {
  id: "constraints-keys",
  title: "Constraints & Keys",

  groups: [

    {
      id: "keys",
      title: "Database Keys",

      topics: [
        {
          id: "primary-key",
          title: "Primary Key",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "foreign-key",
          title: "Foreign Key",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "candidate-key",
          title: "Candidate Key",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "super-key",
          title: "Super Key",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "composite-key",
          title: "Composite Key",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "surrogate-key",
          title: "Surrogate Key",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "natural-key",
          title: "Natural Key",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "constraints",
      title: "Constraints",

      topics: [
        {
          id: "not-null",
          title: "NOT NULL",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "unique",
          title: "UNIQUE",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "check",
          title: "CHECK",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "default",
          title: "DEFAULT",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "referential-integrity",
      title: "Referential Integrity",

      topics: [
        {
          id: "cascade",
          title: "CASCADE",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "set-null",
          title: "SET NULL",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "restrict",
          title: "RESTRICT",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Design",

      topics: [
        {
          id: "choosing-primary-key",
          title: "Choosing Primary Keys",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "uuid-vs-int",
          title: "UUID vs Integer IDs",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "referential-design",
          title: "Referential Integrity Design",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "pk-vs-unique",
          title: "PRIMARY KEY vs UNIQUE",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "natural-vs-surrogate",
          title: "Natural Key vs Surrogate Key",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};