import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { BarChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story({
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [120, 200, 150, 80, 70] }]}
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

export const Stacked = meta.story({
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Product A', stack: 'total', data: [320, 302, 301, 334] },
        { type: 'bar', name: 'Product B', stack: 'total', data: [120, 132, 101, 134] },
        { type: 'bar', name: 'Product C', stack: 'total', data: [220, 182, 191, 234] },
      ]}
    />
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

export const WithComponents = meta.story({
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Sales', data: [50, 80, 60, 90, 70, 110] },
        { type: 'bar', name: 'Profit', data: [30, 50, 40, 60, 45, 75] },
      ]}
    >
      <Title title={{ text: 'Monthly Revenue', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{ bottom: 0 }} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const container = canvasElement.querySelector('div')!;
    expect(container.style.width).toBe('600px');
    expect(container.style.height).toBe('400px');
  },
});
