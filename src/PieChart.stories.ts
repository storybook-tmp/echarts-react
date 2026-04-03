import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '600px', height: '400px' },
    series: [
      {
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        type: 'pie',
      },
    ],
  },
};

export const Donut: Story = {
  args: {
    style: { width: '600px', height: '400px' },
    series: [
      {
        data: [
          { value: 30, name: 'A' },
          { value: 25, name: 'B' },
          { value: 20, name: 'C' },
          { value: 15, name: 'D' },
          { value: 10, name: 'E' },
        ],
        type: 'pie',
        radius: ['40%', '70%'],
      },
    ],
  },
};
