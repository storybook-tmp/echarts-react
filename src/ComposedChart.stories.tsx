import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { BarChart, LineChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 600, height: 400 };

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const LineAndBar = meta.story({
  render: () => (
    <LineChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Revenue', data: [200, 300, 250, 400, 350, 450] },
        { type: 'line', name: 'Growth', data: [180, 280, 260, 380, 340, 470] },
      ]}
    >
      <Title title={{ text: 'Revenue & Growth' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const StackedBars = meta.story({
  render: () => (
    <LineChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Product A', stack: 'total', data: [320, 302, 301, 334] },
        { type: 'bar', name: 'Product B', stack: 'total', data: [120, 132, 101, 134] },
        { type: 'line', name: 'Total', data: [440, 434, 402, 468] },
      ]}
    >
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
