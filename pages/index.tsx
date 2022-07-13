import type { NextPage } from 'next'
import Layout from 'components/layout';
import { H3 } from 'components/typography';
import { Upcoming } from 'containers/royc/upcoming';
import { ClientCapitalDistributions } from 'containers/royc/client-capital-distributions';
import { PercentageMetrics } from 'containers/royc/percentage-metrics';
import { FourMetrics } from 'containers/royc/four-metrics';
import { Closed } from 'containers/royc/closed';
import { Ongoing } from 'containers/royc/ongoing';
import { SubscriptionProcess } from 'containers/royc/subscription-process';

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
            <PercentageMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClientCapitalDistributions />
              <SubscriptionProcess />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
