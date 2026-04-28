import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { BarChart, CanvasRenderer, HeatmapChart, Tooltip, VisualMap } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

const hours = ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 2],
  [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 3], [1, 4, 4],
  [2, 0, 1], [2, 1, 0], [2, 2, 5], [2, 3, 4], [2, 4, 7],
  [3, 0, 0], [3, 1, 2], [3, 2, 4], [3, 3, 6], [3, 4, 8],
  [4, 0, 3], [4, 1, 5], [4, 2, 7], [4, 3, 9], [4, 4, 10],
  [5, 0, 2], [5, 1, 3], [5, 2, 6], [5, 3, 7], [5, 4, 5],
  [6, 0, 0], [6, 1, 1], [6, 2, 3], [6, 3, 2], [6, 4, 1],
];

export const Default = meta.story({
  render: () => (
    <HeatmapChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: hours.slice(0, 5) }}
      yAxis={{ type: 'category', data: days }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
        },
      ]}
    >
      <VisualMap
        visualMap={{
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: 0,
        }}
      />
      <Tooltip tooltip={{ position: 'top' }} />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.width).toBeGreaterThan(0);
    expect(canvas.height).toBeGreaterThan(0);
  },
});

export const CustomColors = meta.story({
  render: () => (
    <HeatmapChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['A', 'B', 'C', 'D', 'E'] }}
      yAxis={{ type: 'category', data: ['W', 'X', 'Y', 'Z'] }}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 10], [0, 1, 15], [0, 2, 20], [0, 3, 25],
            [1, 0, 30], [1, 1, 35], [1, 2, 40], [1, 3, 45],
            [2, 0, 50], [2, 1, 55], [2, 2, 60], [2, 3, 65],
            [3, 0, 70], [3, 1, 75], [3, 2, 80], [3, 3, 85],
            [4, 0, 90], [4, 1, 95], [4, 2, 100], [4, 3, 50],
          ],
          label: { show: true },
        },
      ]}
    >
      <VisualMap
        visualMap={{
          min: 0,
          max: 100,
          inRange: { color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027'] },
          calculable: true,
          orient: 'vertical',
          right: 0,
          top: 'center',
        }}
      />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.width).toBeGreaterThan(0);
  },
});
