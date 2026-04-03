import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: PieChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const pieData = [
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' },
];

export const Basic: Story = {
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[{ type: 'pie', radius: '50%', data: pieData }]}
    >
      <Title title={{ text: 'Traffic Sources' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
};

export const Donut: Story = {
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[{ type: 'pie', radius: ['40%', '70%'], data: pieData }]}
    >
      <Legend legend={{ orient: 'vertical', left: 'left' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
};

export const Rose: Story = {
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[{ type: 'pie', radius: [20, 140], roseType: 'area', data: pieData }]}
    >
      <Title title={{ text: 'Rose Chart' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
};
