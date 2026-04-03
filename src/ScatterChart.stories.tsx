import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: ScatterChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScatterChart
      style={{ width: '100%', height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={{
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
      }}
    />
  ),
};

export const BubbleChart: Story = {
  render: () => (
    <ScatterChart
      style={{ width: '100%', height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={{
        type: 'scatter',
        symbolSize: (val: number[]) => (val[2] ?? 0) * 2,
        data: [
          [10, 8, 15],
          [8, 7, 10],
          [13, 8, 20],
          [9, 9, 8],
          [11, 8, 12],
          [14, 8, 25],
          [6, 7, 18],
          [4, 5, 6],
          [12, 7, 14],
          [3, 4, 9],
        ],
      }}
    />
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <ScatterChart
      style={{ width: '100%', height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'scatter',
          name: 'Group A',
          data: [
            [10, 8],
            [8, 7],
            [13, 8],
            [9, 9],
            [11, 8],
          ],
        },
        {
          type: 'scatter',
          name: 'Group B',
          data: [
            [14, 8],
            [6, 7],
            [4, 5],
            [12, 7],
            [3, 4],
          ],
        },
      ]}
    />
  ),
};
