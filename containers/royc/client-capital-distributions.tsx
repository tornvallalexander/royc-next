import React from 'react';
import { Card } from 'components/card';
import type { MetricTotal } from 'utils/types';
import { H4, H5, Text } from 'components/typography';
import { Progress } from '@mantine/core';

const distributions: MetricTotal[] = [
  {
    name: '3 M',
    value: 35,
    total: 70,
  },
  {
    name: '6 M',
    value: 50,
    total: 70,
  },
  {
    name: '9 M',
    value: 65,
    total: 70,
  },
]

function ClientCapitalDistributions() {
  return (
    <Card>
      <H4 className='mb-4'>
        Recent client capital distributions
      </H4>
      <div className='space-y-6'>
        {distributions.map(dist => <Distribution key={dist.name} {...dist} />)}
      </div>
    </Card>
  )
}

function Distribution({ name, value, total }: MetricTotal) {
  return (
    <div className='flex justify-between items-center space-x-4'>
      <Text className='rotate-90 shrink-0' variant='secondary'>{name}</Text>
      <div className='w-full'>
        <Progress
          size='xl'
          radius='xl'
          sections={[
            { value: +((value / total) * 100).toFixed(0), color: 'cyan' },
          ]}
        />
      </div>
      <H5
        as='p'
        className='text-gray-500 shrink-0'
        variant='secondary'
      >
        {value}
      </H5>
    </div>
  )
}

export { ClientCapitalDistributions };