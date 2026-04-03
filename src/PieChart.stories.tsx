import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: PieChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: 400 }}
      series={{
        type: 'pie',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Social Media' },
          { value: 300, name: 'Referral' },
        ],
      }}
    />
  ),
};

export const Donut: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: 400 }}
      series={{
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Social Media' },
          { value: 300, name: 'Referral' },
        ],
      }}
    />
  ),
};

export const RoseChart: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: 400 }}
      series={{
        type: 'pie',
        roseType: 'area',
        radius: ['20%', '70%'],
        data: [
          { value: 40, name: 'Mon' },
          { value: 38, name: 'Tue' },
          { value: 32, name: 'Wed' },
          { value: 30, name: 'Thu' },
          { value: 28, name: 'Fri' },
          { value: 26, name: 'Sat' },
          { value: 22, name: 'Sun' },
        ],
      }}
    />
  ),
};
