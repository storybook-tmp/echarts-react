import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, GraphChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export const Default = meta.story({
  render: () => (
    <GraphChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          data: [
            { name: 'Node 1', symbolSize: 50 },
            { name: 'Node 2', symbolSize: 30 },
            { name: 'Node 3', symbolSize: 40 },
            { name: 'Node 4', symbolSize: 25 },
            { name: 'Node 5', symbolSize: 35 },
          ],
          links: [
            { source: 'Node 1', target: 'Node 2' },
            { source: 'Node 1', target: 'Node 3' },
            { source: 'Node 2', target: 'Node 4' },
            { source: 'Node 3', target: 'Node 5' },
            { source: 'Node 4', target: 'Node 5' },
          ],
          force: {
            repulsion: 1000,
          },
          label: { show: true },
        },
      ]}
    >
      <Title text="Network Graph" />
      <Tooltip />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});

export const CircularLayout = meta.story({
  render: () => (
    <GraphChart
      use={[CanvasRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          roam: true,
          data: [
            { name: 'A', symbolSize: 40 },
            { name: 'B', symbolSize: 40 },
            { name: 'C', symbolSize: 40 },
            { name: 'D', symbolSize: 40 },
            { name: 'E', symbolSize: 40 },
            { name: 'F', symbolSize: 40 },
          ],
          links: [
            { source: 'A', target: 'B' },
            { source: 'B', target: 'C' },
            { source: 'C', target: 'D' },
            { source: 'D', target: 'E' },
            { source: 'E', target: 'F' },
            { source: 'F', target: 'A' },
          ],
          label: { show: true },
          lineStyle: { curveness: 0.3 },
        },
      ]}
    >
      <Title text="Circular Graph" />
      <Tooltip />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).toBeTruthy();
    });
  },
});
