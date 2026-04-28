import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { GridComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer, HeatmapChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

const hours = ['12am', '1am', '2am', '3am', '4am', '5am'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 3], [0, 4, 2],
  [1, 0, 7], [1, 1, 3], [1, 2, 2], [1, 3, 6], [1, 4, 1],
  [2, 0, 1], [2, 1, 0], [2, 2, 8], [2, 3, 4], [2, 4, 3],
  [3, 0, 7], [3, 1, 2], [3, 2, 4], [3, 3, 1], [3, 4, 5],
  [4, 0, 2], [4, 1, 6], [4, 2, 3], [4, 3, 8], [4, 4, 2],
  [5, 0, 3], [5, 1, 4], [5, 2, 1], [5, 3, 2], [5, 4, 7],
];

export const Default = meta.story({
  render: () => (
    <HeatmapChart
      use={[CanvasRenderer, GridComponent, VisualMapComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      visualMap={{
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0',
      }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
        },
      ]}
    >
      <Title text="Activity Heatmap" />
      <Tooltip />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});

export const SimpleHeatmap = meta.story({
  render: () => (
    <HeatmapChart
      use={[CanvasRenderer, GridComponent, VisualMapComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['A', 'B', 'C'] }}
      yAxis={{ type: 'category', data: ['X', 'Y', 'Z'] }}
      visualMap={{
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0',
      }}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 10], [0, 1, 5], [0, 2, 8],
            [1, 0, 3], [1, 1, 9], [1, 2, 2],
            [2, 0, 7], [2, 1, 1], [2, 2, 6],
          ],
          label: { show: true },
        },
      ]}
    >
      <Title text="Simple Heatmap" />
      <Tooltip />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});
