import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta = {
  component: BarChart,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const RegionalRevenue: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 340 }}
      xAxis={{
        type: 'category',
        data: ['North', 'South', 'East', 'West'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: '2025',
          data: [420, 360, 390, 430],
          barMaxWidth: 36,
        },
        {
          type: 'bar',
          name: '2026',
          data: [510, 410, 470, 520],
          barMaxWidth: 36,
        },
      ]}
    >
      <Title text="Regional revenue" left="center" />
      <Tooltip trigger="axis" />
      <Legend top={28} />
    </BarChart>
  ),
};
