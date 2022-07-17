import { createRouter } from "server/createRouter";
import { requireUser } from "server/utils";
import { z } from "zod";

export const fundRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      requireUser(ctx);
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
  .query("ongoing", {
    async resolve({ ctx }) {
      requireUser(ctx);
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
      requireUser(ctx);
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
      requireUser(ctx);
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
  .mutation("delete-by-id", {
    input: z
      .object({
        fundId: z.string(),
      })
      .nullish(),
    async resolve({ ctx, input }) {
      requireUser(ctx);
      await ctx.prisma.fund.delete({
        where: {
          id: input?.fundId,
        }
      })
    }
  })
