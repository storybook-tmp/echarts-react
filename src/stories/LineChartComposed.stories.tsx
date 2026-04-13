import type { Meta, StoryObj } from '@storybook/react-vite';
import { LegendComponent, TitleComponent, TooltipComponent, DataZoomComponent, ToolboxComponent, MarkLineComponent } from 'echarts/components';
import { LineChart } from '@fanciers/echarts-react';

const weeks = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8'];

const meta = {
  title: 'AI Generated/Complex/LineChartComposed',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiSeriesWithToolbox: Story = {
  args: {
    style: { width: 650, height: 420 },
    use: [TitleComponent, LegendComponent, TooltipComponent, DataZoomComponent, ToolboxComponent, MarkLineComponent],
    title: { text: 'Performance Metrics' },
    legend: { data: ['CPU', 'Memory', 'Disk'] },
    tooltip: { trigger: 'axis' },
    toolbox: { feature: { saveAsImage: {}, restore: {}, dataZoom: {} } },
    dataZoom: [{ type: 'inside' }],
    xAxis: { type: 'category', data: weeks },
    yAxis: { type: 'value', name: 'Usage %', max: 100 },
    series: [
      { type: 'line', name: 'CPU', smooth: true, data: [30, 45, 62, 38, 55, 70, 48, 52] },
      { type: 'line', name: 'Memory', smooth: true, data: [50, 55, 60, 58, 65, 72, 68, 75] },
      { type: 'line', name: 'Disk', smooth: false, data: [20, 22, 25, 23, 27, 30, 32, 35] },
    ],
  },
};

export const WithMarkLine: Story = {
  args: {
    style: { width: 650, height: 420 },
    use: [TitleComponent, LegendComponent, TooltipComponent, MarkLineComponent],
    title: { text: 'Revenue Trend with Targets' },
    legend: { data: ['Actual', 'Target'] },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: weeks },
    yAxis: { type: 'value', name: 'Revenue ($K)' },
    series: [
      {
        type: 'line',
        name: 'Actual',
        data: [120, 145, 160, 138, 175, 195, 185, 210],
        markLine: { data: [{ type: 'average', name: 'Average' }] },
      },
      {
        type: 'line',
        name: 'Target',
        lineStyle: { type: 'dashed' },
        data: [150, 150, 150, 150, 180, 180, 180, 180],
      },
    ],
  },
};
