import { Section } from "../../types/roadmap";

export const virtualEnvironments: Section = {
  id: "virtual-environments",
  title: "Virtual Environments & Dependency Management",

  groups: [

    {
      id: "fundamentals",
      title: "Virtual Environment Fundamentals",

      topics: [
        {
          id: "why-virtual-environments",
          title: "Why Virtual Environments Exist",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "dependency-isolation",
          title: "Dependency Isolation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "system-vs-virtual-python",
          title: "System Python vs Virtual Environment",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "venv",
      title: "venv",

      topics: [
        {
          id: "creating-venv",
          title: "Creating Virtual Environments",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "activating-venv",
          title: "Activation & Deactivation",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "venv-folder-structure",
          title: "Environment Directory Structure",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "dependency-management",
      title: "Dependency Management",

      topics: [
        {
          id: "pip-review",
          title: "pip Best Practices",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "freeze",
          title: "pip freeze",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "requirements-locking",
          title: "Locking Dependencies",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "modern-tools",
      title: "Modern Python Tools",

      topics: [
        {
          id: "poetry",
          title: "Poetry",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "uv",
          title: "uv",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pyenv",
          title: "pyenv",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pipx",
          title: "pipx",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Production Practices",

      topics: [
        {
          id: "reproducible-environments",
          title: "Reproducible Environments",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "docker-python-envs",
          title: "Virtual Environments inside Docker",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dependency-security",
          title: "Dependency Security",
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
          id: "iq-venv",
          title: "Why Use Virtual Environments?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-poetry-vs-pip",
          title: "Poetry vs pip",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-uv",
          title: "Why uv is Becoming Popular",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }

  ]
};