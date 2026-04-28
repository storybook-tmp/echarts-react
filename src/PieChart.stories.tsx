import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, Legend, PieChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story({
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: '60%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
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

export const Donut = meta.story({
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
          ],
        },
      ]}
    >
      <Title title={{ text: 'Traffic Sources', left: 'center' }} />
      <Legend legend={{ orient: 'vertical', left: 'left' }} />
    </PieChart>
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

export const RoseChart = meta.story({
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: [20, 140],
          roseType: 'area',
          data: [
            { value: 40, name: 'Rose 1' },
            { value: 38, name: 'Rose 2' },
            { value: 32, name: 'Rose 3' },
            { value: 30, name: 'Rose 4' },
            { value: 28, name: 'Rose 5' },
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
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
