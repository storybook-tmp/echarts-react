import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = {
  component: GraphChart,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const DependencyGraph: Story = {
  render: () => (
    <GraphChart
      style={{ width: '100%', height: 380 }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          draggable: true,
          force: {
            repulsion: 220,
            edgeLength: [80, 140],
          },
          label: {
            show: true,
          },
          lineStyle: {
            opacity: 0.7,
            width: 2,
            curveness: 0.12,
          },
          data: [
            { id: 'core', name: 'core', value: 6, symbolSize: 56 },
            { id: 'charts', name: 'charts', value: 4, symbolSize: 44 },
            { id: 'components', name: 'components', value: 4, symbolSize: 44 },
            { id: 'features', name: 'features', value: 2, symbolSize: 34 },
            { id: 'storybook', name: 'storybook', value: 3, symbolSize: 38 },
          ],
          links: [
            { source: 'core', target: 'charts' },
            { source: 'core', target: 'components' },
            { source: 'core', target: 'features' },
            { source: 'charts', target: 'storybook' },
            { source: 'components', target: 'storybook' },
          ],
        },
      ]}
    >
      <Title text="Package dependency graph" left="center" />
      <Tooltip />
    </GraphChart>
  ),
};
