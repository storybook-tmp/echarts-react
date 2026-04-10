import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { EffectScatterChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const effectScatterStyle = { width: '100%', height: 380, maxWidth: 760 };

const meta = {
  component: EffectScatterChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const HighlightedLeads: Story = {
  args: {},
  render: () => (
    <EffectScatterChart
      use={SVGRenderer}
      style={effectScatterStyle}
      title={{ text: 'Highlighted leads', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Score' }}
      yAxis={{ type: 'value', name: 'Priority' }}
      series={[
        {
          type: 'effectScatter',
          rippleEffect: { scale: 4 },
          symbolSize: 16,
          data: [
            [72, 82],
            [88, 93],
            [95, 86],
          ],
        },
      ]}
    >
      <Title text="Highlighted leads" left="center" />
      <Tooltip trigger="item" />
    </EffectScatterChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Highlighted leads')).toBeVisible());
    await expect(canvas.getByText('Score')).toBeVisible();
    await expect(canvas.getByText('Priority')).toBeVisible();
  },
};

export const IncidentEscalations: Story = {
  args: {},
  render: () => (
    <EffectScatterChart
      use={SVGRenderer}
      style={effectScatterStyle}
      title={{ text: 'Incident escalations', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Time to detect' }}
      yAxis={{ type: 'value', name: 'Impact' }}
      series={[
        {
          type: 'effectScatter',
          rippleEffect: { scale: 5 },
          symbolSize: 18,
          data: [
            [12, 88],
            [18, 72],
            [24, 95],
          ],
          itemStyle: { color: '#dc2626' },
        },
      ]}
    >
      <Title text="Incident escalations" left="center" />
      <Tooltip trigger="item" />
    </EffectScatterChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Incident escalations')).toBeVisible());
    await expect(canvas.getByText('Time to detect')).toBeVisible();
    await expect(canvas.getByText('Impact')).toBeVisible();
  },
};

export const FeaturedReleases: Story = {
  args: {},
  render: () => (
    <EffectScatterChart
      use={SVGRenderer}
      style={effectScatterStyle}
      title={{ text: 'Featured releases', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Week' }}
      yAxis={{ type: 'value', name: 'Adoption' }}
      series={[
        {
          type: 'effectScatter',
          rippleEffect: { scale: 4 },
          symbolSize: (value) => Number(value[2]),
          data: [
            [1, 22, 14],
            [2, 34, 18],
            [3, 48, 22],
          ],
          itemStyle: { color: '#0f766e' },
        },
      ]}
    >
      <Title text="Featured releases" left="center" />
      <Tooltip trigger="item" />
    </EffectScatterChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Featured releases')).toBeVisible());
    await expect(canvas.getByText('Week')).toBeVisible();
    await expect(canvas.getByText('Adoption')).toBeVisible();
  },
};
