import { Section } from "../../types/roadmap";

export const memoryManagement: Section = {
  id: "memory-management",
  title: "Memory Management & Garbage Collection",

  groups: [
    {
      id: "memory-basics",
      title: "Memory Fundamentals",

      topics: [
        {
          id: "python-memory-model",
          title: "Python Memory Model",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "stack-vs-heap",
          title: "Stack vs Heap",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "object-memory-layout",
          title: "Python Object Memory Layout",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pyobject",
          title: "PyObject Structure",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "reference-counting",
      title: "Reference Counting",

      topics: [
        {
          id: "reference-count",
          title: "Reference Counting",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "ob-refcnt",
          title: "ob_refcnt",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sys-getrefcount",
          title: "sys.getrefcount()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "reference-lifecycle",
          title: "Object Lifecycle",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "garbage-collector",
      title: "Garbage Collection",

      topics: [
        {
          id: "garbage-collector",
          title: "Garbage Collector",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "reference-cycle",
          title: "Reference Cycles",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "generational-gc",
          title: "Generational GC",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "gc-module",
          title: "gc Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "weak-references",
      title: "Weak References",

      topics: [
        {
          id: "weakref",
          title: "weakref Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "weak-reference",
          title: "Weak References",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "weak-value-dictionary",
          title: "WeakValueDictionary",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "weak-key-dictionary",
          title: "WeakKeyDictionary",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "memory-optimization",
      title: "Memory Optimization",

      topics: [
        {
          id: "small-int-cache",
          title: "Small Integer Cache",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "string-interning",
          title: "String Interning",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "object-pooling",
          title: "Object Pooling",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "memory-optimization-techniques",
          title: "Memory Optimization Techniques",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "profiling",
      title: "Memory Profiling",

      topics: [
        {
          id: "tracemalloc",
          title: "tracemalloc",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-profiler",
          title: "memory_profiler",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sys-getsizeof",
          title: "sys.getsizeof()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "memory-leaks",
          title: "Finding Memory Leaks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-reference-counting",
          title: "Explain Reference Counting",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-gc",
          title: "Explain Python Garbage Collector",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-memory-leak",
          title: "How to Detect Memory Leaks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-weakref",
          title: "Why weakref Exists",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }
  ]
};