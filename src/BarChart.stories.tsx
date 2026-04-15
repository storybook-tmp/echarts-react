import React from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';
import type { ECharts } from 'echarts/core';

const regions = ['North', 'South', 'East', 'West'];

const meta = {
  component: BarChart,
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj;

export const RegionalRevenue: Story = {
  render: () => (
    <BarChart
      containerProps={{ role: 'img', 'aria-label': 'Regional revenue' }}
      style={chartStyle}
      title={{ text: 'Regional revenue', left: 'center' }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', data: regions }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          data: [420, 360, 390, 440],
          itemStyle: { borderRadius: [6, 6, 0, 0] },
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Regional revenue' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Regional revenue', 'North', 'West']);
  },
};

export const TeamComparison: Story = {
  render: () => (
    <BarChart
      containerProps={{ role: 'img', 'aria-label': 'Team comparison' }}
      style={chartStyle}
      title={{ text: 'Team comparison', left: 'center' }}
      legend={{ top: 28 }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'Platform',
          data: [180, 220, 260, 280],
        },
        {
          type: 'bar',
          name: 'Growth',
          data: [150, 210, 230, 250],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Team comparison' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Team comparison', 'Platform', 'Growth']);
  },
};

export const DeliveryTrend: Story = {
  render: () => <DeliveryTrendStory />,
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Delivery trend' })).toBeVisible();
    await waitFor(async () => {
      await expect(canvas.getByTestId('chart-summary')).toHaveTextContent(
        'title:Delivery trend|markLine:1|markPoint:1'
      );
    });
    await expectSvgLabels(canvasElement, ['Delivery trend', 'Jan', 'Jun']);
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

function DeliveryTrendStory() {
  const chartRef = React.useRef<ECharts | null>(null);
  const [summary, setSummary] = React.useState('pending');

  React.useEffect(() => {
    let isActive = true;
    let frame = 0;

    const updateSummary = () => {
      if (!isActive) return;

      const chart = chartRef.current;
      if (!chart) {
        frame = requestAnimationFrame(updateSummary);
        return;
      }

      const option = chart.getOption();
      const series = Array.isArray(option.series) ? option.series[0] : null;
      const title = Array.isArray(option.title) ? option.title[0]?.text : undefined;
      const markLineCount = Array.isArray(series?.markLine?.data) ? series.markLine.data.length : 0;
      const markPointCount = Array.isArray(series?.markPoint?.data) ? series.markPoint.data.length : 0;

      setSummary(`title:${title ?? 'missing'}|markLine:${markLineCount}|markPoint:${markPointCount}`);
    };

    frame = requestAnimationFrame(updateSummary);

    return () => {
      isActive = false;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <BarChart
        ref={chartRef}
        containerProps={{ role: 'img', 'aria-label': 'Delivery trend' }}
        style={chartStyle}
        title={{ text: 'Delivery trend', left: 'center' }}
        tooltip={{ trigger: 'axis' }}
        xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
        yAxis={{ type: 'value' }}
        series={[
          {
            type: 'bar',
            name: 'Deployments',
            data: [28, 36, 42, 48, 46, 52],
            markLine: {
              data: [{ type: 'average', name: 'Average' }],
            },
            markPoint: {
              data: [{ type: 'max', name: 'Peak' }],
            },
          },
        ]}
      />
      <output data-testid="chart-summary" style={summaryStyle}>
        {summary}
      </output>
    </>
  );
}

const summaryStyle = {
  display: 'block',
  marginTop: '12px',
  fontFamily: 'monospace',
} satisfies CSSProperties;
