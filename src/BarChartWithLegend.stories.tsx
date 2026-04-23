import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/BarChartWithLegend',
  component: BarChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitleAndLegend: Story = {
  render: () => (
    <BarChart
      style={{ width: 500, height: 400 }}
      xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }]}
      yAxis={[{}]}
      series={[
        { type: 'bar', name: 'Revenue', data: [120, 200, 150, 80, 70] },
        { type: 'bar', name: 'Profit', data: [60, 80, 50, 30, 40] },
      ]}
    >
      <Title title={{ text: 'Monthly Overview' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
};

export const Stacked: Story = {
  render: () => (
    <BarChart
      style={{ width: 500, height: 400 }}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'] }]}
      yAxis={[{}]}
      series={[
        { type: 'bar', name: 'Product A', stack: 'total', data: [320, 302, 341, 374] },
        { type: 'bar', name: 'Product B', stack: 'total', data: [120, 132, 101, 134] },
        { type: 'bar', name: 'Product C', stack: 'total', data: [220, 182, 191, 234] },
      ]}
    >
      <Title title={{ text: 'Quarterly Sales by Product' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
    </BarChart>
  ),
};
