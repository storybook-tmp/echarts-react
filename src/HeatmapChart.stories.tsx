import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeatmapChart, Title, Tooltip } from '@fanciers/echarts-react';
import { GridComponent, VisualMapComponent } from 'echarts/components';

const meta = {
  component: HeatmapChart,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const WeeklyActivity: Story = {
  render: () => (
    <HeatmapChart
      style={{ width: '100%', height: 380 }}
      use={[GridComponent, VisualMapComponent]}
      grid={{ top: 72, left: 72, right: 24, bottom: 72 }}
      visualMap={{
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: 8,
      }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        splitArea: { show: true },
      }}
      yAxis={{
        type: 'category',
        data: ['09:00', '11:00', '13:00', '15:00', '17:00'],
        splitArea: { show: true },
      }}
      series={[
        {
          type: 'heatmap',
          data: [
            [0, 0, 6],
            [1, 0, 7],
            [2, 0, 8],
            [3, 0, 6],
            [4, 0, 5],
            [0, 1, 5],
            [1, 1, 8],
            [2, 1, 9],
            [3, 1, 8],
            [4, 1, 6],
            [0, 2, 4],
            [1, 2, 7],
            [2, 2, 10],
            [3, 2, 8],
            [4, 2, 7],
            [0, 3, 3],
            [1, 3, 6],
            [2, 3, 7],
            [3, 3, 9],
            [4, 3, 8],
            [0, 4, 2],
            [1, 4, 4],
            [2, 4, 6],
            [3, 4, 7],
            [4, 4, 9],
          ],
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: 'rgba(0, 0, 0, 0.25)',
            },
          },
        },
      ]}
    >
      <Title text="Weekly review activity" left="center" />
      <Tooltip />
    </HeatmapChart>
  ),
};
