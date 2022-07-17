import { createRouter } from "../createRouter";
import { requireUser } from "../utils";
import { z } from "zod";

export const dashboardRouter = createRouter()
  .query("four-metrics", {
    resolve: async () => {
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
    async resolve({ ctx }) {
      requireUser(ctx, "UNAUTHORIZED");
      const ongoing = await ctx.prisma.fund.findMany({
        where: {
          status: "ongoing",
          userId: ctx.user.userId,
        }
      })
      return {
        ongoing,
      };
    }
  })
  .query("upcoming", {
    async resolve({ ctx }) {
      requireUser(ctx, "UNAUTHORIZED");
      const upcoming = await ctx.prisma.fund.findMany({
        where: {
          status: "upcoming",
          userId: ctx.user.userId,
        }
      })
      return {
        upcoming,
      }
    }
  })
  .query("closed", {
    async resolve({ ctx }) {
      requireUser(ctx, "UNAUTHORIZED");
      const closed = await ctx.prisma.fund.findMany({
        where: {
          status: "closed",
          userId: ctx.user.userId,
        }
      })
      return {
        closed,
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
  .query("funds", {
    async resolve({ ctx }) {
      requireUser(ctx, "UNAUTHORIZED");
      const funds = await ctx.prisma.fund.findMany({
        where: {
          userId: ctx.user.userId,
        }
      })
      return {
        funds,
      }
    }
  })
  .mutation("delete-fund", {
    input: z
      .object({
        fundId: z.string(),
      })
      .nullish(),
    async resolve({ ctx, input }) {
      requireUser(ctx, "UNAUTHORIZED");
      await ctx.prisma.fund.delete({
        where: {
          id: input?.fundId ?? "cl5mrbvno0060lwc99fxq6fw8",
        }
      })
    }
  })
