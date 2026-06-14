import { Section } from "../../types/roadmap";

export const transactions: Section = {
  id: "transactions",
  title: "Transactions & Concurrency",

  groups: [

    {
      id: "transaction-basics",
      title: "Transaction Fundamentals",

      topics: [
        {
          id: "what-is-transaction",
          title: "What is a Transaction?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "transaction-lifecycle",
          title: "Transaction Lifecycle",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "autocommit",
          title: "Autocommit",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "acid",
      title: "ACID Properties",

      topics: [
        {
          id: "atomicity",
          title: "Atomicity",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "consistency",
          title: "Consistency",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "isolation",
          title: "Isolation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "durability",
          title: "Durability",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "concurrency",
      title: "Concurrency Problems",

      topics: [
        {
          id: "dirty-read",
          title: "Dirty Reads",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "non-repeatable-read",
          title: "Non-repeatable Reads",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "phantom-read",
          title: "Phantom Reads",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "lost-update",
          title: "Lost Update Problem",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "locking",
      title: "Locking",

      topics: [
        {
          id: "shared-lock",
          title: "Shared Locks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "exclusive-lock",
          title: "Exclusive Locks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "deadlocks",
          title: "Deadlocks",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "isolation-levels",
          title: "Isolation Levels",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Usage",

      topics: [
        {
          id: "bank-transfer",
          title: "Bank Transfer Example",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "distributed-transactions",
          title: "Distributed Transactions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "optimistic-vs-pessimistic",
          title: "Optimistic vs Pessimistic Locking",
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
          id: "acid-interview",
          title: "Explain ACID with Real Examples",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "deadlock-interview",
          title: "How Would You Resolve Deadlocks?",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },
    {
  id: "mvcc",
  title: "MVCC",

  topics: [
    {
      id: "what-is-mvcc",
      title: "Multi-Version Concurrency Control",
      estimatedMinutes: 50,
      interviewImportance: 5,
    },
    {
      id: "snapshot-isolation",
      title: "Snapshot Isolation",
      estimatedMinutes: 45,
      interviewImportance: 5,
    },
    {
      id: "read-consistency",
      title: "Read Consistency",
      estimatedMinutes: 40,
      interviewImportance: 5,
    }
  ]
},

  ]
};