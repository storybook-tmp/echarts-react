import type { Meta, StoryObj } from '@storybook/react-vite';
import { LegendComponent, TitleComponent, TooltipComponent, DataZoomComponent } from 'echarts/components';
import { BarChart } from '@fanciers/echarts-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const meta = {
  title: 'AI Generated/Complex/BarChartComposed',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLegendAndTooltip: Story = {
  args: {
    style: { width: 600, height: 400 },
    use: [TitleComponent, LegendComponent, TooltipComponent],
    title: { text: 'Monthly Sales Comparison', subtext: '2023 vs 2024' },
    legend: { data: ['2023', '2024'] },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: months },
    yAxis: { type: 'value', name: 'Sales ($K)' },
    series: [
      { type: 'bar', name: '2023', data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330] },
      { type: 'bar', name: '2024', data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149] },
    ],
  },
};

export const WithDataZoom: Story = {
  args: {
    style: { width: 600, height: 400 },
    use: [TitleComponent, LegendComponent, TooltipComponent, DataZoomComponent],
    title: { text: 'Sales with Zoom' },
    legend: { data: ['Revenue', 'Expenses'] },
    tooltip: { trigger: 'axis' },
    dataZoom: [{ type: 'inside' }, { type: 'slider' }],
    xAxis: { type: 'category', data: months },
    yAxis: { type: 'value' },
    series: [
      { type: 'bar', name: 'Revenue', data: [320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330] },
      { type: 'bar', name: 'Expenses', data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 130] },
    ],
  },
};
