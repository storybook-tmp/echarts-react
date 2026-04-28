import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { ScatterChart, CanvasRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 600, height: 400 };

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const Default = meta.story({
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{}}
      yAxis={{}}
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
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const WithTitle = meta.story({
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={chartStyle}
      xAxis={{ name: 'Height (cm)' }}
      yAxis={{ name: 'Weight (kg)' }}
      series={[
        {
          type: 'scatter',
          symbolSize: 12,
          data: [
            [161, 51],
            [167, 59],
            [159, 49],
            [157, 63],
            [155, 53],
            [170, 59],
            [159, 47],
            [166, 69],
            [176, 66],
            [160, 75],
            [172, 55],
            [170, 62],
          ],
        },
      ]}
    >
      <Title title={{ text: 'Height vs Weight' }} />
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
