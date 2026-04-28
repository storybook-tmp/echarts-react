import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { BarChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export const Default = meta.story({
  render: () => (
    <BarChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [120, 200, 150, 80, 70] }]}
    >
      <Title text="Weekly Sales" />
      <Tooltip />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});

export const Stacked = meta.story({
  render: () => (
    <BarChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Product A', stack: 'total', data: [320, 302, 301, 334] },
        { type: 'bar', name: 'Product B', stack: 'total', data: [120, 132, 101, 134] },
        { type: 'bar', name: 'Product C', stack: 'total', data: [220, 182, 191, 234] },
      ]}
    >
      <Title text="Quarterly Revenue" />
      <Tooltip />
      <Legend />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
      expect(canvas!.width).toBeGreaterThan(0);
    });
  },
});

export const Horizontal = meta.story({
  render: () => (
    <BarChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'] }}
      series={[{ type: 'bar', data: [18203, 23489, 29034, 104970, 131744] }]}
    >
      <Title text="World Population" />
      <Tooltip />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});
