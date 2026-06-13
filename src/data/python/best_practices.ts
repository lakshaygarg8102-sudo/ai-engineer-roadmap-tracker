import { Section } from "../../types/roadmap";

export const bestPractices: Section = {
  id: "best-practices",
  title: "Best Practices & Production Python",

  groups: [

    {
      id: "clean-code",
      title: "Clean Python",

      topics: [
        {
          id: "pep8",
          title: "PEP 8",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pep20",
          title: "PEP 20 - The Zen of Python",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "readable-code",
          title: "Writing Readable Python",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "type-hints-best-practices",
          title: "Type Hint Best Practices",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "project-structure",
      title: "Project Organization",

      topics: [
        {
          id: "project-layout",
          title: "Python Project Structure",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "config-management",
          title: "Configuration Management",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "environment-management",
          title: "Environment Variables",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "dependency-organization",
          title: "Dependency Organization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Engineering",

      topics: [
        {
          id: "error-handling-production",
          title: "Production Error Handling",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "observability-review",
          title: "Logging, Metrics & Tracing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "configuration-patterns",
          title: "Configuration Patterns",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "deployment-readiness",
          title: "Production Readiness Checklist",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "tooling",
      title: "Developer Tooling",

      topics: [
        {
          id: "black",
          title: "Black",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "ruff",
          title: "Ruff",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "mypy-review",
          title: "mypy",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pre-commit",
          title: "pre-commit",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Senior Python Interview",

      topics: [
        {
          id: "senior-python-checklist",
          title: "Senior Python Checklist",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "faang-python-questions",
          title: "FAANG Python Interview Questions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "ai-platform-python",
          title: "Python for AI Platform Engineers",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};