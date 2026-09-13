import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@destinygg/libstiny/react";

const meta = {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// table.scss styles bare th/td as descendants of `.table-wrapper`, so rows and
// cells are written as native elements rather than subcomponents.
export const Primary: Story = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Tier</th>
          <th scope="col">Started</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Destiny</td>
          <td>Tier 4</td>
          <td>2019-04-02</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Gemzar</td>
          <td>Tier 2</td>
          <td>2021-11-17</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Cake</td>
          <td>Tier 1</td>
          <td>2023-06-30</td>
          <td>Lapsed</td>
        </tr>
      </tbody>
    </Table>
  ),
};
