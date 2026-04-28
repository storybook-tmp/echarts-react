import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { BarChart, CanvasRenderer, Legend, LineChart, ScatterChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const LineAndBar = meta.story({
  render: () => (
    <LineChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Revenue', data: [200, 300, 250, 400, 350, 500] },
        { type: 'line', name: 'Trend', data: [180, 280, 260, 380, 340, 480], smooth: true },
      ]}
    >
      <Title title={{ text: 'Revenue with Trend Line', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{ bottom: 0 }} />
    </LineChart>
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

export const ScatterAndLine = meta.story({
  render: () => (
    <LineChart
      compose={[ScatterChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'scatter',
          name: 'Data Points',
          data: [
            [1, 2], [2, 3], [3, 5], [4, 4], [5, 7],
            [6, 6], [7, 8], [8, 9], [9, 10], [10, 12],
          ],
        },
        {
          type: 'line',
          name: 'Fit Line',
          data: [
            [1, 2], [5, 6], [10, 11],
          ],
          lineStyle: { type: 'dashed' },
          showSymbol: false,
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{ bottom: 0 }} />
    </LineChart>
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
