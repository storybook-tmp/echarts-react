import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart, CanvasRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: GraphChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const nodes = [
  { id: '0', name: 'Node 0', symbolSize: 30, x: 100, y: 200 },
  { id: '1', name: 'Node 1', symbolSize: 20, x: 200, y: 100 },
  { id: '2', name: 'Node 2', symbolSize: 25, x: 300, y: 200 },
  { id: '3', name: 'Node 3', symbolSize: 15, x: 200, y: 300 },
  { id: '4', name: 'Node 4', symbolSize: 20, x: 400, y: 100 },
  { id: '5', name: 'Node 5', symbolSize: 18, x: 400, y: 300 },
];

const links = [
  { source: '0', target: '1' },
  { source: '0', target: '2' },
  { source: '0', target: '3' },
  { source: '1', target: '2' },
  { source: '2', target: '4' },
  { source: '2', target: '5' },
  { source: '4', target: '5' },
];

export const Basic: Story = {
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[{
        type: 'graph',
        layout: 'none',
        data: nodes,
        links,
        label: { show: true, position: 'right', formatter: '{b}' },
        lineStyle: { color: 'source', curveness: 0.3 },
      }]}
    >
      <Title title={{ text: 'Graph Chart' }} />
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
};

export const ForceLayout: Story = {
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[{
        type: 'graph',
        layout: 'force',
        data: nodes.map(({ x, y, ...rest }) => rest),
        links,
        roam: true,
        label: { show: true, position: 'right' },
        force: { repulsion: 100 },
      }]}
    >
      <Title title={{ text: 'Force-Directed Graph' }} />
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
};

export const Circular: Story = {
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[{
        type: 'graph',
        layout: 'circular',
        data: nodes.map(({ x, y, ...rest }) => rest),
        links,
        roam: true,
        label: { show: true, position: 'right' },
        lineStyle: { curveness: 0.3 },
      }]}
    >
      <Title title={{ text: 'Circular Layout' }} />
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
};
