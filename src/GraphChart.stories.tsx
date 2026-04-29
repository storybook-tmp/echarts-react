import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { GraphChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: GraphChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <GraphChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          symbolSize: 50,
          roam: true,
          label: { show: true },
          force: { repulsion: 200 },
          data: [
            { name: 'Node 1' },
            { name: 'Node 2' },
            { name: 'Node 3' },
            { name: 'Node 4' },
            { name: 'Node 5' },
          ],
          links: [
            { source: 'Node 1', target: 'Node 2' },
            { source: 'Node 1', target: 'Node 3' },
            { source: 'Node 2', target: 'Node 4' },
            { source: 'Node 3', target: 'Node 5' },
            { source: 'Node 4', target: 'Node 5' },
          ],
        },
      ]}
    >
      <Title text="Network Graph" />
      <Tooltip />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};

export const Circular: Story = {
  render: () => (
    <GraphChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          symbolSize: 40,
          label: { show: true },
          data: [
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
            { name: 'D' },
            { name: 'E' },
            { name: 'F' },
          ],
          links: [
            { source: 'A', target: 'B' },
            { source: 'B', target: 'C' },
            { source: 'C', target: 'D' },
            { source: 'D', target: 'E' },
            { source: 'E', target: 'F' },
            { source: 'F', target: 'A' },
          ],
        },
      ]}
    >
      <Title text="Circular Layout" />
      <Tooltip />
    </GraphChart>
  ),
};
