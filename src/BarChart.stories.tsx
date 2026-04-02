import type { Meta, StoryObj } from '@storybook/react';
import { BarChart, Legend, Tooltip, Title } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/BarChart',
  component: BarChart,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ]}
    >
      <Tooltip />
    </BarChart>
  ),
};

export const MultipleDatasets: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          name: 'Product A',
          data: [320, 332, 301, 334],
          type: 'bar',
        },
        {
          name: 'Product B',
          data: [220, 182, 191, 234],
          type: 'bar',
        },
        {
          name: 'Product C',
          data: [150, 232, 201, 154],
          type: 'bar',
        },
      ]}
    >
      <Legend />
      <Tooltip />
      <Title text="Quarterly Sales" subtext="By Product" left="center" />
    </BarChart>
  ),
};

export const StackedBar: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          name: 'Direct',
          data: [320, 332, 301, 334, 390, 330, 320],
          type: 'bar',
          stack: 'total',
        },
        {
          name: 'Email',
          data: [120, 132, 101, 134, 90, 130, 110],
          type: 'bar',
          stack: 'total',
        },
        {
          name: 'Search',
          data: [220, 182, 191, 234, 290, 330, 310],
          type: 'bar',
          stack: 'total',
        },
      ]}
    >
      <Legend />
      <Tooltip />
    </BarChart>
  ),
};
