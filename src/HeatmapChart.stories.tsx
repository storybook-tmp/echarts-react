import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Calendar, HeatmapChart, Title, Tooltip, VisualMap } from '@fanciers/echarts-react';

const chartStyle = { width: 680, height: 300 };

const meta = {
  component: HeatmapChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SprintActivity: Story = {
  render: () => (
    <HeatmapChart
      containerProps={{ role: 'img', 'aria-label': 'Sprint activity heatmap chart' }}
      style={chartStyle}
      series={{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [
          ['2026-04-01', 3],
          ['2026-04-02', 5],
          ['2026-04-03', 2],
          ['2026-04-06', 8],
          ['2026-04-07', 7],
          ['2026-04-08', 4],
          ['2026-04-09', 6],
          ['2026-04-10', 9],
        ],
      }}
    >
      <Title title={{ text: 'Sprint activity', left: 'center' }} />
      <Calendar calendar={{ range: '2026-04', top: 82, left: 42, right: 24, cellSize: ['auto', 22] }} />
      <Tooltip tooltip={{ position: 'top' }} />
      <VisualMap visualMap={{ min: 0, max: 10, orient: 'horizontal', left: 'center', top: 44 }} />
    </HeatmapChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Sprint activity heatmap chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const AvailabilityCalendar: Story = {
  render: () => (
    <HeatmapChart
      containerProps={{ role: 'img', 'aria-label': 'Availability calendar heatmap chart' }}
      style={chartStyle}
      series={{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [
          ['2026-05-04', 1],
          ['2026-05-05', 2],
          ['2026-05-06', 5],
          ['2026-05-07', 4],
          ['2026-05-08', 1],
          ['2026-05-11', 3],
          ['2026-05-12', 6],
          ['2026-05-13', 7],
        ],
      }}
    >
      <Calendar calendar={{ range: '2026-05', top: 64, left: 42, right: 24, cellSize: ['auto', 24] }} />
      <Tooltip tooltip={{ position: 'top' }} />
      <VisualMap visualMap={{ min: 0, max: 8, orient: 'horizontal', left: 'center', top: 28 }} />
    </HeatmapChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Availability calendar heatmap chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const QuarterOverview: Story = {
  render: () => (
    <HeatmapChart
      containerProps={{ role: 'img', 'aria-label': 'Quarter overview heatmap chart' }}
      style={{ width: 720, height: 360 }}
      series={{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [
          ['2026-01-05', 4],
          ['2026-01-19', 6],
          ['2026-02-02', 7],
          ['2026-02-16', 5],
          ['2026-03-02', 9],
          ['2026-03-16', 8],
          ['2026-03-30', 6],
        ],
      }}
    >
      <Title title={{ text: 'Quarter overview', left: 'center' }} />
      <Calendar
        calendar={{
          range: ['2026-01', '2026-03'],
          top: 84,
          left: 52,
          right: 28,
          cellSize: ['auto', 18],
        }}
      />
      <Tooltip tooltip={{ position: 'top' }} />
      <VisualMap visualMap={{ min: 0, max: 10, orient: 'horizontal', left: 'center', top: 44 }} />
    </HeatmapChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Quarter overview heatmap chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
