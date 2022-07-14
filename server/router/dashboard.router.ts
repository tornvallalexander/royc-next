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
            img: "https://via.placeholder.com/150",
          },
          {
            name: "Advent International GPE X",
            type: "Private Equity",
            total_fund: 200000000,
            unallocated: 44600000,
            img: "https://via.placeholder.com/150",
          },
        ],
      };
    }
  })