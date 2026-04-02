import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 500, height: 350 }}>
      <BarChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
        yAxis={{ type: 'value' }}
        series={[
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: { color: '#3b82f6' },
          },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <div style={{ width: 500, height: 350 }}>
      <BarChart
        xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
        yAxis={{ type: 'value' }}
        series={[
          { name: 'Sales', data: [320, 302, 301, 334], type: 'bar', itemStyle: { color: '#3b82f6' } },
          { name: 'Revenue', data: [120, 132, 101, 134], type: 'bar', itemStyle: { color: '#ef4444' } },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};
