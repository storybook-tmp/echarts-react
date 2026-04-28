import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, EffectScatterChart, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story({
  render: () => (
    <EffectScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'effectScatter',
          data: [
            [10, 8], [8, 7], [13, 8], [9, 9], [11, 8],
            [14, 8], [6, 5], [12, 7], [7, 6], [15, 9],
          ],
          symbolSize: 15,
          rippleEffect: { brushType: 'stroke' },
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </EffectScatterChart>
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

export const CustomRipple = meta.story({
  render: () => (
    <EffectScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'effectScatter',
          data: [
            [15, 12], [10, 8], [20, 15], [5, 4], [25, 20],
          ],
          symbolSize: (val: number[]) => (val[1] ?? 0) * 2,
          rippleEffect: {
            scale: 4,
            brushType: 'fill',
            period: 3,
          },
          itemStyle: { color: '#c23531' },
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
  },
});
