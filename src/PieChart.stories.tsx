import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { PieChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 600, height: 400 };

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const Default = meta.story({
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={chartStyle}
      series={[
        {
          type: 'pie',
          radius: '50%',
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
      <Legend legend={{}} />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const DoughnutChart = meta.story({
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={chartStyle}
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
      <Title title={{ text: 'Doughnut Chart', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{ orient: 'vertical', left: 'left' }} />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
    await expect(canvas!.width).toBeGreaterThan(0);
  },
});

export const RoseChart = meta.story({
  render: () => (
    <PieChart
      use={CanvasRenderer}
      style={chartStyle}
      series={[
        {
          type: 'pie',
          radius: [20, 140],
          roseType: 'area',
          data: [
            { value: 40, name: 'Rose 1' },
            { value: 33, name: 'Rose 2' },
            { value: 28, name: 'Rose 3' },
            { value: 22, name: 'Rose 4' },
            { value: 20, name: 'Rose 5' },
          ],
        },
      ]}
    >
      <Title title={{ text: 'Rose Chart' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
