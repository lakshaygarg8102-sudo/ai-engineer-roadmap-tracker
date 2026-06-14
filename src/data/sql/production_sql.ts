import { Section } from "../../types/roadmap";

export const productionSql: Section = {
  id: "production-sql",
  title: "Production SQL",

  groups: [

    {
      id: "etl",
      title: "ETL & ELT",

      topics: [
        {
          id: "etl-basics",
          title: "ETL vs ELT",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "incremental-etl",
          title: "Incremental ETL",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "cdc",
          title: "Change Data Capture (CDC)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "warehouse",
      title: "Data Warehouse Operations",

      topics: [
        {
          id: "fact-loading",
          title: "Loading Fact Tables",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "dimension-loading",
          title: "Loading Dimension Tables",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "slowly-changing-dimensions",
          title: "Slowly Changing Dimensions (SCD)",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization",
      title: "Production Optimization",

      topics: [
        {
          id: "batch-processing",
          title: "Batch Processing",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "sql-pipeline-design",
          title: "SQL Pipeline Design",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "large-table-management",
          title: "Managing Billion-Row Tables",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "monitoring",
      title: "Monitoring",

      topics: [
        {
          id: "data-quality-checks",
          title: "Data Quality Checks",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "sql-monitoring",
          title: "Monitoring SQL Jobs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pipeline-alerting",
          title: "Pipeline Alerting",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "design-etl",
          title: "Design an ETL Pipeline",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "warehouse-case-study",
          title: "Warehouse Case Study",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    },
    {
  id: "scaling",
  title: "Scaling SQL Systems",

  topics: [
    {
      id: "read-replicas",
      title: "Read Replicas",
      estimatedMinutes: 40,
      interviewImportance: 5,
    },
    {
      id: "sharding-introduction",
      title: "Database Sharding",
      estimatedMinutes: 45,
      interviewImportance: 5,
    },
    {
      id: "partition-pruning",
      title: "Partition Pruning",
      estimatedMinutes: 45,
      interviewImportance: 5,
    }
  ]
},

  ]
};