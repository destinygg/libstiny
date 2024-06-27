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
      <div className="alert__content">
        <span className="alert__title">{args.title}</span>
        <span className="alert__body">{args.content}</span>
      </div>

      <button
        className={buttonComponent({
          intent: "secondary",
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
