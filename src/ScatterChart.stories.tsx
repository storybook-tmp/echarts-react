import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ScatterChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Tooltip } from './components';

const meta: Meta<any> = {
  component: ScatterChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    xAxis: { type: 'value' as const },
    yAxis: { type: 'value' as const },
    series: [
      {
        type: 'scatter' as const,
        data: [
          [10, 8.04], [8, 6.95], [13, 7.58], [9, 8.81], [11, 8.33],
          [14, 9.96], [6, 7.24], [4, 4.26], [12, 10.84], [7, 4.82],
        ],
      },
    ],
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

export const WithTooltip: Story = {
  render: (args) => (
    <ScatterChart {...args}>
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
};

export const LargeSymbols: Story = {
  args: {
    series: [
      {
        type: 'scatter' as const,
        symbolSize: 20,
        data: [
          [10, 8.04], [8, 6.95], [13, 7.58], [9, 8.81], [11, 8.33],
        ],
      },
    ],
  },
};
