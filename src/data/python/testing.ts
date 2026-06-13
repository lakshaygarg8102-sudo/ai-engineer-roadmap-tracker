import { Section } from "../../types/roadmap";

export const testing: Section = {
  id: "testing",
  title: "Testing",

  groups: [

    {
      id: "fundamentals",
      title: "Testing Fundamentals",

      topics: [
        {
          id: "why-testing",
          title: "Why Testing Matters",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "testing-pyramid",
          title: "Testing Pyramid",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "types-of-testing",
          title: "Unit, Integration & End-to-End Testing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "unittest",
      title: "unittest",

      topics: [
        {
          id: "unittest-framework",
          title: "unittest Framework",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "testcase",
          title: "TestCase",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "assertions",
          title: "Assertions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "setup-teardown",
          title: "setUp() & tearDown()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "pytest",
      title: "pytest",

      topics: [
        {
          id: "pytest-basics",
          title: "pytest Fundamentals",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "fixtures",
          title: "Fixtures",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "fixture-scopes",
          title: "Fixture Scopes",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "parameterization",
          title: "Parameterized Tests",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "mocking",
      title: "Mocking",

      topics: [
        {
          id: "mock",
          title: "unittest.mock",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "patch",
          title: "patch()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "mock-side-effects",
          title: "Mock Side Effects",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "monkeypatch",
          title: "pytest Monkeypatch",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "coverage",
      title: "Coverage",

      topics: [
        {
          id: "coverage-py",
          title: "coverage.py",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "branch-coverage",
          title: "Branch Coverage",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "code-quality",
          title: "Code Quality Metrics",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production-testing",
      title: "Production Testing",

      topics: [
        {
          id: "integration-testing",
          title: "Integration Testing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "api-testing",
          title: "API Testing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "database-testing",
          title: "Database Testing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "testing-ai-pipelines",
          title: "Testing AI/ML Pipelines",
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
          id: "iq-pytest",
          title: "Why pytest Over unittest?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-fixtures",
          title: "Explain Fixtures",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-mocking",
          title: "Mocking External Services",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};