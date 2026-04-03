import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: EffectScatterChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EffectScatterChart
      style={{ width: '100%', height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={{
        type: 'effectScatter',
        data: [
          [10, 8],
          [8, 7],
          [13, 8],
          [9, 9],
          [11, 8],
          [14, 8],
          [6, 7],
          [4, 5],
        ],
        rippleEffect: { brushType: 'stroke' },
      }}
    />
  ),
};

export const LargeRipple: Story = {
  render: () => (
    <EffectScatterChart
      style={{ width: '100%', height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={{
        type: 'effectScatter',
        data: [
          [5, 3],
          [15, 12],
          [10, 8],
          [7, 10],
          [12, 6],
        ],
        symbolSize: 20,
        rippleEffect: { scale: 4, brushType: 'fill' },
      }}
    />
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <EffectScatterChart
      style={{ width: '100%', height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'effectScatter',
          name: 'Hotspots',
          data: [
            [10, 8],
            [13, 8],
            [11, 8],
          ],
          symbolSize: 15,
          rippleEffect: { brushType: 'stroke' },
        },
        {
          type: 'effectScatter',
          name: 'Warnings',
          data: [
            [4, 5],
            [6, 7],
            [8, 7],
          ],
          symbolSize: 10,
          rippleEffect: { brushType: 'fill' },
        },
      ]}
    />
  ),
};
