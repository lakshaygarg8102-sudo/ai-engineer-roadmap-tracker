import { Section } from "../../types/roadmap";

export const pythonInternals: Section = {
  id: "python-internals",
  title: "CPython Internals",

  groups: [

    {
      id: "architecture",
      title: "CPython Architecture",

      topics: [
        {
          id: "what-is-cpython",
          title: "What is CPython?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "python-implementations",
          title: "CPython vs PyPy vs Jython vs IronPython",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cpython-source-tree",
          title: "CPython Source Code Structure",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cpython-components",
          title: "Major Components of CPython",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "execution-pipeline",
          title: "Complete Execution Pipeline",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "compilation",
      title: "Compilation Process",

      topics: [
        {
          id: "lexical-analysis",
          title: "Lexical Analysis",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "tokenizer",
          title: "Tokenizer",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "tokens",
          title: "Python Tokens",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "parser",
          title: "Parser",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "grammar",
          title: "Python Grammar",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "parse-tree",
          title: "Parse Tree",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ast",
      title: "Abstract Syntax Tree",

      topics: [
        {
          id: "what-is-ast",
          title: "What is AST?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "ast-module",
          title: "ast Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "ast-nodes",
          title: "AST Nodes",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "walking-ast",
          title: "Walking an AST",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "transforming-ast",
          title: "Transforming AST",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "compile-function",
          title: "compile()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "compiler",
      title: "Python Compiler",

      topics: [
        {
          id: "symbol-table",
          title: "Symbol Table",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "scope-analysis",
          title: "Scope Analysis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "bytecode-generation",
          title: "Bytecode Generation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "code-object",
          title: "Code Objects",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "runtime",
      title: "Runtime System",

      topics: [
        {
          id: "python-virtual-machine",
          title: "Python Virtual Machine (PVM)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "evaluation-loop",
          title: "Evaluation Loop",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "frame-object",
          title: "Frame Objects",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "call-stack",
          title: "Python Call Stack",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "execution-frame",
          title: "Execution Frames",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory",
      title: "Object Internals",

      topics: [
        {
          id: "pyobject-layout",
          title: "PyObject Layout",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "pytypeobject",
          title: "PyTypeObject",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "reference-count-field",
          title: "Reference Count Field",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "object-header",
          title: "Object Header",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "import-system",
      title: "Import Internals",

      topics: [
        {
          id: "bootstrap-import",
          title: "Import Bootstrap Process",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "module-loader",
          title: "Module Loader",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "module-finder",
          title: "Module Finder",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "module-cache",
          title: "Module Cache",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "execution-overhead",
          title: "Execution Overhead",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "why-python-slower",
          title: "Why Python is Slower than C",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "interpreter-optimizations",
          title: "Interpreter Optimizations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "frameworks",
      title: "Framework Internals",

      topics: [
        {
          id: "django-internals",
          title: "How Django Uses CPython",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "numpy-c-api",
          title: "NumPy C API",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pytorch-cpython",
          title: "PyTorch + CPython",
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
          id: "iq-cpython",
          title: "Explain CPython Architecture",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-execution",
          title: "How Python Executes Code",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-pvm",
          title: "Explain Python Virtual Machine",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-ast",
          title: "What is AST?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-frame-object",
          title: "Frame Objects",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};