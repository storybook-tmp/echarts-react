import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { PieChart } from './charts';
import { Title, Tooltip, Legend } from './components';
import { SVGRenderer } from 'echarts/renderers';

const meta = {
  component: PieChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const pieData = [
  { value: 1048, name: 'Search' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Social' },
  { value: 300, name: 'Video' },
];

export const Default: Story = {
  render: () => (
    <PieChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      series={[{ type: 'pie', data: pieData, radius: '60%' }]}
    >
      <Title title={{ text: 'Traffic Sources' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Traffic Sources');
      expect(titleFound).toBe(true);
    });
  },
};

export const Donut: Story = {
  render: () => (
    <PieChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      series={[{ type: 'pie', data: pieData, radius: ['40%', '70%'] }]}
    >
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const searchLabel = Array.from(textEls).some((el) => el.textContent === 'Search');
      expect(searchLabel).toBe(true);
    });
  },
};

export const RoseType: Story = {
  render: () => (
    <PieChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      series={[{ type: 'pie', data: pieData, radius: ['20%', '70%'], roseType: 'area' }]}
    >
      <Title title={{ text: 'Nightingale Chart' }} />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Nightingale Chart');
      expect(titleFound).toBe(true);
    });
  },
};
