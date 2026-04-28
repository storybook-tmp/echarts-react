import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, Legend, PieChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export const Default = meta.story({
  render: () => (
    <PieChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Social' },
            { value: 300, name: 'Video' },
          ],
        },
      ]}
    >
      <Title text="Traffic Sources" />
      <Tooltip />
      <Legend />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});

export const Doughnut = meta.story({
  render: () => (
    <PieChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 1048, name: 'Search' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Social' },
          ],
        },
      ]}
    >
      <Title text="Doughnut Chart" />
      <Tooltip />
      <Legend />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});

export const RoseChart = meta.story({
  render: () => (
    <PieChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: [20, 140],
          roseType: 'area',
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
          ],
        },
      ]}
    >
      <Title text="Rose Chart" />
      <Tooltip />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});
