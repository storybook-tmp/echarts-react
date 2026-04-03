import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, HeatmapChart, VisualMap } from '@fanciers/echarts-react';

const meta: Meta = {
  component: HeatmapChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const hours = ['12am', '2am', '4am', '6am', '8am', '10am', '12pm'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const heatmapData = [
  [0, 0, 5],
  [0, 1, 1],
  [0, 2, 0],
  [0, 3, 3],
  [0, 4, 8],
  [0, 5, 2],
  [0, 6, 4],
  [1, 0, 7],
  [1, 1, 3],
  [1, 2, 6],
  [1, 3, 2],
  [1, 4, 1],
  [1, 5, 9],
  [1, 6, 5],
  [2, 0, 2],
  [2, 1, 4],
  [2, 2, 8],
  [2, 3, 1],
  [2, 4, 3],
  [2, 5, 6],
  [2, 6, 7],
  [3, 0, 1],
  [3, 1, 6],
  [3, 2, 3],
  [3, 3, 5],
  [3, 4, 7],
  [3, 5, 4],
  [3, 6, 2],
  [4, 0, 9],
  [4, 1, 2],
  [4, 2, 5],
  [4, 3, 8],
  [4, 4, 4],
  [4, 5, 1],
  [4, 6, 6],
  [5, 0, 3],
  [5, 1, 7],
  [5, 2, 1],
  [5, 3, 4],
  [5, 4, 6],
  [5, 5, 8],
  [5, 6, 3],
  [6, 0, 4],
  [6, 1, 5],
  [6, 2, 7],
  [6, 3, 9],
  [6, 4, 2],
  [6, 5, 3],
  [6, 6, 1],
];

export const Default: Story = {
  render: () => (
    <HeatmapChart
      compose={[BarChart]}
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={{
        type: 'heatmap',
        data: heatmapData,
        label: { show: true },
      }}
    >
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: '2%' }} />
    </HeatmapChart>
  ),
};

export const WithVisualMap: Story = {
  render: () => (
    <HeatmapChart
      compose={[BarChart]}
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={{
        type: 'heatmap',
        data: heatmapData,
        label: { show: true },
      }}
    >
      <VisualMap
        visualMap={{
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '2%',
        }}
      />
    </HeatmapChart>
  ),
};

export const Styled: Story = {
  render: () => (
    <HeatmapChart
      compose={[BarChart]}
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={{
        type: 'heatmap',
        data: heatmapData,
        label: { show: true },
        emphasis: {
          itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' },
        },
      }}
    >
      <VisualMap
        visualMap={{
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '2%',
          inRange: { color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027'] },
        }}
      />
    </HeatmapChart>
  ),
};
