import { Section } from "../../types/roadmap";

export const packaging: Section = {
  id: "packaging",
  title: "Packaging & Distribution",

  groups: [

    {
      id: "basics",
      title: "Packaging Fundamentals",

      topics: [
        {
          id: "why-packaging",
          title: "Why Packaging Matters",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "package-structure",
          title: "Python Package Structure",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pyproject",
          title: "pyproject.toml",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "build-system",
      title: "Build System",

      topics: [
        {
          id: "setuptools",
          title: "setuptools",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "wheel",
          title: "Wheel Format",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "python-build",
          title: "python -m build",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "publishing",
      title: "Publishing",

      topics: [
        {
          id: "twine",
          title: "Twine",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "pypi-publishing",
          title: "Publishing to PyPI",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "versioning",
          title: "Semantic Versioning",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "dependency-management",
      title: "Dependency Management",

      topics: [
        {
          id: "requirements",
          title: "requirements.txt",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "editable-install",
          title: "Editable Install (-e)",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "dependency-resolution",
          title: "Dependency Resolution",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "real-world",
      title: "Production Packaging",

      topics: [
        {
          id: "private-packages",
          title: "Private Package Repositories",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "console-scripts",
          title: "Console Scripts & Entry Points",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "library-design",
          title: "Designing Reusable Libraries",
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
          id: "iq-pyproject",
          title: "setup.py vs pyproject.toml",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-wheel",
          title: "Wheel vs Source Distribution",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-editable",
          title: "Editable Install",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }

  ]
};