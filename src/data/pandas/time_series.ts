import { Section } from "../../types/roadmap";

export const timeSeries: Section = {
  id: "time-series",
  title: "Time Series",

  groups: [

    {
      id: "datetime",
      title: "Date & Time Basics",

      topics: [
        {
          id: "datetime-dtype",
          title: "Datetime Data Type",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "to-datetime",
          title: "pd.to_datetime()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "datetime-components",
          title: "Extracting Date Components",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "datetime-index",
      title: "Datetime Index",

      topics: [
        {
          id: "datetime-index",
          title: "DatetimeIndex",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "set-datetime-index",
          title: "Using Datetime as Index",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "time-based-selection",
          title: "Time-based Indexing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "resampling",
      title: "Resampling",

      topics: [
        {
          id: "resample",
          title: "resample()",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "frequency-conversion",
          title: "Frequency Conversion",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "rolling-window",
          title: "Rolling Window",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced Time Series",

      topics: [
        {
          id: "shift",
          title: "shift()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "lag-features",
          title: "Lag Features",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "expanding-window",
          title: "Expanding Window",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Production Use Cases",

      topics: [
        {
          id: "financial-data",
          title: "Financial Time Series",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "sensor-data",
          title: "Sensor & IoT Data",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "forecasting-preparation",
          title: "Preparing Data for Forecasting",
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
          id: "iq-resample",
          title: "Explain resample()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-rolling",
          title: "Rolling vs Expanding Window",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};