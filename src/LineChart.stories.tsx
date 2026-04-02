import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 500, height: 350 }}>
      <LineChart
        xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
        yAxis={{ type: 'value' }}
        series={[
          {
            data: [30, 40, 45, 50, 49, 60],
            type: 'line',
            smooth: true,
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
      <LineChart
        xAxis={{ type: 'category', data: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'] }}
        yAxis={{ type: 'value' }}
        series={[
          {
            name: 'Series A',
            data: [120, 132, 101, 134, 90],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#3b82f6' },
          },
          {
            name: 'Series B',
            data: [220, 182, 191, 234, 290],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#ef4444' },
          },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};
