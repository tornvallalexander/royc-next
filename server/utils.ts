import { Context } from './createContext';
import { TRPCError } from '@trpc/server';

const requireUser = (ctx: Context) => {
  if (!ctx?.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
}

export {
  requireUser,
}