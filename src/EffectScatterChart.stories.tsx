import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart, Tooltip, Legend, Title } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/EffectScatterChart',
  component: EffectScatterChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof EffectScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RippleEffect: Story = {
  render: () => (
    <EffectScatterChart
      style={{ width: 500, height: 400 }}
      xAxis={[{ scale: true }]}
      yAxis={[{ scale: true }]}
      series={[
        {
          type: 'effectScatter',
          name: 'Hotspots',
          data: [[10, 20], [15, 35], [12, 28], [18, 42], [8, 15], [20, 30], [25, 18]],
          symbolSize: 20,
          rippleEffect: { brushType: 'stroke' },
          label: { show: true, formatter: '{@[0]}, {@[1]}', position: 'right' },
        },
      ]}
    >
      <Title title={{ text: 'Effect Scatter Chart' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </EffectScatterChart>
  ),
};

export const MultipleSeriesWithEffects: Story = {
  render: () => (
    <EffectScatterChart
      style={{ width: 600, height: 450 }}
      xAxis={[{ scale: true, name: 'X Axis' }]}
      yAxis={[{ scale: true, name: 'Y Axis' }]}
      series={[
        {
          type: 'effectScatter',
          name: 'Category A',
          data: [[10, 20], [15, 35], [12, 28], [8, 15]],
          symbolSize: 25,
          rippleEffect: { period: 4, scale: 4, brushType: 'fill' },
        },
        {
          type: 'effectScatter',
          name: 'Category B',
          data: [[25, 50], [30, 65], [22, 48], [35, 42]],
          symbolSize: 20,
          rippleEffect: { period: 3, scale: 3, brushType: 'stroke' },
        },
      ]}
    >
      <Title title={{ text: 'Multi-Series Effect Scatter' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{}} />
    </EffectScatterChart>
  ),
};
