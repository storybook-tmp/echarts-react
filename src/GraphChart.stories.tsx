import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { GraphChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const graphChartStyle = { width: '100%', height: 420, maxWidth: 760 };

const meta = {
  component: GraphChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const DependencyMap: Story = {
  args: {},
  render: () => (
    <GraphChart
      use={SVGRenderer}
      style={graphChartStyle}
      title={{ text: 'Dependency map', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'graph',
          layout: 'none',
          roam: true,
          label: { show: true },
          data: [
            { name: 'App shell', x: 220, y: 120, symbolSize: 64 },
            { name: 'Charts', x: 420, y: 90, symbolSize: 54 },
            { name: 'Legend', x: 560, y: 180, symbolSize: 42 },
            { name: 'Tooltip', x: 410, y: 270, symbolSize: 42 },
          ],
          links: [
            { source: 'App shell', target: 'Charts' },
            { source: 'Charts', target: 'Legend' },
            { source: 'Charts', target: 'Tooltip' },
          ],
          lineStyle: { width: 3, color: '#94a3b8' },
        },
      ]}
    >
      <Title text="Dependency map" left="center" />
      <Tooltip trigger="item" />
    </GraphChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Dependency map')).toBeVisible());
    await expect(canvas.getByText('App shell')).toBeVisible();
    await expect(canvas.getByText('Tooltip')).toBeVisible();
  },
};

export const CircularNetwork: Story = {
  args: {},
  render: () => (
    <GraphChart
      use={SVGRenderer}
      style={graphChartStyle}
      title={{ text: 'Circular network', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          roam: true,
          label: { show: true },
          data: [
            { name: 'Alpha', symbolSize: 58 },
            { name: 'Beta', symbolSize: 48 },
            { name: 'Gamma', symbolSize: 44 },
            { name: 'Delta', symbolSize: 40 },
          ],
          links: [
            { source: 'Alpha', target: 'Beta' },
            { source: 'Beta', target: 'Gamma' },
            { source: 'Gamma', target: 'Delta' },
            { source: 'Delta', target: 'Alpha' },
          ],
          lineStyle: { curveness: 0.2, width: 2 },
        },
      ]}
    >
      <Title text="Circular network" left="center" />
      <Tooltip trigger="item" />
    </GraphChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Circular network')).toBeVisible());
    await expect(canvas.getByText('Alpha')).toBeVisible();
    await expect(canvas.getByText('Delta')).toBeVisible();
  },
};

export const ForceLinks: Story = {
  args: {},
  render: () => (
    <GraphChart
      use={SVGRenderer}
      style={graphChartStyle}
      title={{ text: 'Force links', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          force: { repulsion: 180, edgeLength: 110 },
          label: { show: true },
          data: [
            { name: 'UI', symbolSize: 58 },
            { name: 'Data', symbolSize: 52 },
            { name: 'State', symbolSize: 46 },
            { name: 'Tests', symbolSize: 44 },
          ],
          links: [
            { source: 'UI', target: 'Data' },
            { source: 'Data', target: 'State' },
            { source: 'State', target: 'Tests' },
            { source: 'Tests', target: 'UI' },
          ],
          lineStyle: { width: 2, color: '#64748b' },
        },
      ]}
    >
      <Title text="Force links" left="center" />
      <Tooltip trigger="item" />
    </GraphChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Force links')).toBeVisible());
    await expect(canvas.getByText('UI')).toBeVisible();
    await expect(canvas.getByText('Tests')).toBeVisible();
  },
};
