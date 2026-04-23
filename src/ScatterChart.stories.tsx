import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { ScatterChart, Title, Tooltip, VisualMap } from '@fanciers/echarts-react';

const chartStyle = { width: 560, height: 340 };

const meta = {
  component: ScatterChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SimpleScatter: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Simple scatter chart' }}
      style={chartStyle}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={{
        name: 'Samples',
        type: 'scatter',
        symbolSize: 14,
        data: [
          [10, 8],
          [18, 12],
          [24, 18],
          [31, 30],
          [39, 34],
          [52, 47],
        ],
      }}
    >
      <Title title={{ text: 'Sample distribution', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Simple scatter chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const QuadrantMap: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Priority quadrant scatter chart' }}
      style={chartStyle}
      xAxis={{ type: 'value', name: 'Effort' }}
      yAxis={{ type: 'value', name: 'Impact' }}
      series={{
        name: 'Initiatives',
        type: 'scatter',
        symbolSize: 18,
        data: [
          [12, 72],
          [30, 54],
          [48, 88],
          [62, 36],
          [76, 68],
          [88, 22],
        ],
      }}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Priority quadrant scatter chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const WithVisualMap: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Segmented scatter chart' }}
      style={chartStyle}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={{
        name: 'Accounts',
        type: 'scatter',
        symbolSize: 16,
        data: [
          [15, 22, 10],
          [24, 35, 24],
          [35, 48, 42],
          [44, 52, 63],
          [53, 68, 88],
          [66, 81, 95],
        ],
      }}
    >
      <VisualMap visualMap={{ min: 0, max: 100, dimension: 2, right: 10, top: 'middle' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Segmented scatter chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
