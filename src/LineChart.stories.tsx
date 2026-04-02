import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, Legend, Tooltip, Title } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/LineChart',
  component: LineChart,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <LineChart
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
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <Tooltip />
    </LineChart>
  ),
};

export const MultipleLines: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          name: 'Revenue',
          data: [120, 132, 101, 134, 90, 230],
          type: 'line',
          smooth: true,
        },
        {
          name: 'Expenses',
          data: [220, 182, 191, 234, 290, 330],
          type: 'line',
          smooth: true,
        },
        {
          name: 'Profit',
          data: [150, 232, 201, 154, 190, 330],
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <Legend />
      <Tooltip />
      <Title text="Financial Overview" left="center" />
    </LineChart>
  ),
};

export const AreaChart: Story = {
  render: () => (
    <LineChart
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
          name: 'Email',
          data: [120, 132, 101, 134, 90, 230, 210],
          type: 'line',
          smooth: true,
          areaStyle: {},
          stack: 'total',
        },
        {
          name: 'Direct',
          data: [220, 182, 191, 234, 290, 330, 310],
          type: 'line',
          smooth: true,
          areaStyle: {},
          stack: 'total',
        },
        {
          name: 'Search',
          data: [150, 232, 201, 154, 190, 330, 410],
          type: 'line',
          smooth: true,
          areaStyle: {},
          stack: 'total',
        },
      ]}
    >
      <Legend />
      <Tooltip />
    </LineChart>
  ),
};
