import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeatmapChart, CanvasRenderer, Title, Tooltip, VisualMap } from '@fanciers/echarts-react';
import { GridComponent } from 'echarts/components';

const meta: Meta = {
  component: HeatmapChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
  [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 2],
  [2, 0, 1], [2, 1, 0], [2, 2, 0], [2, 3, 0], [2, 4, 1], [2, 5, 6],
  [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0],
  [4, 0, 1], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 0],
  [5, 0, 2], [5, 1, 3], [5, 2, 4], [5, 3, 0], [5, 4, 0], [5, 5, 5],
  [6, 0, 1], [6, 1, 0], [6, 2, 3], [6, 3, 1], [6, 4, 2], [6, 5, 0],
  [7, 0, 0], [7, 1, 1], [7, 2, 0], [7, 3, 4], [7, 4, 5], [7, 5, 1],
  [8, 0, 0], [8, 1, 0], [8, 2, 2], [8, 3, 3], [8, 4, 4], [8, 5, 6],
  [9, 0, 1], [9, 1, 0], [9, 2, 1], [9, 3, 0], [9, 4, 3], [9, 5, 4],
  [10, 0, 2], [10, 1, 3], [10, 2, 5], [10, 3, 6], [10, 4, 1], [10, 5, 2],
  [11, 0, 4], [11, 1, 3], [11, 2, 1], [11, 3, 0], [11, 4, 0], [11, 5, 3],
];

export const Basic: Story = {
  render: () => (
    <HeatmapChart
      use={[CanvasRenderer, GridComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={[{
        type: 'heatmap',
        data: heatmapData,
        label: { show: true },
      }]}
    >
      <Title title={{ text: 'Activity Heatmap' }} />
      <Tooltip tooltip={{ position: 'top' }} />
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: '0%' }} />
    </HeatmapChart>
  ),
};

export const WithoutLabels: Story = {
  render: () => (
    <HeatmapChart
      use={[CanvasRenderer, GridComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={[{
        type: 'heatmap',
        data: heatmapData,
      }]}
    >
      <Tooltip tooltip={{ position: 'top' }} />
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: '0%' }} />
    </HeatmapChart>
  ),
};
