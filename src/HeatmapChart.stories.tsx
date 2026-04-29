import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { HeatmapChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent } from 'echarts/components';
import { VisualMap } from './components';

const heatmapData: [number, number, number][] = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 7; j++) {
    heatmapData.push([i, j, Math.round(Math.random() * 100)]);
  }
}

const meta: Meta<any> = {
  component: HeatmapChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer, GridComponent],
    style: { width: 600, height: 400 },
    xAxis: { type: 'category' as const, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'category' as const, data: ['Morning', 'Mid-Morning', 'Noon', 'Afternoon', 'Evening', 'Night', 'Late Night'] },
    series: [
      {
        type: 'heatmap' as const,
        data: heatmapData,
        label: { show: true },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <HeatmapChart {...args}>
      <VisualMap visualMap={{ min: 0, max: 100, calculable: true }} />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).not.toBeNull();
  },
};

export const WithVisualMap: Story = {
  render: (args) => (
    <HeatmapChart {...args}>
      <VisualMap visualMap={{ min: 0, max: 100, calculable: true, orient: 'horizontal', left: 'center', bottom: '5%' }} />
    </HeatmapChart>
  ),
};
