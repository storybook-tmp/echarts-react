import type { Meta, StoryObj } from '@storybook/react';
import { PieChart, Legend, Tooltip, Title } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/PieChart',
  component: PieChart,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: '400px' }}
      series={[
        {
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Affiliate' },
            { value: 300, name: 'Other' },
          ],
          type: 'pie',
        },
      ]}
    >
      <Tooltip />
    </PieChart>
  ),
};

export const WithLegend: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: '400px' }}
      series={[
        {
          data: [
            { value: 320, name: 'Product A' },
            { value: 240, name: 'Product B' },
            { value: 180, name: 'Product C' },
            { value: 150, name: 'Product D' },
            { value: 110, name: 'Product E' },
          ],
          type: 'pie',
        },
      ]}
    >
      <Legend />
      <Tooltip />
      <Title text="Product Distribution" left="center" />
    </PieChart>
  ),
};

export const Donut: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: '400px' }}
      series={[
        {
          data: [
            { value: 335, name: 'Chrome' },
            { value: 310, name: 'Firefox' },
            { value: 234, name: 'Safari' },
            { value: 135, name: 'Edge' },
            { value: 148, name: 'Other' },
          ],
          type: 'pie',
          radius: ['40%', '70%'],
        },
      ]}
    >
      <Legend bottom={0} />
      <Tooltip />
      <Title text="Browser Market Share" subtext="2024" left="center" />
    </PieChart>
  ),
};
