import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { EffectScatterChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';

const meta: Meta<any> = {
  component: EffectScatterChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    xAxis: { type: 'value' as const },
    yAxis: { type: 'value' as const },
    series: [
      {
        type: 'effectScatter' as const,
        data: [
          [10, 8], [8, 7], [13, 8], [9, 9], [11, 8],
        ],
        rippleEffect: { brushType: 'stroke' as const },
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

export const LargeRipple: Story = {
  args: {
    series: [
      {
        type: 'effectScatter' as const,
        data: [[10, 8], [8, 7], [13, 8]],
        rippleEffect: { scale: 5, brushType: 'stroke' as const },
        symbolSize: 15,
      },
    ],
  },
};
