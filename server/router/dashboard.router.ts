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