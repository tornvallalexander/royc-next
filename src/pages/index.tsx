import type { NextPage } from "next"
import Layout from "components/layout";
import { H3 } from "components/typography";
import { Upcoming } from "containers/royc/upcoming";
import { ClientCapitalDistributions } from "containers/royc/client-capital-distributions";
import { FourMetrics } from "containers/royc/four-metrics";
import { Closed } from "containers/royc/closed";
import { Ongoing } from "containers/royc/ongoing";
import { SubscriptionProcess } from "containers/royc/subscription-process";
import { ClientTargetAllocations } from "containers/royc/client-target-allocations";
import { UnfundedCapitalCalls } from "containers/royc/unfunded-capital-calls";
// import { DeleteFund } from "containers/royc/delete-fund";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        <section>
          <H3 className="mb-6">
            Product offerings & information
          </H3>
          <div className="space-y-6">
            <Ongoing />
            <Upcoming />
            <Closed />
          </div>
        </section>
        <section>
          <H3 className="mb-6">
            Client overview
          </H3>
          <div className="space-y-6">
            <FourMetrics />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <ClientTargetAllocations />
              <UnfundedCapitalCalls />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClientCapitalDistributions />
              <SubscriptionProcess />
            </div>
          </div>
          {/* <DeleteFund /> */}
        </section>
      </div>
    </Layout>
  )
}

export default Home
