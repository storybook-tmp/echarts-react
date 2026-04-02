import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, Legend } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/Legend',
  component: Legend,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
          name: 'Sales',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
        },
        {
          name: 'Expenses',
          data: [80, 120, 100, 60, 50, 90, 100],
          type: 'line',
        },
      ]}
    >
      <Legend />
    </LineChart>
  ),
};

export const BottomLegend: Story = {
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
          name: 'Sales',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
        },
        {
          name: 'Expenses',
          data: [80, 120, 100, 60, 50, 90, 100],
          type: 'line',
        },
      ]}
    >
      <Legend bottom={0} />
    </LineChart>
  ),
};
