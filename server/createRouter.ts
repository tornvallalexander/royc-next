import { router } from "@trpc/server";
import { Context } from './createContext';

export function createRouter() {
  // adding config that applies across all routes
  // for instance, adding superjson
  return router<Context>();
}