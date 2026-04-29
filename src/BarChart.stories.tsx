import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { BarChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Title, Tooltip, Legend } from './components';

const meta: Meta<any> = {
  component: BarChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    xAxis: { type: 'category' as const, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'value' as const },
    series: [{ type: 'bar' as const, data: [120, 200, 150, 80, 70] }],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).not.toBeNull();
    await expect(canvas!.width).toBeGreaterThan(0);
  },
};

export const WithTitle: Story = {
  render: (args) => (
    <BarChart {...args}>
      <Title title={{ text: 'Weekly Sales' }} />
    </BarChart>
  ),
};

export const WithTooltipAndLegend: Story = {
  args: {
    series: [
      { type: 'bar' as const, name: 'Revenue', data: [120, 200, 150, 80, 70] },
      { type: 'bar' as const, name: 'Costs', data: [90, 130, 100, 60, 50] },
    ],
  },
  render: (args) => (
    <BarChart {...args}>
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
    </BarChart>
  ),
};

export const Horizontal: Story = {
  args: {
    xAxis: { type: 'value' as const },
    yAxis: { type: 'category' as const, data: ['A', 'B', 'C', 'D', 'E'] },
    series: [{ type: 'bar' as const, data: [18, 36, 65, 30, 78] }],
  },
};

export const CssCheck: Story = {
  play: async ({ canvasElement }) => {
    // The BarChart renders a div container; echarts sets position: relative and explicit dimensions on it
    const container = canvasElement.querySelector('div');
    await expect(container).not.toBeNull();
    const style = getComputedStyle(container!);
    // echarts sets the container width to match the style prop (600px)
    await expect(style.width).toBe('600px');
  },
};
