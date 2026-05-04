import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { GraphChart, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 560, height: 360 };

const meta = {
  component: GraphChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ForceNetwork: Story = {
  render: () => (
    <GraphChart
      containerProps={{ role: 'img', 'aria-label': 'Force network graph chart' }}
      style={chartStyle}
      series={{
        type: 'graph',
        layout: 'force',
        roam: false,
        force: {
          repulsion: 160,
          edgeLength: 70,
        },
        data: [
          { name: 'API', symbolSize: 54 },
          { name: 'Auth', symbolSize: 42 },
          { name: 'Billing', symbolSize: 36 },
          { name: 'Search', symbolSize: 34 },
          { name: 'Exports', symbolSize: 30 },
        ],
        links: [
          { source: 'API', target: 'Auth' },
          { source: 'API', target: 'Billing' },
          { source: 'API', target: 'Search' },
          { source: 'Search', target: 'Exports' },
        ],
      }}
    >
      <Title title={{ text: 'Service map', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Force network graph chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const CircularTeams: Story = {
  render: () => (
    <GraphChart
      containerProps={{ role: 'img', 'aria-label': 'Circular team graph chart' }}
      style={chartStyle}
      series={{
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true,
        },
        categories: [{ name: 'Product' }, { name: 'Platform' }],
        data: [
          { name: 'Design', category: 'Product', symbolSize: 32 },
          { name: 'Research', category: 'Product', symbolSize: 28 },
          { name: 'Frontend', category: 'Platform', symbolSize: 36 },
          { name: 'Backend', category: 'Platform', symbolSize: 36 },
        ],
        links: [
          { source: 'Design', target: 'Frontend' },
          { source: 'Research', target: 'Design' },
          { source: 'Frontend', target: 'Backend' },
          { source: 'Backend', target: 'Research' },
        ],
      }}
    >
      <Legend legend={{ bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Circular team graph chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const DependencyMap: Story = {
  render: () => (
    <GraphChart
      containerProps={{ role: 'img', 'aria-label': 'Dependency graph chart' }}
      style={chartStyle}
      series={{
        type: 'graph',
        layout: 'none',
        data: [
          { name: 'CLI', x: 80, y: 160, symbolSize: 42 },
          { name: 'Core', x: 240, y: 120, symbolSize: 56 },
          { name: 'React', x: 400, y: 90, symbolSize: 40 },
          { name: 'ECharts', x: 400, y: 230, symbolSize: 40 },
        ],
        links: [
          { source: 'CLI', target: 'Core' },
          { source: 'Core', target: 'React' },
          { source: 'Core', target: 'ECharts' },
        ],
        lineStyle: {
          curveness: 0.15,
        },
      }}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Dependency graph chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
