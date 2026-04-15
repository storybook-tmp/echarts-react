import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart, LineChart } from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';

const meta = {
  component: EffectScatterChart,
} satisfies Meta<typeof EffectScatterChart>;

export default meta;

type Story = StoryObj;

export const TrafficSpikes: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Traffic spikes' }}
      style={chartStyle}
      title={{ text: 'Traffic spikes', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Minute' }}
      yAxis={{ type: 'value', name: 'Requests' }}
      series={[
        {
          type: 'effectScatter',
          name: 'Incidents',
          rippleEffect: {
            scale: 4,
          },
          data: [
            [8, 420],
            [18, 510],
            [27, 468],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Traffic spikes' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Traffic spikes', 'Minute', 'Requests']);
  },
};

export const IncidentClusters: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Incident clusters' }}
      style={chartStyle}
      title={{ text: 'Incident clusters', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Impact' }}
      yAxis={{ type: 'value', name: 'Frequency' }}
      series={[
        {
          type: 'effectScatter',
          name: 'API',
          data: [
            [76, 62],
            [82, 74],
          ],
        },
        {
          type: 'effectScatter',
          name: 'Worker',
          data: [
            [42, 30],
            [36, 26],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Incident clusters' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Incident clusters', 'API', 'Worker']);
  },
};

export const BaselineAndOutliers: Story = {
  render: () => (
    <EffectScatterChart
      compose={[LineChart]}
      containerProps={{ role: 'img', 'aria-label': 'Baseline and outliers' }}
      style={chartStyle}
      title={{ text: 'Baseline and outliers', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value', name: 'Latency' }}
      series={[
        {
          type: 'line',
          name: 'Baseline',
          data: [120, 118, 122, 119, 121],
        },
        {
          type: 'effectScatter',
          name: 'Outliers',
          data: [
            [1, 118],
            [3, 119],
            [4, 121],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Baseline and outliers' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Baseline and outliers', 'Baseline', 'Outliers']);
  },
};

const chartStyle = {
  width: 560,
  height: 320,
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
