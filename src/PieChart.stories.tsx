import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';

const revenueSplit = [
  { value: 1048, name: 'Search' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' },
];

const meta = {
  component: PieChart,
} satisfies Meta<typeof PieChart>;

export default meta;

type Story = StoryObj;

export const ChannelMix: Story = {
  render: () => (
    <PieChart
      containerProps={{ role: 'img', 'aria-label': 'Channel mix' }}
      style={chartStyle}
      title={{ text: 'Channel mix', left: 'center' }}
      legend={{ orient: 'vertical', left: 'left' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'pie',
          radius: '55%',
          data: revenueSplit,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
            },
          },
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Channel mix' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Channel mix', 'Search', 'Direct', 'Video Ads']);
  },
};

export const DoughnutShare: Story = {
  render: () => (
    <PieChart
      containerProps={{ role: 'img', 'aria-label': 'Doughnut share' }}
      style={chartStyle}
      title={{ text: 'Doughnut share', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'pie',
          radius: ['42%', '72%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter: '{b}',
          },
          data: revenueSplit,
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Doughnut share' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Doughnut share', 'Email', 'Union Ads']);
  },
};

export const NightingaleRose: Story = {
  render: () => (
    <PieChart
      containerProps={{ role: 'img', 'aria-label': 'Nightingale rose chart' }}
      style={chartStyle}
      title={{ text: 'Nightingale rose chart', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      legend={{ top: 28 }}
      series={[
        {
          type: 'pie',
          roseType: 'area',
          radius: [24, 110],
          center: ['50%', '58%'],
          data: revenueSplit,
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Nightingale rose chart' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Nightingale rose chart', 'Search', 'Email']);
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
