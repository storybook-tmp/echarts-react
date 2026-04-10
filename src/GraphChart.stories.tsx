import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: GraphChart,
  tags: ['autodocs'],
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const ServiceDependencies: Story = {
  render: () => (
    <GraphChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      tooltip={{}}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          label: { show: true },
          force: {
            repulsion: 180,
          },
          data: [
            { id: 'gateway', name: 'Gateway', value: 20 },
            { id: 'auth', name: 'Auth', value: 18 },
            { id: 'billing', name: 'Billing', value: 16 },
            { id: 'search', name: 'Search', value: 14 },
          ],
          links: [
            { source: 'gateway', target: 'auth' },
            { source: 'gateway', target: 'billing' },
            { source: 'gateway', target: 'search' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const series = instance.getOption().series as Array<{
      layout?: string;
      roam?: boolean;
      data?: unknown[];
    }>;

    expect(getSeriesTypes(instance)).toEqual(['graph']);
    expect(series[0]?.layout).toBe('force');
    expect(series[0]?.roam).toBe(true);
    expect(series[0]?.data).toHaveLength(4);
  },
};

export const TeamMap: Story = {
  render: () => (
    <GraphChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      legend={{ top: 8 }}
      series={[
        {
          type: 'graph',
          layout: 'none',
          label: { show: true },
          categories: [{ name: 'Platform' }, { name: 'Go-to-market' }, { name: 'Support' }],
          data: [
            { id: 'eng', name: 'Engineering', x: 120, y: 120, category: 0 },
            { id: 'ops', name: 'Operations', x: 300, y: 120, category: 0 },
            { id: 'sales', name: 'Sales', x: 220, y: 240, category: 1 },
            { id: 'support', name: 'Support', x: 420, y: 240, category: 2 },
          ],
          links: [
            { source: 'eng', target: 'sales' },
            { source: 'ops', target: 'support' },
            { source: 'sales', target: 'support' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ categories?: unknown[]; layout?: string }>;

    expect(getSeriesTypes(instance)).toEqual(['graph']);
    expect((option.legend as Array<Record<string, unknown>>).length).toBe(1);
    expect(series[0]?.layout).toBe('none');
    expect(series[0]?.categories).toHaveLength(3);
  },
};

export const CircularHandOffs: Story = {
  render: () => (
    <GraphChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'Circular hand-offs', left: 'center' }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true,
          },
          lineStyle: {
            curveness: 0.2,
          },
          label: { show: true },
          data: [
            { id: 'plan', name: 'Plan' },
            { id: 'build', name: 'Build' },
            { id: 'review', name: 'Review' },
            { id: 'ship', name: 'Ship' },
          ],
          links: [
            { source: 'plan', target: 'build' },
            { source: 'build', target: 'review' },
            { source: 'review', target: 'ship' },
            { source: 'ship', target: 'plan' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{
      layout?: string;
      circular?: { rotateLabel?: boolean };
      lineStyle?: { curveness?: number };
    }>;

    expect(getSeriesTypes(instance)).toEqual(['graph']);
    expect((option.title as Array<{ text?: string }>)[0]?.text).toBe('Circular hand-offs');
    expect(series[0]?.layout).toBe('circular');
    expect(series[0]?.circular?.rotateLabel).toBe(true);
    expect(series[0]?.lineStyle?.curveness).toBe(0.2);
  },
};
