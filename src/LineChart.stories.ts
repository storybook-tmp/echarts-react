import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '600px', height: '400px' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [{ data: [150, 230, 224, 218, 135, 147], type: 'line' }],
  },
};

export const MultipleLines: Story = {
  args: {
    style: { width: '600px', height: '400px' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [
      { data: [150, 230, 224, 218, 135, 147], type: 'line', name: 'Product A' },
      { data: [100, 150, 160, 190, 220, 200], type: 'line', name: 'Product B' },
    ],
  },
};
