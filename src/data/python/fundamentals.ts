import { Section } from "../../types/roadmap";

export const fundamentals: Section = {
  id: "fundamentals",
  title: "Python Fundamentals",

  groups: [
    {
      id: "introduction",
      title: "Introduction",

      topics: [
        {
          id: "what-is-python",
          title: "What is Python?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "history-of-python",
          title: "History of Python",
          estimatedMinutes: 15,
          interviewImportance: 2,
        },
        {
          id: "features-of-python",
          title: "Features of Python",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "applications-of-python",
          title: "Applications of Python",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "advantages-of-python",
          title: "Advantages of Python",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "limitations-of-python",
          title: "Limitations of Python",
          estimatedMinutes: 15,
          interviewImportance: 3,
        },
      ],
    },

    {
      id: "installation",
      title: "Installation & Environment",

      topics: [
        {
          id: "install-python",
          title: "Installing Python",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "python-interpreter",
          title: "Python Interpreter",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "python-vs-python3",
          title: "python vs python3",
          estimatedMinutes: 15,
          interviewImportance: 2,
        },
        {
          id: "pip",
          title: "pip",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "virtual-environment-overview",
          title: "Virtual Environment Overview",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
      ],
    },

    {
      id: "development",
      title: "Development Environment",

      topics: [
        {
          id: "idle",
          title: "IDLE",
          estimatedMinutes: 10,
          interviewImportance: 1,
        },
        {
          id: "vs-code",
          title: "VS Code",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "pycharm",
          title: "PyCharm",
          estimatedMinutes: 10,
          interviewImportance: 2,
        },
        {
          id: "jupyter",
          title: "Jupyter Notebook",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "google-colab",
          title: "Google Colab",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
      ],
    },

    {
      id: "execution",
      title: "Python Execution",

      topics: [
        {
          id: "interactive-mode",
          title: "Interactive Mode",
          estimatedMinutes: 15,
          interviewImportance: 2,
        },
        {
          id: "script-mode",
          title: "Script Mode",
          estimatedMinutes: 15,
          interviewImportance: 2,
        },
        {
          id: "execution-flow",
          title: "Execution Flow",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "source-code",
          title: "Source Code (.py)",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "bytecode",
          title: "Bytecode (.pyc)",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pycache",
          title: "__pycache__",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "pvm",
          title: "Python Virtual Machine",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
      ],
    },

    {
      id: "syntax",
      title: "Syntax & Basics",

      topics: [
        {
          id: "indentation",
          title: "Indentation",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "comments",
          title: "Comments",
          estimatedMinutes: 10,
          interviewImportance: 1,
        },
        {
          id: "keywords",
          title: "Keywords",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "identifiers",
          title: "Identifiers",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "variables",
          title: "Variables",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "assignment",
          title: "Assignment",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "multiple-assignment",
          title: "Multiple Assignment",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
      ],
    },

    {
      id: "typing",
      title: "Typing System",

      topics: [
        {
          id: "dynamic-typing",
          title: "Dynamic Typing",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "strong-typing",
          title: "Strong Typing",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "duck-typing",
          title: "Duck Typing",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
      ],
    },

    {
      id: "io",
      title: "Input & Output",

      topics: [
        {
          id: "input-function",
          title: "input()",
          estimatedMinutes: 15,
          interviewImportance: 3,
        },
        {
          id: "print-function",
          title: "print()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "sep",
          title: "sep Parameter",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "end",
          title: "end Parameter",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "escape-characters",
          title: "Escape Characters",
          estimatedMinutes: 15,
          interviewImportance: 3,
        },
      ],
    },

    {
      id: "conversion",
      title: "Type Conversion",

      topics: [
        {
          id: "implicit-conversion",
          title: "Implicit Type Conversion",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "explicit-conversion",
          title: "Explicit Type Conversion",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "int-function",
          title: "int()",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "float-function",
          title: "float()",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "str-function",
          title: "str()",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "bool-function",
          title: "bool()",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
      ],
    },
  ],
};