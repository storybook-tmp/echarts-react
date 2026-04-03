import type { Meta, StoryObj } from '@storybook/react-vite';

import { CanvasRenderer, Legend, PieChart, Tooltip } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Legend',
  component: Legend,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <PieChart
      style={{ width: '100%', height: 320 }}
      use={CanvasRenderer}
      series={{
        type: 'pie',
        radius: ['35%', '65%'],
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Ads' },
        ],
      }}
    >
      <Tooltip trigger="item" />
      <Legend {...args} />
    </PieChart>
  ),
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomRow: Story = {
  args: {
    bottom: 0,
    left: 'center',
  },
};

export const VerticalSidebar: Story = {
  args: {
    orient: 'vertical',
    right: 12,
    top: 'center',
  },
};
