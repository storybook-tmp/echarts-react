import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { GraphChart, Title, Tooltip } from './index.js';

const chartStyle = {
  width: 640,
  height: 360,
};

const graphNodes = [
  { id: 'design', name: 'Design', symbolSize: 56 },
  { id: 'frontend', name: 'Frontend', symbolSize: 64 },
  { id: 'platform', name: 'Platform', symbolSize: 52 },
  { id: 'qa', name: 'QA', symbolSize: 44 },
  { id: 'growth', name: 'Growth', symbolSize: 48 },
];

const graphLinks = [
  { source: 'design', target: 'frontend' },
  { source: 'frontend', target: 'platform' },
  { source: 'frontend', target: 'qa' },
  { source: 'growth', target: 'frontend' },
  { source: 'qa', target: 'platform' },
];

type GraphChartStoryArgs = Parameters<typeof GraphChart>[0];

const meta = {
  component: GraphChart,
} satisfies Meta<GraphChartStoryArgs>;

export default meta;
type Story = StoryObj<GraphChartStoryArgs>;
const noArgs = {} as never;

const createChartPlay = (label: RegExp): NonNullable<Story['play']> => {
  return async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: label });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      const renderedCanvas = chart.querySelector('canvas');
      expect(renderedCanvas).not.toBeNull();
      expect(renderedCanvas?.width ?? 0).toBeGreaterThan(0);
      expect(renderedCanvas?.height ?? 0).toBeGreaterThan(0);
    });
  };
};

export const ForceDirected: Story = {
  args: noArgs,
  render: () => (
    <GraphChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Force directed graph chart' }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          label: { show: true },
          force: { repulsion: 180, edgeLength: 90 },
          data: graphNodes,
          links: graphLinks,
        },
      ]}
    />
  ),
  play: createChartPlay(/force directed graph chart/i),
};

export const CircularOverview: Story = {
  args: noArgs,
  render: () => (
    <GraphChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Circular overview graph chart' }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          circular: { rotateLabel: true },
          lineStyle: { curveness: 0.2 },
          label: { show: true },
          data: graphNodes,
          links: graphLinks,
        },
      ]}
    >
      <Title title={{ text: 'Cross-team collaboration', left: 'center', top: 12 }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
  play: createChartPlay(/circular overview graph chart/i),
};

export const WeightedNetwork: Story = {
  args: noArgs,
  render: () => (
    <GraphChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Weighted network graph chart' }}
      series={[
        {
          type: 'graph',
          layout: 'none',
          roam: true,
          label: { show: true },
          edgeLabel: { show: true, formatter: '{c}' },
          data: [
            { id: 'api', name: 'API', x: 120, y: 130, symbolSize: 58 },
            { id: 'worker', name: 'Worker', x: 270, y: 80, symbolSize: 50 },
            { id: 'queue', name: 'Queue', x: 400, y: 180, symbolSize: 42 },
            { id: 'dashboard', name: 'Dashboard', x: 230, y: 260, symbolSize: 46 },
          ],
          links: [
            { source: 'api', target: 'worker', value: 12 },
            { source: 'worker', target: 'queue', value: 4 },
            { source: 'api', target: 'dashboard', value: 3 },
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
  play: createChartPlay(/weighted network graph chart/i),
};
