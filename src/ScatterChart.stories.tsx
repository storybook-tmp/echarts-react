import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DataZoom,
  Dataset,
  EffectScatterChart,
  ScatterChart,
  Title,
  Tooltip,
  VisualMap,
} from '@fanciers/echarts-react';

const meta = {
  component: ScatterChart,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const BubbleDataset: Story = {
  render: () => (
    <ScatterChart
      style={{ width: '100%', height: 380 }}
      compose={[EffectScatterChart]}
      grid={{
        top: 72,
        left: 72,
        right: 32,
        bottom: 72,
      }}
      xAxis={{ type: 'value', name: 'Life expectancy' }}
      yAxis={{ type: 'value', name: 'GDP per capita' }}
      series={[
        {
          type: 'scatter',
          datasetIndex: 0,
          encode: {
            x: 0,
            y: 1,
            tooltip: [3, 0, 1, 2],
          },
          symbolSize: (value: number[]) => {
            const population = value[2] ?? 0;
            return Math.sqrt(population) / 2;
          },
        },
        {
          type: 'effectScatter',
          datasetIndex: 1,
          encode: {
            x: 0,
            y: 1,
            tooltip: [3, 0, 1, 2],
          },
          symbolSize: 18,
          rippleEffect: {
            scale: 4,
          },
        },
      ]}
    >
      <Title text="Country growth clusters" left="center" />
      <Tooltip />
      <Dataset
        source={[
          ['lifeExpectancy', 'gdp', 'population', 'country'],
          [76.6, 43, 38, 'Canada'],
          [82.4, 49, 84, 'Germany'],
          [84.2, 52, 125, 'Japan'],
          [78.2, 38, 331, 'United States'],
          [74.1, 12, 1408, 'India'],
        ]}
      />
      <Dataset
        source={[
          ['lifeExpectancy', 'gdp', 'population', 'country'],
          [84.2, 52, 125, 'Japan'],
          [82.4, 49, 84, 'Germany'],
        ]}
      />
      <VisualMap
        dimension={2}
        min={38}
        max={1408}
        calculable
        right={0}
        top="middle"
        text={['Population', 'Low']}
      />
      <DataZoom type="inside" />
      <DataZoom type="slider" />
    </ScatterChart>
  ),
};
