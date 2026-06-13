import { Section } from "../../types/roadmap";

export const concurrency: Section = {
  id: "concurrency",
  title: "Concurrency & Parallelism",

  groups: [
    {
      id: "fundamentals",
      title: "Concurrency Fundamentals",

      topics: [
        {
          id: "concurrency-vs-parallelism",
          title: "Concurrency vs Parallelism",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "process-vs-thread",
          title: "Process vs Thread",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cpu-bound-vs-io-bound",
          title: "CPU Bound vs IO Bound Tasks",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "gil-introduction",
          title: "Global Interpreter Lock (GIL)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "threading",
      title: "threading Module",

      topics: [
        {
          id: "thread-class",
          title: "Thread Class",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "thread-lifecycle",
          title: "Thread Lifecycle",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "daemon-thread",
          title: "Daemon Threads",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "join-thread",
          title: "join()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "thread-local",
          title: "Thread Local Storage",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "thread-synchronization",
      title: "Synchronization",

      topics: [
        {
          id: "lock",
          title: "Lock",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "rlock",
          title: "RLock",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "semaphore",
          title: "Semaphore",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "condition",
          title: "Condition",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "event",
          title: "Event",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "barrier",
          title: "Barrier",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "thread-problems",
      title: "Concurrency Problems",

      topics: [
        {
          id: "race-condition",
          title: "Race Condition",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "deadlock",
          title: "Deadlock",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "starvation",
          title: "Starvation",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "livelock",
          title: "Livelock",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "multiprocessing",
      title: "multiprocessing",

      topics: [
        {
          id: "multiprocessing-module",
          title: "multiprocessing Module",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "process-class",
          title: "Process Class",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "process-pool",
          title: "Pool",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "shared-memory",
          title: "Shared Memory",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "ipc",
          title: "Inter Process Communication",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "concurrent-futures",
      title: "concurrent.futures",

      topics: [
        {
          id: "executor",
          title: "Executor",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "thread-pool-executor",
          title: "ThreadPoolExecutor",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "process-pool-executor",
          title: "ProcessPoolExecutor",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "future-object",
          title: "Future",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "queues",
      title: "Queues",

      topics: [
        {
          id: "queue-module",
          title: "queue Module",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "producer-consumer",
          title: "Producer Consumer Pattern",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "priority-queue",
          title: "PriorityQueue",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-gil",
          title: "Explain GIL",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-thread-vs-process",
          title: "Thread vs Process",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-lock-rlock",
          title: "Lock vs RLock",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-race-condition",
          title: "How to Prevent Race Conditions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-threadpool",
          title: "ThreadPoolExecutor vs multiprocessing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};