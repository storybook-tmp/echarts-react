import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { EffectScatterChart, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 560, height: 340 };

const meta = {
  component: EffectScatterChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const LiveIncidents: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Live incidents effect scatter chart' }}
      style={chartStyle}
      xAxis={{ type: 'value', name: 'Latency' }}
      yAxis={{ type: 'value', name: 'Volume' }}
      series={{
        name: 'Incidents',
        type: 'effectScatter',
        symbolSize: 18,
        rippleEffect: {
          brushType: 'stroke',
        },
        data: [
          [12, 32],
          [28, 51],
          [36, 42],
          [48, 76],
          [67, 58],
        ],
      }}
    >
      <Title title={{ text: 'Live incidents', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </EffectScatterChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Live incidents effect scatter chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const RankedSignals: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Ranked signals effect scatter chart' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: ['Auth', 'API', 'Billing', 'Search', 'Export'],
      }}
      yAxis={{ type: 'value' }}
      series={{
        name: 'Risk',
        type: 'effectScatter',
        symbolSize: 20,
        data: [18, 35, 24, 47, 30],
      }}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </EffectScatterChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Ranked signals effect scatter chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const ComparedSignals: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Compared signals effect scatter chart' }}
      style={chartStyle}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={[
        {
          name: 'Current',
          type: 'effectScatter',
          symbolSize: 18,
          data: [
            [18, 24],
            [34, 45],
            [56, 63],
          ],
        },
        {
          name: 'Baseline',
          type: 'effectScatter',
          symbolSize: 12,
          data: [
            [14, 18],
            [30, 38],
            [52, 51],
          ],
        },
      ]}
    >
      <Legend legend={{ bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </EffectScatterChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Compared signals effect scatter chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
