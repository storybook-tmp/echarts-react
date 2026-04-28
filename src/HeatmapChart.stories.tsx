import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { HeatmapChart, CanvasRenderer, Title, Tooltip, VisualMap } from '@fanciers/echarts-react';
import { GridComponent } from 'echarts/components';

const chartStyle = { width: 600, height: 400 };

const hours = ['12a', '1a', '2a', '3a', '4a', '5a'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 3], [0, 4, 7],
  [1, 0, 2], [1, 1, 0], [1, 2, 4], [1, 3, 8], [1, 4, 1],
  [2, 0, 1], [2, 1, 3], [2, 2, 6], [2, 3, 2], [2, 4, 9],
  [3, 0, 7], [3, 1, 5], [3, 2, 2], [3, 3, 0], [3, 4, 4],
  [4, 0, 0], [4, 1, 6], [4, 2, 8], [4, 3, 1], [4, 4, 3],
  [5, 0, 3], [5, 1, 9], [5, 2, 1], [5, 3, 4], [5, 4, 6],
];

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const Default = meta.story({
  render: () => (
    <HeatmapChart
      use={[CanvasRenderer, GridComponent]}
      style={chartStyle}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
        },
      ]}
    >
      <Title title={{ text: 'Activity Heatmap' }} />
      <Tooltip tooltip={{ position: 'top' }} />
      <VisualMap
        visualMap={{
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '5%',
        }}
      />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const Simple = meta.story({
  render: () => (
    <HeatmapChart
      use={[CanvasRenderer, GridComponent]}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['A', 'B', 'C'] }}
      yAxis={{ type: 'category', data: ['X', 'Y', 'Z'] }}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 1], [0, 1, 5], [0, 2, 3],
            [1, 0, 7], [1, 1, 2], [1, 2, 8],
            [2, 0, 4], [2, 1, 9], [2, 2, 6],
          ],
          label: { show: true },
        },
      ]}
    >
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true }} />
      <Tooltip tooltip={{}} />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
