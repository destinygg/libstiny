import type { Meta, StoryObj } from "@storybook/react";

type TableArgs = {};

const meta: Meta<TableArgs> = {
  title: "Table",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TableArgs>;

export const Primary: Story = {
  render: () => (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>First Col</th>
            <th>Second Col</th>
            <th>Third Col</th>
            <th>Fourth Col</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  args: {},
};
