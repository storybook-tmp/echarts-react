import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, ScatterChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story({
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
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
          ],
        },
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
    expect(canvas.height).toBeGreaterThan(0);
  },
});

export const MultiSeries = meta.story({
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'scatter',
          name: 'Group A',
          data: [
            [10, 8], [8, 7], [13, 8], [9, 9], [11, 8],
          ],
        },
        {
          type: 'scatter',
          name: 'Group B',
          data: [
            [6, 4], [5, 3], [7, 5], [4, 3], [8, 6],
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
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

export const WithTitle = meta.story({
  render: () => (
    <ScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ name: 'Height (cm)' }}
      yAxis={{ name: 'Weight (kg)' }}
      series={[
        {
          type: 'scatter',
          symbolSize: 12,
          data: [
            [161, 51], [167, 59], [159, 49], [157, 63], [155, 53],
            [170, 59], [159, 47], [166, 69], [176, 66], [160, 75],
            [172, 55], [170, 54], [165, 62], [155, 54], [174, 55],
          ],
        },
      ]}
    >
      <Title title={{ text: 'Height vs Weight', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.height).toBeGreaterThan(0);
  },
});
