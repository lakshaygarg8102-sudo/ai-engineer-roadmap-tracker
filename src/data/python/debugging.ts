import { Section } from "../../types/roadmap";

export const debugging: Section = {
  id: "debugging",
  title: "Debugging & Profiling",

  groups: [

    {
      id: "fundamentals",
      title: "Debugging Fundamentals",

      topics: [
        {
          id: "debugging-process",
          title: "Debugging Process",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "reading-tracebacks",
          title: "Reading Tracebacks",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "exception-analysis",
          title: "Exception Analysis",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interactive-debugging",
      title: "Interactive Debugging",

      topics: [
        {
          id: "pdb",
          title: "pdb",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "breakpoint",
          title: "breakpoint()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "debugger-commands",
          title: "Debugger Commands",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "profiling",
      title: "Profiling",

      topics: [
        {
          id: "cprofile",
          title: "cProfile",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "line-profiler",
          title: "line_profiler",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "py-spy",
          title: "py-spy",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "scalene",
          title: "Scalene Profiler",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "memory-debugging",
      title: "Memory Debugging",

      topics: [
        {
          id: "memory-profiler",
          title: "memory_profiler",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "tracemalloc-review",
          title: "tracemalloc",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-leak-debugging",
          title: "Debugging Memory Leaks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Debugging",

      topics: [
        {
          id: "remote-debugging",
          title: "Remote Debugging",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "async-debugging",
          title: "Debugging Async Applications",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "multithreading-debugging",
          title: "Debugging Multithreaded Applications",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "best-practices",
      title: "Best Practices",

      topics: [
        {
          id: "systematic-debugging",
          title: "Systematic Debugging Approach",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "root-cause-analysis",
          title: "Root Cause Analysis",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "production-postmortems",
          title: "Production Incident Analysis",
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
          id: "iq-pdb",
          title: "How to Debug Python Code",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-cprofile",
          title: "Performance Bottleneck Analysis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-memory-debugging",
          title: "Finding Memory Leaks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};