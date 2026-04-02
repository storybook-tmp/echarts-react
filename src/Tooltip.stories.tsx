import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, Tooltip, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 400, height: 300 }}>
      <LineChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
        yAxis={{ type: 'value' }}
        series={[{ data: [120, 200, 150, 180, 220], type: 'line' }]}
        use={SVGRenderer}
      >
        <Tooltip />
      </LineChart>
    </div>
  ),
};

export const Trigger: Story = {
  render: () => (
    <div style={{ width: 400, height: 300 }}>
      <LineChart
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
        yAxis={{ type: 'value' }}
        series={[
          { name: 'Temperature', data: [20, 22, 19, 25, 24], type: 'line' },
        ]}
        use={SVGRenderer}
      >
        <Tooltip trigger="axis" />
      </LineChart>
    </div>
  ),
};
