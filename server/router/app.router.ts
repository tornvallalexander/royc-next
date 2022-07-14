import { createRouter } from '../createRouter';
import { dashboardRouter } from './dashboard.router';

export const appRouter = createRouter()
  .merge("dashboard.", dashboardRouter)

export type AppRouter = typeof appRouter;