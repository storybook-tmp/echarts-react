import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { GraphChart } from './charts';
import { Title, Tooltip } from './components';
import { SVGRenderer } from 'echarts/renderers';

const meta = {
  component: GraphChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const graphData = {
  nodes: [
    { id: '0', name: 'Node A', symbolSize: 50 },
    { id: '1', name: 'Node B', symbolSize: 30 },
    { id: '2', name: 'Node C', symbolSize: 40 },
    { id: '3', name: 'Node D', symbolSize: 35 },
    { id: '4', name: 'Node E', symbolSize: 25 },
  ],
  links: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '4' },
    { source: '3', target: '4' },
  ],
};

export const Default: Story = {
  render: () => (
    <GraphChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          data: graphData.nodes,
          links: graphData.links,
          label: { show: true, position: 'right' },
          force: { repulsion: 200, edgeLength: 100 },
        },
      ]}
    >
      <Title title={{ text: 'Network Graph' }} />
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Network Graph');
      expect(titleFound).toBe(true);
    });
  },
};

export const CircularLayout: Story = {
  render: () => (
    <GraphChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          data: graphData.nodes,
          links: graphData.links,
          label: { show: true, position: 'right' },
          circular: { rotateLabel: true },
        },
      ]}
    >
      <Title title={{ text: 'Circular Graph' }} />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Circular Graph');
      expect(titleFound).toBe(true);
    });
  },
};
