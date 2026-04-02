import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, Legend, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/Legend',
  component: Legend,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 400, height: 300 }}>
      <BarChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu'] }}
        yAxis={{ type: 'value' }}
        series={[
          { name: 'Sales', data: [120, 200, 150, 180], type: 'bar' },
          { name: 'Expenses', data: [80, 100, 120, 140], type: 'bar' },
        ]}
        use={SVGRenderer}
      >
        <Legend />
      </BarChart>
    </div>
  ),
};

export const Right: Story = {
  render: () => (
    <div style={{ width: 400, height: 300 }}>
      <BarChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu'] }}
        yAxis={{ type: 'value' }}
        series={[
          { name: 'Product A', data: [120, 200, 150, 180], type: 'bar' },
          { name: 'Product B', data: [80, 100, 120, 140], type: 'bar' },
        ]}
        use={SVGRenderer}
      >
        <Legend orient="vertical" align="right" />
      </BarChart>
    </div>
  ),
};
