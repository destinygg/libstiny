import type { Meta, StoryObj } from "@storybook/react";
import { alertComponent } from "../components/alert";
import { buttonComponent } from "../components/button";

type AlertArgs = {
  variant: "primary" | "success" | "danger" | "neutral";
  content: string;
  title: string;
};

const meta: Meta<AlertArgs> = {
  title: "Alert",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "success", "danger", "neutral"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<AlertArgs>;

export const Primary: Story = {
  render: (args) => (
    <div className={alertComponent({ variant: args.variant })}>
      <div className="alert-content">
        <span className="alert-title">{args.title}</span>
        <span className="alert-body">{args.content}</span>
      </div>

      <button
        className={buttonComponent({
          variant: "outlined",
          color: args.variant,
        })}
      >
        Alert Action
      </button>
    </div>
  ),
  args: {
    variant: "primary",
    title: "Alert Title",
    content:
      "As you guys might know, Destiny had a meetup in Georgia today to canvas. I was super excited for this since I live there, and I had a chance to meet the guy I watch constantly in person. On the...",
  },
};
