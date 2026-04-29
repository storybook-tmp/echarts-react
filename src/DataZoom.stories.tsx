import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { LineChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { DataZoom, Title, Tooltip } from './components';

const longData = Array.from({ length: 50 }, (_, i) => Math.round(Math.sin(i / 5) * 50 + 50));

const meta: Meta<any> = {
  component: LineChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    xAxis: { type: 'category' as const, data: longData.map((_, i) => `Day ${i + 1}`) },
    yAxis: { type: 'value' as const },
    series: [{ type: 'line' as const, data: longData }],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSliderZoom: Story = {
  render: (args) => (
    <LineChart {...args}>
      <Title title={{ text: 'Data with Zoom' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <DataZoom dataZoom={[{ type: 'slider', start: 0, end: 50 }]} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).not.toBeNull();
  },
};

export const WithInsideZoom: Story = {
  render: (args) => (
    <LineChart {...args}>
      <DataZoom dataZoom={[{ type: 'inside', start: 0, end: 100 }]} />
    </LineChart>
  ),
};

export const WithBothZoom: Story = {
  render: (args) => (
    <LineChart {...args}>
      <DataZoom dataZoom={[{ type: 'slider' }, { type: 'inside' }]} />
    </LineChart>
  ),
};
