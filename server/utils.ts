import { Context } from './createContext';
import { TRPCError } from '@trpc/server';

type TRPCErrorCode =
  | "PARSE_ERROR"
  | "BAD_REQUEST"
  | "INTERNAL_SERVER_ERROR"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "METHOD_NOT_SUPPORTED"
  | "TIMEOUT"
  | "CONFLICT"
  | "PRECONDITION_FAILED"
  | "PAYLOAD_TOO_LARGE"
  | "CLIENT_CLOSED_REQUEST";

const requireUser = (ctx: Context, status: TRPCErrorCode) => {
  if (!ctx?.user) {
    throw new TRPCError({
      code: status,
    });
  }
}

export {
  requireUser,
}