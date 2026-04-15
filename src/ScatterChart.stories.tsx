import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart } from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';

const meta = {
  component: ScatterChart,
} satisfies Meta<typeof ScatterChart>;

export default meta;

type Story = StoryObj;

export const CustomerSegments: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Customer segments' }}
      style={chartStyle}
      title={{ text: 'Customer segments', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Contract value' }}
      yAxis={{ type: 'value', name: 'Retention score' }}
      series={[
        {
          type: 'scatter',
          name: 'Enterprise',
          data: [
            [420, 88],
            [380, 82],
            [460, 91],
          ],
        },
        {
          type: 'scatter',
          name: 'SMB',
          data: [
            [160, 64],
            [210, 69],
            [240, 72],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Customer segments' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Customer segments', 'Enterprise', 'SMB']);
  },
};

export const DatasetBackedScatter: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Dataset backed scatter' }}
      style={chartStyle}
      title={{ text: 'Dataset backed scatter', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      dataset={{
        source: [
          ['leadTime', 'quality', 'team'],
          [3, 88, 'Alpha'],
          [5, 76, 'Beta'],
          [4, 91, 'Gamma'],
          [6, 72, 'Delta'],
        ],
      }}
      xAxis={{ type: 'value', name: 'Lead time' }}
      yAxis={{ type: 'value', name: 'Quality score' }}
      series={[
        {
          type: 'scatter',
          encode: {
            x: 'leadTime',
            y: 'quality',
            tooltip: ['team', 'leadTime', 'quality'],
          },
          symbolSize: 20,
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Dataset backed scatter' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Dataset backed scatter', 'Lead time', 'Quality score']);
  },
};

export const QuadrantView: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ role: 'img', 'aria-label': 'Quadrant view' }}
      style={chartStyle}
      title={{ text: 'Quadrant view', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Adoption' }}
      yAxis={{ type: 'value', name: 'Complexity' }}
      series={[
        {
          type: 'scatter',
          name: 'Core bets',
          symbolSize: 22,
          data: [
            [72, 68],
            [84, 74],
          ],
        },
        {
          type: 'scatter',
          name: 'Experiments',
          symbolSize: 18,
          data: [
            [34, 42],
            [26, 35],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Quadrant view' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Quadrant view', 'Core bets', 'Experiments']);
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
