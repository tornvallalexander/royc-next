import { createRouter } from "../createRouter";
import { requireUser } from "../utils";

export const dashboardRouter = createRouter()
  .query("four-metrics", {
    resolve: async ({ ctx }) => {
      requireUser(ctx, "UNAUTHORIZED");
      return {
        metrics: [
          {
            name: "Committed capital",
            value: 1295000000,
          },
          {
            name: "Paid-in capital",
            value: 542000000,
          },
          {
            name: "Undrawn capital",
            value: 759000000,
          },
          {
            name: "Investment products",
            value: 43,
          },
        ],
      };
    },
  })
  .query("ongoing", {
    async resolve() {
      return {
        ongoing: [
          {
            name: "Advent International",
            type: "Private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
          },
          {
            name: "Advent International GPE X",
            type: "Private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
          },
        ],
      };
    }
  })
  .query("upcoming", {
    async resolve() {
      return {
        upcoming: [
          {
            name: "Insight Partners XII",
            type: "Growth Equity",
            total_fund: 250000000,
            unallocated: 44600000,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
          },
          {
            name: "Brookfield Strategic Real Estate Partners VI",
            type: "Real Estate private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
          },
          {
            name: "Advent International",
            type: "Private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
          },
        ]
      }
    }
  })
  .query("closed", {
    async resolve() {
      return {
        closed: [
          {
            name: "Insight Partners XII",
            type: "Growth Equity",
            total_fund: 250000000,
            unallocated: 44600000,
            img: "",
          },
          {
            name: "Brookfield Strategic Real Estate Partners VI",
            type: "Real Estate private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "",
          },
          {
            name: "Advent International",
            type: "Private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "",
          },
        ]
      }
    }
  })
  .query("client-target-allocations", {
    async resolve() {
      return {
        client_target_allocations: {
          percentage: 0.14,
          client_with_target: {
            value: 43,
            total: 61,
          },
          unallocated_capital: {
            value: 9079000000,
          }
        }
      }
    }
  })
  .query("unfunded-capital-calls", {
    async resolve() {
      return {
        unfunded_capital_calls: {
          percentage: 0.59,
          clients: {
            value: 71,
            total: 183,
          },
          unfunded_capital: {
            value: 74000000,
          }
        },
      }
    }
  })
  .query("distributions", {
    async resolve() {
      return {
        distributions: [
          {
            name: "3 M",
            value: 35,
            total: 70,
          },
          {
            name: "6 M",
            value: 50,
            total: 70,
          },
          {
            name: "9 M",
            value: 65,
            total: 70,
          },
        ]
      }
    }
  })
