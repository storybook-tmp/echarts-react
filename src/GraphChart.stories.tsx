import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart } from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';

const meta = {
  component: GraphChart,
} satisfies Meta<typeof GraphChart>;

export default meta;

type Story = StoryObj;

export const DependencyMap: Story = {
  render: () => (
    <GraphChart
      containerProps={{ role: 'img', 'aria-label': 'Dependency map' }}
      style={chartStyle}
      title={{ text: 'Dependency map', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'graph',
          layout: 'none',
          roam: false,
          label: { show: true },
          data: [
            { name: 'API', x: 120, y: 90 },
            { name: 'Queue', x: 280, y: 60 },
            { name: 'Worker', x: 360, y: 170 },
            { name: 'UI', x: 120, y: 220 },
          ],
          links: [
            { source: 'UI', target: 'API' },
            { source: 'API', target: 'Queue' },
            { source: 'Queue', target: 'Worker' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Dependency map' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Dependency map', 'API', 'Worker', 'UI']);
  },
};

export const CircularOwnership: Story = {
  render: () => (
    <GraphChart
      containerProps={{ role: 'img', 'aria-label': 'Circular ownership' }}
      style={chartStyle}
      title={{ text: 'Circular ownership', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true,
          },
          label: { show: true },
          categories: [{ name: 'Platform' }, { name: 'Product' }],
          data: [
            { name: 'Auth', category: 0 },
            { name: 'Billing', category: 0 },
            { name: 'Growth', category: 1 },
            { name: 'Onboarding', category: 1 },
          ],
          links: [
            { source: 'Auth', target: 'Billing' },
            { source: 'Billing', target: 'Growth' },
            { source: 'Growth', target: 'Onboarding' },
            { source: 'Onboarding', target: 'Auth' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Circular ownership' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Circular ownership', 'Auth', 'Growth']);
  },
};

export const ForceDirectedTeams: Story = {
  render: () => (
    <GraphChart
      containerProps={{ role: 'img', 'aria-label': 'Force directed teams' }}
      style={chartStyle}
      title={{ text: 'Force directed teams', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          label: { show: true },
          force: {
            repulsion: 180,
            edgeLength: 90,
          },
          data: [
            { name: 'Design' },
            { name: 'Platform' },
            { name: 'Infra' },
            { name: 'Growth' },
            { name: 'Support' },
          ],
          links: [
            { source: 'Design', target: 'Growth' },
            { source: 'Platform', target: 'Infra' },
            { source: 'Growth', target: 'Support' },
            { source: 'Support', target: 'Platform' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Force directed teams' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Force directed teams', 'Design', 'Infra', 'Support']);
  },
};

const chartStyle = {
  width: 560,
  height: 360,
} satisfies CSSProperties;

async function expectSvgLabels(canvasElement: HTMLElement, labels: string[]) {
  await waitFor(() => {
    const textContent = canvasElement.querySelector('svg')?.textContent ?? '';

    expect(textContent.length).toBeGreaterThan(0);

    for (const label of labels) {
      expect(textContent).toContain(label);
    }
  });
}
