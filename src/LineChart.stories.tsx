import React from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BarChart,
  LineChart,
} from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';
import type { ECharts } from 'echarts/core';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const meta = {
  component: LineChart,
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj;

export const WeeklyRevenue: Story = {
  render: () => (
    <LineChart
      containerProps={{ role: 'img', 'aria-label': 'Weekly revenue trend' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: weekdays,
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          smooth: true,
          data: [150, 230, 224, 218, 135, 147, 260],
        },
      ]}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Weekly revenue trend' })).toBeVisible();
    await expectSvgLabels(canvasElement, ['Mon', 'Sun']);
  },
};

export const ConfiguredOptions: Story = {
  render: () => <ConfiguredOptionsStory />,
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Energy output by source' })).toBeVisible();
    await waitFor(async () => {
      await expect(canvas.getByTestId('chart-summary')).toHaveTextContent(
        'title:Energy output|legend:Solar,Wind|tooltip:axis'
      );
    });
    await expectSvgLabels(canvasElement, ['Q1', 'Q4']);
  },
};

export const MixedSeriesComparison: Story = {
  render: () => <MixedSeriesStory />,
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('img', { name: 'Orders versus returns' })).toBeVisible();
    await waitFor(async () => {
      await expect(canvas.getByTestId('chart-summary')).toHaveTextContent(
        'title:Orders versus returns|series:bar,line'
      );
    });
    await expectSvgLabels(canvasElement, ['North', 'West']);
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

function ConfiguredOptionsStory() {
  const chartRef = React.useRef<ECharts | null>(null);
  const formatSummary = React.useCallback((chart: ECharts) => {
    const option = chart.getOption();
    const titleText = getOptionText(option.title);
    const tooltipTrigger = getOptionField(option.tooltip, 'trigger');
    const seriesNames = getSeriesNames(option.series);

    return `title:${titleText}|legend:${seriesNames.join(',')}|tooltip:${tooltipTrigger}`;
  }, []);
  const summary = useChartSummary(chartRef, formatSummary);

  return (
    <>
      <LineChart
        ref={chartRef}
        containerProps={{ role: 'img', 'aria-label': 'Energy output by source' }}
        style={chartStyle}
        xAxis={{
          type: 'category',
          boundaryGap: false,
          data: ['Q1', 'Q2', 'Q3', 'Q4'],
        }}
        yAxis={{ type: 'value' }}
        series={[
          {
            type: 'line',
            name: 'Solar',
            smooth: true,
            data: [120, 162, 191, 234],
          },
          {
            type: 'line',
            name: 'Wind',
            smooth: true,
            data: [90, 132, 171, 210],
          },
        ]}
        title={{ text: 'Energy output', left: 'center' }}
        legend={{ top: 32 }}
        tooltip={{ trigger: 'axis' }}
      />
      <output data-testid="chart-summary" style={summaryStyle}>
        {summary}
      </output>
    </>
  );
}

function MixedSeriesStory() {
  const chartRef = React.useRef<ECharts | null>(null);
  const formatSummary = React.useCallback((chart: ECharts) => {
    const option = chart.getOption();
    const titleText = getOptionText(option.title);
    const seriesTypes = getOptionArray(option.series).map((series) => series.type);

    return `title:${titleText}|series:${seriesTypes.join(',')}`;
  }, []);
  const summary = useChartSummary(chartRef, formatSummary);

  return (
    <>
      <LineChart
        ref={chartRef}
        compose={[BarChart]}
        containerProps={{ role: 'img', 'aria-label': 'Orders versus returns' }}
        style={chartStyle}
        xAxis={{
          type: 'category',
          data: ['North', 'South', 'East', 'West'],
        }}
        yAxis={{ type: 'value' }}
        series={[
          {
            type: 'bar',
            name: 'Orders',
            data: [320, 280, 360, 300],
          },
          {
            type: 'line',
            name: 'Returns',
            smooth: true,
            data: [18, 12, 26, 16],
          },
        ]}
        title={{ text: 'Orders versus returns', left: 'center' }}
        legend={{ top: 32 }}
      />
      <output data-testid="chart-summary" style={summaryStyle}>
        {summary}
      </output>
    </>
  );
}

function useChartSummary(
  chartRef: React.RefObject<ECharts | null>,
  formatSummary: (chart: ECharts) => string
) {
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

      setSummary(formatSummary(chart));
    };

    frame = requestAnimationFrame(updateSummary);

    return () => {
      isActive = false;
      cancelAnimationFrame(frame);
    };
  }, [chartRef, formatSummary]);

  return summary;
}

function getOptionText(optionValue: unknown) {
  const item = getOptionArray(optionValue)[0];
  return typeof item?.text === 'string' ? item.text : 'missing';
}

function getOptionField(optionValue: unknown, key: string) {
  const item = getOptionArray(optionValue)[0];
  const value = item?.[key];
  return typeof value === 'string' ? value : 'missing';
}

function getSeriesNames(optionValue: unknown) {
  return getOptionArray(optionValue)
    .map((series) => series.name)
    .filter((name): name is string => typeof name === 'string');
}

function getOptionArray(optionValue: unknown) {
  return Array.isArray(optionValue)
    ? optionValue.filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
    : [];
}

const summaryStyle = {
  display: 'block',
  marginTop: '12px',
  fontFamily: 'monospace',
} satisfies CSSProperties;
