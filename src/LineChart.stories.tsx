import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { LineChart } from './charts';
import { Title, Tooltip, Legend } from './components';
import { SVGRenderer } from 'echarts/renderers';

const meta = {
  component: LineChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <LineChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }]}
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const paths = svg!.querySelectorAll('path');
      expect(paths.length).toBeGreaterThan(0);
    });
  },
};

export const AreaChart: Story = {
  render: () => (
    <LineChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [820, 932, 901, 934, 1290, 1330], areaStyle: {} }]}
    >
      <Title title={{ text: 'Area Chart' }} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Area Chart');
      expect(titleFound).toBe(true);
    });
  },
};

export const MultiLine: Story = {
  render: () => (
    <LineChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [120, 132, 101, 134, 90], name: 'Series A' },
        { type: 'line', data: [220, 182, 191, 234, 290], name: 'Series B' },
        { type: 'line', data: [150, 232, 201, 154, 190], name: 'Series C' },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const legendA = Array.from(textEls).some((el) => el.textContent === 'Series A');
      expect(legendA).toBe(true);
    });
  },
};
