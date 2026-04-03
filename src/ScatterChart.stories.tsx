import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart, CanvasRenderer, Title, Tooltip, MarkLine, MarkPoint } from '@fanciers/echarts-react';

const meta: Meta = {
  component: ScatterChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const scatterData = [
  [10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81], [11.0, 8.33],
  [14.0, 7.66], [13.4, 6.81], [10.0, 6.33], [14.0, 8.96], [12.5, 6.82],
  [9.15, 7.2], [11.5, 7.2], [3.03, 4.23], [12.2, 7.83], [2.02, 4.47],
  [1.05, 3.33], [4.05, 4.96], [6.03, 7.24], [12.0, 6.26], [12.0, 8.84],
];

export const Basic: Story = {
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[{ type: 'scatter', data: scatterData }]}
    >
      <Title title={{ text: 'Scatter Plot' }} />
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
};

export const WithMarkLine: Story = {
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[{
        type: 'scatter',
        data: scatterData,
        markLine: { data: [{ type: 'average', name: 'Avg' }] },
      }]}
    >
      <MarkLine />
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
};

export const WithMarkPoint: Story = {
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[{
        type: 'scatter',
        data: scatterData,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
      }]}
    >
      <MarkPoint />
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
};
