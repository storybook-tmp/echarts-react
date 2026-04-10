import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart, HeatmapChart, SVGRenderer, Title, Tooltip, VisualMap } from '@fanciers/echarts-react';

const heatmapStyle = { width: '100%', height: 420, maxWidth: 760 };

const weeklyData = [
  [0, 0, 5],
  [1, 0, 9],
  [2, 0, 3],
  [0, 1, 8],
  [1, 1, 6],
  [2, 1, 4],
  [0, 2, 2],
  [1, 2, 7],
  [2, 2, 10],
];

const meta = {
  component: HeatmapChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const WeeklyIntensity: Story = {
  args: {},
  render: () => (
    <HeatmapChart
      use={SVGRenderer}
      compose={[BarChart]}
      style={heatmapStyle}
      title={{ text: 'Weekly intensity', left: 'center' }}
      tooltip={{ position: 'top' }}
      visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: 24 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed'] }}
      yAxis={{ type: 'category', data: ['Morning', 'Afternoon', 'Evening'] }}
      series={[
        {
          type: 'heatmap',
          data: weeklyData,
          label: { show: true },
        },
      ]}
    >
      <Title text="Weekly intensity" left="center" />
      <Tooltip position="top" />
      <VisualMap min={0} max={10} calculable orient="horizontal" left="center" bottom={24} />
    </HeatmapChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Weekly intensity')).toBeVisible());
    await expect(canvas.getByText('Mon')).toBeVisible();
    await expect(canvas.getByText('Evening')).toBeVisible();
  },
};

export const SupportVolume: Story = {
  args: {},
  render: () => (
    <HeatmapChart
      use={SVGRenderer}
      compose={[BarChart]}
      style={heatmapStyle}
      title={{ text: 'Support volume', left: 'center' }}
      tooltip={{ position: 'top' }}
      visualMap={{ min: 0, max: 12, calculable: true, orient: 'horizontal', left: 'center', bottom: 24 }}
      xAxis={{ type: 'category', data: ['Email', 'Chat', 'Phone'] }}
      yAxis={{ type: 'category', data: ['Low', 'Medium', 'High'] }}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 2],
            [1, 0, 4],
            [2, 0, 3],
            [0, 1, 5],
            [1, 1, 8],
            [2, 1, 6],
            [0, 2, 9],
            [1, 2, 12],
            [2, 2, 10],
          ],
          label: { show: true },
        },
      ]}
    >
      <Title text="Support volume" left="center" />
      <Tooltip position="top" />
      <VisualMap min={0} max={12} calculable orient="horizontal" left="center" bottom={24} />
    </HeatmapChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Support volume')).toBeVisible());
    await expect(canvas.getByText('Chat')).toBeVisible();
    await expect(canvas.getByText('High')).toBeVisible();
  },
};

export const TeamLoad: Story = {
  args: {},
  render: () => (
    <HeatmapChart
      use={SVGRenderer}
      compose={[BarChart]}
      style={heatmapStyle}
      title={{ text: 'Team load', left: 'center' }}
      tooltip={{ position: 'top' }}
      visualMap={{ min: 0, max: 8, calculable: true, orient: 'horizontal', left: 'center', bottom: 24 }}
      xAxis={{ type: 'category', data: ['Design', 'Docs', 'QA'] }}
      yAxis={{ type: 'category', data: ['Sprint 1', 'Sprint 2', 'Sprint 3'] }}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 3],
            [1, 0, 4],
            [2, 0, 6],
            [0, 1, 5],
            [1, 1, 6],
            [2, 1, 7],
            [0, 2, 6],
            [1, 2, 8],
            [2, 2, 5],
          ],
          label: { show: true },
        },
      ]}
    >
      <Title text="Team load" left="center" />
      <Tooltip position="top" />
      <VisualMap min={0} max={8} calculable orient="horizontal" left="center" bottom={24} />
    </HeatmapChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Team load')).toBeVisible());
    await expect(canvas.getByText('Design')).toBeVisible();
    await expect(canvas.getByText('Sprint 3')).toBeVisible();
  },
};
