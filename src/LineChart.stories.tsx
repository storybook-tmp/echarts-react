import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { LineChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Title, Tooltip, Legend } from './components';

const meta: Meta<any> = {
  component: LineChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    xAxis: { type: 'category' as const, data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' as const },
    series: [{ type: 'line' as const, data: [820, 932, 901, 934, 1290, 1330] }],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).not.toBeNull();
  },
};

export const Smooth: Story = {
  args: {
    series: [{ type: 'line' as const, data: [820, 932, 901, 934, 1290, 1330], smooth: true }],
  },
};

export const MultiLine: Story = {
  args: {
    series: [
      { type: 'line' as const, name: 'Series A', data: [120, 132, 101, 134, 90, 230] },
      { type: 'line' as const, name: 'Series B', data: [220, 182, 191, 234, 290, 330] },
    ],
  },
  render: (args) => (
    <LineChart {...args}>
      <Title title={{ text: 'Multi-Line Chart' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
    </LineChart>
  ),
};

export const AreaStyle: Story = {
  args: {
    series: [{ type: 'line' as const, data: [820, 932, 901, 934, 1290, 1330], areaStyle: {} }],
  },
};
