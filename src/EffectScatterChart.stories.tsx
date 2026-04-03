import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/EffectScatterChart',
  component: EffectScatterChart,
} satisfies Meta<typeof EffectScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ripple: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 20,
        data: [
          [172, 80],
          [161, 55],
          [167, 62],
          [159, 48],
          [157, 43],
          [168, 72],
          [175, 90],
        ],
      },
    ],
  },
};

export const LargeRipple: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 30,
        rippleEffect: { brushType: 'stroke', scale: 4 },
        data: [
          [10, 20],
          [30, 50],
          [50, 80],
          [70, 40],
          [90, 60],
        ],
      },
    ],
  },
};
