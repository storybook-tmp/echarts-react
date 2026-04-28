import preview from '../.storybook/preview';
import { expect } from 'storybook/test';
import { GraphChart, CanvasRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 600, height: 400 };

const meta = preview.meta({
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
});

export const Default = meta.story({
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={chartStyle}
      series={[
        {
          type: 'graph',
          layout: 'force',
          symbolSize: 40,
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
      <Title title={{ text: 'Network Graph' }} />
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});

export const CircularLayout = meta.story({
  render: () => (
    <GraphChart
      use={CanvasRenderer}
      style={chartStyle}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          symbolSize: 30,
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
      <Tooltip tooltip={{}} />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).toBeTruthy();
  },
});
