import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, DataZoom, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/BarChartWithDataZoom',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const largeDataset = Array.from({ length: 30 }, (_, i) => ({
  date: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 200) + 50,
}));

export const Default: Story = {
  render: () => (
    <div style={{ width: 600, height: 400 }}>
      <BarChart
        xAxis={{
          type: 'category',
          data: largeDataset.map((d) => d.date),
        }}
        yAxis={{ type: 'value' }}
        series={[
          {
            data: largeDataset.map((d) => d.value),
            type: 'bar',
            itemStyle: { color: '#3b82f6' },
          },
        ]}
        use={SVGRenderer}
      >
        <DataZoom type="slider" />
      </BarChart>
    </div>
  ),
};

export const Inside: Story = {
  render: () => (
    <div style={{ width: 600, height: 400 }}>
      <BarChart
        xAxis={{
          type: 'category',
          data: largeDataset.map((d) => d.date),
          gridIndex: 0,
        }}
        yAxis={{ type: 'value', gridIndex: 0 }}
        series={[
          {
            data: largeDataset.map((d) => d.value),
            type: 'bar',
            itemStyle: { color: '#10b981' },
          },
        ]}
        use={SVGRenderer}
      >
        <DataZoom type="inside" />
      </BarChart>
    </div>
  ),
};
