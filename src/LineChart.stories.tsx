import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, Legend, LineChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story({
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [820, 932, 901, 934, 1290] }]}
    />
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

export const MultiSeries = meta.story({
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', name: 'Email', data: [120, 132, 101, 134, 90, 230, 210] },
        { type: 'line', name: 'Video Ads', data: [220, 182, 191, 234, 290, 330, 310] },
        { type: 'line', name: 'Direct', data: [320, 332, 301, 334, 390, 330, 320] },
      ]}
    >
      <Legend legend={{ bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
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

export const AreaChart = meta.story({
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Downloads',
          data: [820, 932, 901, 934, 1290],
          areaStyle: {},
        },
      ]}
    >
      <Title title={{ text: 'Weekly Downloads', left: 'center' }} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.height).toBeGreaterThan(0);
  },
});
