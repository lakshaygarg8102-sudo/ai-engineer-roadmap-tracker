import { Section } from "../../types/roadmap";

export const dataLoading: Section = {
  id: "data-loading",
  title: "Data Loading & Saving",

  groups: [

    {
      id: "file-formats",
      title: "Reading Data",

      topics: [
        {
          id: "read-csv",
          title: "Reading CSV Files",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "read-excel",
          title: "Reading Excel Files",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "read-json",
          title: "Reading JSON Data",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "read-parquet",
          title: "Reading Parquet Files",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "read-sql",
          title: "Reading from SQL Databases",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "writing-data",
      title: "Writing Data",

      topics: [
        {
          id: "to-csv",
          title: "Writing CSV Files",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "to-parquet",
          title: "Writing Parquet Files",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "to-json",
          title: "Writing JSON",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "to-sql",
          title: "Writing to SQL Databases",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production-loading",
      title: "Production Data Loading",

      topics: [
        {
          id: "large-csv",
          title: "Loading Large CSV Files",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "chunksize",
          title: "Chunk Processing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "compression",
          title: "Compressed Files",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "dtype-loading",
          title: "Optimizing dtypes While Loading",
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
          id: "iq-read-csv",
          title: "Optimizing read_csv()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-parquet",
          title: "CSV vs Parquet",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};