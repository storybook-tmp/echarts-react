import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { HeatmapChart } from './charts';
import { Title, Tooltip, VisualMap } from './components';
import { SVGRenderer } from 'echarts/renderers';
import { GridComponent } from 'echarts/components';

const meta = {
  component: HeatmapChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const hours = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const days = ['Morning', 'Afternoon', 'Evening'];

const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0],
  [1, 0, 7], [1, 1, 3], [1, 2, 2],
  [2, 0, 4], [2, 1, 6], [2, 2, 8],
  [3, 0, 1], [3, 1, 9], [3, 2, 4],
  [4, 0, 6], [4, 1, 2], [4, 2, 7],
];

export const Default: Story = {
  render: () => (
    <HeatmapChart
      use={[SVGRenderer, GridComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
        },
      ]}
    >
      <Title title={{ text: 'Weekly Activity' }} />
      <Tooltip tooltip={{}} />
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: 0 }} />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Weekly Activity');
      expect(titleFound).toBe(true);
    });
  },
};

export const WithVisualMap: Story = {
  render: () => (
    <HeatmapChart
      use={[SVGRenderer, GridComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: hours }}
      yAxis={{ type: 'category', data: days }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
        },
      ]}
    >
      <Title title={{ text: 'Heatmap with Color Scale' }} />
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: 0 }} />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Heatmap with Color Scale');
      expect(titleFound).toBe(true);
    });
  },
};
