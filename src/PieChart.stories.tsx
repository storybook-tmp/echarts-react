import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { PieChart, SVGRenderer, Title, Tooltip, Legend } from '@fanciers/echarts-react';

const meta: Meta = {
  component: PieChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <PieChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Social' },
            { value: 300, name: 'Other' },
          ],
        },
      ]}
    >
      <Title text="Traffic Sources" />
      <Tooltip />
      <Legend />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};

export const Donut: Story = {
  render: () => (
    <PieChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      series={[
        {
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 335, name: 'Electronics' },
            { value: 310, name: 'Clothing' },
            { value: 234, name: 'Food' },
            { value: 135, name: 'Home' },
          ],
        },
      ]}
    >
      <Title text="Sales by Category" />
      <Tooltip />
      <Legend />
    </PieChart>
  ),
};
