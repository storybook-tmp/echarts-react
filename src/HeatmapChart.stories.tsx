import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeatmapChart, VisualMap, Tooltip } from '@fanciers/echarts-react';
import { GridComponent } from 'echarts/components';

const meta = {
  title: 'AI Generated/Complex/HeatmapChart',
  component: HeatmapChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof HeatmapChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const heatmapData: Array<[number, number, number]> = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
  [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 2], [1, 5, 4],
  [2, 0, 1], [2, 1, 1], [2, 2, 5], [2, 3, 1], [2, 4, 3], [2, 5, 1],
  [3, 0, 3], [3, 1, 4], [3, 2, 1], [3, 3, 4], [3, 4, 8], [3, 5, 5],
  [4, 0, 2], [4, 1, 3], [4, 2, 6], [4, 3, 5], [4, 4, 1], [4, 5, 3],
  [5, 0, 4], [5, 1, 0], [5, 2, 3], [5, 3, 2], [5, 4, 7], [5, 5, 6],
  [6, 0, 0], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0],
];

export const ActivityHeatmap: Story = {
  render: () => (
    <HeatmapChart
      style={{ width: 600, height: 350 }}
      use={[GridComponent]}
      xAxis={[{ type: 'category', data: hours, splitArea: { show: true } }]}
      yAxis={[{ type: 'category', data: days, splitArea: { show: true } }]}
      grid={{ left: '3%', right: '4%', bottom: '15%', containLabel: true }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
          emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
        },
      ]}
    >
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: '2%' }} />
      <Tooltip tooltip={{ position: 'top' }} />
    </HeatmapChart>
  ),
};

export const MinimalHeatmap: Story = {
  render: () => (
    <HeatmapChart
      style={{ width: 500, height: 300 }}
      use={[GridComponent]}
      xAxis={[{ type: 'category', data: ['A', 'B', 'C', 'D', 'E'] }]}
      yAxis={[{ type: 'category', data: ['X', 'Y', 'Z'] }]}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 8], [1, 0, 5], [2, 0, 2], [3, 0, 9], [4, 0, 3],
            [0, 1, 4], [1, 1, 7], [2, 1, 1], [3, 1, 6], [4, 1, 8],
            [0, 2, 3], [1, 2, 2], [2, 2, 9], [3, 2, 4], [4, 2, 7],
          ],
        },
      ]}
    >
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true }} />
    </HeatmapChart>
  ),
};
