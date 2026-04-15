import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeatmapChart } from '@fanciers/echarts-react';
import { GridComponent } from 'echarts/components';
import { expect, waitFor } from 'storybook/test';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const hours = ['09:00', '11:00', '13:00', '15:00', '17:00'];

const meta = {
  component: HeatmapChart,
} satisfies Meta<typeof HeatmapChart>;

export default meta;

type Story = StoryObj;

export const WeeklyActivity: Story = {
  render: () => (
    <HeatmapChart
      use={GridComponent}
      containerProps={{ role: 'img', 'aria-label': 'Weekly activity' }}
      style={chartStyle}
      title={{ text: 'Weekly activity', left: 'center' }}
      tooltip={{ position: 'top' }}
      grid={{ height: '58%', top: '18%' }}
      xAxis={{ type: 'category', data: weekdays, splitArea: { show: true } }}
      yAxis={{ type: 'category', data: hours, splitArea: { show: true } }}
      visualMap={{
        min: 0,
        max: 12,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '8%',
      }}
      series={[
        {
          type: 'heatmap',
          data: buildHeatmapValues([
            [2, 5, 7, 9, 6],
            [1, 3, 8, 10, 4],
            [0, 4, 6, 12, 5],
            [2, 2, 5, 8, 3],
            [1, 1, 4, 6, 2],
          ]),
          label: { show: true },
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Weekly activity' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Weekly activity', 'Mon', 'Fri', '09:00', '17:00']);
  },
};

export const RiskMatrix: Story = {
  render: () => (
    <HeatmapChart
      use={GridComponent}
      containerProps={{ role: 'img', 'aria-label': 'Risk matrix' }}
      style={chartStyle}
      title={{ text: 'Risk matrix', left: 'center' }}
      tooltip={{ position: 'top' }}
      grid={{ height: '58%', top: '18%' }}
      xAxis={{
        type: 'category',
        data: ['Low', 'Medium', 'High', 'Critical'],
        splitArea: { show: true },
      }}
      yAxis={{
        type: 'category',
        data: ['Unlikely', 'Possible', 'Likely', 'Certain'],
        splitArea: { show: true },
      }}
      visualMap={{
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '8%',
      }}
      series={[
        {
          type: 'heatmap',
          data: buildHeatmapValues([
            [1, 3, 5, 8],
            [2, 4, 6, 9],
            [3, 5, 8, 10],
            [4, 6, 9, 10],
          ]),
          label: { show: true },
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Risk matrix' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Risk matrix', 'Low', 'Critical', 'Likely', 'Certain']);
  },
};

export const SprintPressure: Story = {
  render: () => (
    <HeatmapChart
      use={GridComponent}
      containerProps={{ role: 'img', 'aria-label': 'Sprint pressure' }}
      style={chartStyle}
      title={{ text: 'Sprint pressure', left: 'center' }}
      tooltip={{ position: 'top' }}
      grid={{ height: '58%', top: '18%' }}
      xAxis={{
        type: 'category',
        data: ['Backlog', 'Build', 'Review', 'Release'],
        splitArea: { show: true },
      }}
      yAxis={{
        type: 'category',
        data: ['Team A', 'Team B', 'Team C'],
        splitArea: { show: true },
      }}
      visualMap={{
        min: 0,
        max: 9,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '8%',
      }}
      series={[
        {
          type: 'heatmap',
          data: buildHeatmapValues([
            [3, 7, 5, 6],
            [2, 5, 8, 7],
            [1, 4, 6, 9],
          ]),
          label: { show: true },
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Sprint pressure' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Sprint pressure', 'Build', 'Release', 'Team A', 'Team C']);
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

function buildHeatmapValues(matrix: number[][]) {
  return matrix.flatMap((row, y) => row.map((value, x) => [x, y, value]));
}
