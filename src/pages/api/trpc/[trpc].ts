import * as trpcNext from "@trpc/server/adapters/next";
import { publicProcedure, router } from "~/server/trpc";

const appRouter = router({
  iterable: publicProcedure.query(async function* () {
    for (let i = 0; i < 15; i++) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(i);
      yield i;
    }
  }),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
