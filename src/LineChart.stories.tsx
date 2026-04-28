import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, Legend, LineChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export const Default = meta.story({
  render: () => (
    <LineChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [820, 932, 901, 934, 1290, 1330] }]}
    >
      <Title text="Monthly Trend" />
      <Tooltip />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});

export const MultiSeries = meta.story({
  render: () => (
    <LineChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', name: 'Email', data: [120, 132, 101, 134, 90, 230, 210] },
        { type: 'line', name: 'Search', data: [220, 182, 191, 234, 290, 330, 310] },
        { type: 'line', name: 'Direct', data: [150, 232, 201, 154, 190, 330, 410] },
      ]}
    >
      <Title text="Traffic Sources" />
      <Tooltip />
      <Legend />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
      expect(canvas!.width).toBeGreaterThan(0);
    });
  },
});

export const AreaStyle = meta.story({
  render: () => (
    <LineChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Revenue',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          areaStyle: {},
        },
      ]}
    >
      <Title text="Revenue Area Chart" />
      <Tooltip />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});
