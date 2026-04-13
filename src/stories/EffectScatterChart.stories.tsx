import type { Meta, StoryObj } from '@storybook/react-vite';
import { LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { EffectScatterChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/EffectScatterChart',
  component: EffectScatterChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EffectScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 500, height: 400 },
    use: [TitleComponent, LegendComponent, TooltipComponent],
    title: { text: 'Effect Scatter — Ripple Animation' },
    tooltip: { trigger: 'item' },
    legend: { data: ['Alpha', 'Beta'] },
    xAxis: { type: 'value', name: 'X' },
    yAxis: { type: 'value', name: 'Y' },
    series: [
      {
        type: 'effectScatter',
        name: 'Alpha',
        data: [[10, 20], [20, 35], [30, 15], [40, 50], [50, 30]],
        symbolSize: 20,
        rippleEffect: { brushType: 'stroke' },
      },
      {
        type: 'effectScatter',
        name: 'Beta',
        data: [[15, 45], [25, 10], [35, 40], [45, 25], [55, 55]],
        symbolSize: 20,
        rippleEffect: { brushType: 'fill' },
      },
    ],
  },
};

export const WithVisualMap: Story = {
  args: {
    style: { width: 500, height: 400 },
    use: [TitleComponent, VisualMapComponent],
    title: { text: 'Effect Scatter — Value-Mapped Size' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    visualMap: { min: 0, max: 100, dimension: 2, inRange: { symbolSize: [10, 50] } },
    series: [
      {
        type: 'effectScatter',
        data: [[10, 20, 30], [20, 35, 80], [30, 15, 50], [40, 50, 20], [50, 30, 100]] as [number, number, number][],
        rippleEffect: { brushType: 'fill' },
      },
    ],
  },
};
