import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { ScatterChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: ScatterChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <ScatterChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'scatter',
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
          ],
        },
      ]}
    >
      <Title text="Scatter Plot" />
      <Tooltip />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};

export const BubbleSize: Story = {
  render: () => (
    <ScatterChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value', name: 'Height (cm)' }}
      yAxis={{ type: 'value', name: 'Weight (kg)' }}
      series={[
        {
          type: 'scatter',
          symbolSize: (val: number[]) => (val[2] ?? 1) * 2,
          data: [
            [161, 51, 10],
            [167, 59, 15],
            [159, 49, 8],
            [157, 63, 12],
            [155, 53, 6],
            [170, 69, 20],
            [159, 47, 9],
            [166, 69, 18],
            [176, 82, 25],
            [187, 105, 30],
          ],
        },
      ]}
    >
      <Title text="Height vs Weight" />
      <Tooltip />
    </ScatterChart>
  ),
};
