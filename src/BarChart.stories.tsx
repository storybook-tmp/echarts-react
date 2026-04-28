import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { BarChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 600, height: 400 };

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const Default = meta.story({
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [120, 200, 150, 80, 70] }]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const WithTitleAndTooltip = meta.story({
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [50, 120, 90, 200, 160] }]}
    >
      <Title title={{ text: 'Monthly Revenue' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
    await expect(canvas!.width).toBeGreaterThan(0);
  },
});

export const MultipleSeries = meta.story({
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: '2023', data: [100, 150, 200, 180] },
        { type: 'bar', name: '2024', data: [130, 170, 220, 210] },
      ]}
    >
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
