import type { Meta, StoryObj } from '@storybook/react-vite';

import { BarChart, CanvasRenderer, Title } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <BarChart
      style={{ width: '100%', height: 320 }}
      use={CanvasRenderer}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu'] }}
      yAxis={{ type: 'value' }}
      series={{ type: 'bar', data: [120, 200, 150, 80], barWidth: 28 }}
    >
      <Title {...args} />
    </BarChart>
  ),
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Weekly sales',
    subtext: 'North America',
  },
};

export const LeftAligned: Story = {
  args: {
    text: 'Revenue trend',
    subtext: 'Updated hourly',
    left: 24,
    top: 16,
  },
};
