import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 400, height: 300 },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Apples', value: 40 },
          { name: 'Bananas', value: 25 },
          { name: 'Cherries', value: 35 },
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
          { name: 'Category A', value: 60 },
          { name: 'Category B', value: 30 },
          { name: 'Category C', value: 10 },
        ],
      },
    ],
  },
};
