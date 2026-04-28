import preview from '#.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import { CanvasRenderer, GraphChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

const graphNodes = [
  { id: '0', name: 'Node 0', symbolSize: 30, x: 100, y: 200 },
  { id: '1', name: 'Node 1', symbolSize: 20, x: 250, y: 100 },
  { id: '2', name: 'Node 2', symbolSize: 25, x: 250, y: 300 },
  { id: '3', name: 'Node 3', symbolSize: 15, x: 400, y: 150 },
  { id: '4', name: 'Node 4', symbolSize: 20, x: 400, y: 250 },
];

const graphLinks = [
  { source: '0', target: '1' },
  { source: '0', target: '2' },
  { source: '1', target: '3' },
  { source: '2', target: '4' },
  { source: '3', target: '4' },
];

export const Default = meta.story({
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'none',
          data: graphNodes,
          links: graphLinks,
          label: { show: true, position: 'right' },
          lineStyle: { curveness: 0.1 },
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.width).toBeGreaterThan(0);
    expect(canvas.height).toBeGreaterThan(0);
  },
});

export const ForceLayout = meta.story({
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          data: [
            { name: 'Center', symbolSize: 40 },
            { name: 'A', symbolSize: 25 },
            { name: 'B', symbolSize: 25 },
            { name: 'C', symbolSize: 20 },
            { name: 'D', symbolSize: 20 },
            { name: 'E', symbolSize: 15 },
          ],
          links: [
            { source: 'Center', target: 'A' },
            { source: 'Center', target: 'B' },
            { source: 'Center', target: 'C' },
            { source: 'A', target: 'D' },
            { source: 'B', target: 'E' },
          ],
          force: { repulsion: 200, edgeLength: 100 },
          label: { show: true },
          roam: true,
        },
      ]}
    >
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.width).toBeGreaterThan(0);
  },
});

export const Circular = meta.story({
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          data: Array.from({ length: 8 }, (_, i) => ({
            name: `Node ${i}`,
            symbolSize: 20,
          })),
          links: Array.from({ length: 8 }, (_, i) => ({
            source: `Node ${i}`,
            target: `Node ${(i + 1) % 8}`,
          })),
          circular: { rotateLabel: true },
          label: { show: true },
          lineStyle: { curveness: 0.3 },
        },
      ]}
    >
      <Title title={{ text: 'Circular Graph', left: 'center' }} />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const canvas = canvasElement.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas.height).toBeGreaterThan(0);
  },
});
