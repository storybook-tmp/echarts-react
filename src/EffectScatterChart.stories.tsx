import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { EffectScatterChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: EffectScatterChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <EffectScatterChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'effectScatter',
          symbolSize: 20,
          rippleEffect: { brushType: 'stroke' },
          data: [
            [172.7, 105.2],
            [153.4, 42],
            [160.0, 50],
            [147.2, 49.8],
            [168.2, 49.2],
            [175.0, 73.2],
            [157.0, 47.8],
            [167.6, 68.8],
            [159.5, 50.6],
            [175.0, 82.5],
          ],
        },
      ]}
    >
      <Title text="Effect Scatter" />
      <Tooltip />
    </EffectScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};

export const WithLabel: Story = {
  render: () => (
    <EffectScatterChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'effectScatter',
          symbolSize: 15,
          data: [56, 82, 34, 91, 47],
          label: { show: true, position: 'top' },
        },
      ]}
    >
      <Title text="Labeled Effect Scatter" />
      <Tooltip />
    </EffectScatterChart>
  ),
};
