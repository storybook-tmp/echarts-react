import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart } from './charts';
import { Title } from './components';
import { SVGRenderer } from 'echarts/renderers';

const meta = {
  component: BarChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <BarChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [120, 200, 150, 80, 70] }]}
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
    });
  },
};

export const Stacked: Story = {
  render: () => (
    <BarChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', data: [320, 332, 301, 334], stack: 'total', name: 'Direct' },
        { type: 'bar', data: [120, 132, 101, 134], stack: 'total', name: 'Referral' },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const rects = svg!.querySelectorAll('rect');
      expect(rects.length).toBeGreaterThan(0);
    });
  },
};

export const WithTitle: Story = {
  render: () => (
    <BarChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [50, 120, 90, 170, 130] }]}
    >
      <Title title={{ text: 'Monthly Sales' }} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Monthly Sales');
      expect(titleFound).toBe(true);
    });
  },
};
