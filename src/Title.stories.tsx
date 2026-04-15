import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, Title, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 400, height: 300 }}>
      <BarChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed'] }}
        yAxis={{ type: 'value' }}
        series={[{ data: [120, 200, 150], type: 'bar' }]}
        use={SVGRenderer}
      >
        <Title text="Sales Chart" />
      </BarChart>
    </div>
  ),
};

export const WithSubtitle: Story = {
  render: () => (
    <div style={{ width: 400, height: 300 }}>
      <BarChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed'] }}
        yAxis={{ type: 'value' }}
        series={[{ data: [120, 200, 150], type: 'bar' }]}
        use={SVGRenderer}
      >
        <Title text="Sales Chart" subtext="Weekly Report" />
      </BarChart>
    </div>
  ),
};
