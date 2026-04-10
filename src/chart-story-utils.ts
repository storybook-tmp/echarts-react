import type { CSSProperties } from 'react';
import { echarts } from '@fanciers/echarts-react';
import { expect, waitFor } from 'storybook/test';

export const chartContainerId = 'chart-root';

export const defaultChartStyle = {
  width: 720,
  height: 400,
} satisfies CSSProperties;

export async function expectChartToRender(canvasElement: HTMLElement) {
  const root = canvasElement.querySelector(`#${chartContainerId}`) as HTMLDivElement | null;

  expect(root).toBeTruthy();

  await waitFor(() => {
    const instance = echarts.getInstanceByDom(root!);
    expect(instance).toBeTruthy();
    expect(instance?.getWidth()).toBeGreaterThan(0);
    expect(instance?.getHeight()).toBeGreaterThan(0);
    expect(root?.querySelectorAll('canvas').length).toBeGreaterThan(0);
  });

  return {
    root: root!,
    instance: echarts.getInstanceByDom(root!)!,
  };
}

export function getSeriesTypes(instance: echarts.ECharts) {
  const series = instance.getOption().series;
  if (!Array.isArray(series)) return [];

  return series.map((entry) => {
    if (!entry || typeof entry !== 'object') return '';
    return `${'type' in entry && typeof entry.type === 'string' ? entry.type : ''}`;
  });
}
