import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Calendar, HeatmapChart, Title, Tooltip, VisualMap } from './index.js';

const monthChartStyle = {
  width: 720,
  height: 220,
};

const quarterChartStyle = {
  width: 820,
  height: 260,
};

const yearChartStyle = {
  width: 920,
  height: 240,
};

type HeatmapChartStoryArgs = Parameters<typeof HeatmapChart>[0];

const meta = {
  component: HeatmapChart,
} satisfies Meta<HeatmapChartStoryArgs>;

export default meta;
type Story = StoryObj<HeatmapChartStoryArgs>;
const noArgs = {} as never;

const createChartPlay = (label: RegExp): NonNullable<Story['play']> => {
  return async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: label });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      const renderedCanvas = chart.querySelector('canvas');
      expect(renderedCanvas).not.toBeNull();
      expect(renderedCanvas?.width ?? 0).toBeGreaterThan(0);
      expect(renderedCanvas?.height ?? 0).toBeGreaterThan(0);
    });
  };
};

function buildCalendarHeatmapData(startDate: string, days: number, offset: number) {
  const start = new Date(`${startDate}T00:00:00Z`);

  return Array.from({ length: days }, (_, index) => {
    const current = new Date(start);
    current.setUTCDate(start.getUTCDate() + index);

    return [current.toISOString().slice(0, 10), offset + ((index * 7) % 42)];
  });
}

export const JanuaryActivity: Story = {
  args: noArgs,
  render: () => (
    <HeatmapChart
      style={monthChartStyle}
      containerProps={{ role: 'img', 'aria-label': 'January activity heatmap chart' }}
      series={[
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: buildCalendarHeatmapData('2024-01-01', 31, 12),
        },
      ]}
    >
      <Calendar calendar={{ range: '2024-01', cellSize: ['auto', 18], top: 60, left: 40, right: 24 }} />
      <VisualMap visualMap={{ min: 0, max: 60, orient: 'horizontal', left: 'center', bottom: 12 }} />
      <Title title={{ text: 'January contribution activity', left: 'center', top: 12 }} />
      <Tooltip tooltip={{ position: 'top' }} />
    </HeatmapChart>
  ),
  play: createChartPlay(/january activity heatmap chart/i),
};

export const QuarterActivity: Story = {
  args: noArgs,
  render: () => (
    <HeatmapChart
      style={quarterChartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Quarter activity heatmap chart' }}
      series={[
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: buildCalendarHeatmapData('2024-04-01', 91, 18),
        },
      ]}
    >
      <Calendar
        calendar={{
          range: ['2024-04-01', '2024-06-30'],
          cellSize: ['auto', 16],
          splitLine: { show: false },
          top: 56,
          left: 40,
          right: 24,
        }}
      />
      <VisualMap visualMap={{ min: 0, max: 70, orient: 'horizontal', left: 'center', bottom: 12 }} />
      <Tooltip tooltip={{ position: 'top' }} />
    </HeatmapChart>
  ),
  play: createChartPlay(/quarter activity heatmap chart/i),
};

export const YearInReview: Story = {
  args: noArgs,
  render: () => (
    <HeatmapChart
      style={yearChartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Year in review heatmap chart' }}
      series={[
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: buildCalendarHeatmapData('2024-01-01', 366, 6),
        },
      ]}
    >
      <Calendar calendar={{ range: '2024', cellSize: ['auto', 13], top: 56, left: 36, right: 24 }} />
      <VisualMap visualMap={{ min: 0, max: 48, orient: 'horizontal', left: 'center', bottom: 12 }} />
      <Tooltip tooltip={{ position: 'top' }} />
    </HeatmapChart>
  ),
  play: createChartPlay(/year in review heatmap chart/i),
};
