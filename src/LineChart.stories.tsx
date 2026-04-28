import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { LineChart, CanvasRenderer, Legend, Title, Tooltip, MarkLine, MarkPoint } from '@fanciers/echarts-react';

const chartStyle = { width: 600, height: 400 };

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const Default = meta.story({
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [820, 932, 901, 934, 1290, 1330, 1320] }]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const MultipleLines = meta.story({
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', name: 'Email', data: [120, 132, 101, 134, 90, 230] },
        { type: 'line', name: 'Search', data: [220, 182, 191, 234, 290, 330] },
        { type: 'line', name: 'Direct', data: [320, 332, 301, 334, 390, 330] },
      ]}
    >
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Title title={{ text: 'Traffic Sources' }} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
    await expect(canvas!.height).toBeGreaterThan(0);
  },
});

export const WithMarkLineAndPoint = meta.story({
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          data: [150, 230, 224, 218, 135],
          markLine: { data: [{ type: 'average', name: 'Avg' }] },
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
        },
      ]}
    >
      <MarkLine />
      <MarkPoint />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
