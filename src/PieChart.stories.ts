import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/PieChart',
  component: PieChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: 400, height: 300 },
    series: [
      {
        type: 'pie',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
        ],
      },
    ],
  },
};

export const Donut: Story = {
  args: {
    style: { width: 400, height: 300 },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
        ],
      },
    ],
  },
};
