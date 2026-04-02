import type { Meta, StoryObj } from '@storybook/react-vite';

import { BarChart, CanvasRenderer, Dataset, Legend, Tooltip } from './index.js';

const meta = {
  title: 'AI Generated/Medium/Dataset',
  component: Dataset,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <BarChart
      style={{ width: '100%', height: 360 }}
      use={CanvasRenderer}
      xAxis={{ type: 'category' }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', barWidth: 20 }, { type: 'bar', barWidth: 20 }, { type: 'bar', barWidth: 20 }]}
    >
      <Legend top={0} />
      <Tooltip trigger="axis" />
      <Dataset {...args} />
    </BarChart>
  ),
} satisfies Meta<typeof Dataset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RevenueByQuarter: Story = {
  args: {
    source: [
      ['quarter', 'North', 'South', 'West'],
      ['Q1', 120, 140, 90],
      ['Q2', 132, 124, 110],
      ['Q3', 101, 90, 125],
      ['Q4', 134, 160, 118],
    ],
  },
};

export const CompactTeams: Story = {
  args: {
    source: [
      ['team', 'Velocity', 'Quality', 'Support'],
      ['Alpha', 88, 92, 70],
      ['Beta', 76, 85, 95],
      ['Gamma', 90, 80, 78],
    ],
    sourceHeader: true,
  },
};
