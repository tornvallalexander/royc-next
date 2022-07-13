import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("royc-four-metrics", {
    input: z
      .object({
        user: z.string().nullish(),
      })
      .nullish(),
    resolve() {
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
  .query("royc-ongoing", {
    input: z
      .object({
        user: z.string().nullish(),
      })
      .nullish(),
    resolve() {
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

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});