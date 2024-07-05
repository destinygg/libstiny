import type { Meta, StoryObj } from "@storybook/react";
import { notificationComponent } from "../components/alert";
import { buttonComponent } from "../components/button";

type NotificationArgs = {
  variant: "primary" | "success" | "danger" | "neutral";
  type: "toast" | "alert";
  content: string;
  title: string;
};

const meta: Meta<NotificationArgs> = {
  title: "Notification",
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

type Story = StoryObj<NotificationArgs>;

export const Alert: Story = {
  render: (args) => (
    <div
      className={notificationComponent({
        variant: args.variant,
        type: "alert",
      })}
    >
      <div className="notification__content">
        <span className="notification__title">{args.title}</span>
        <span className="notification__body">{args.content}</span>
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

export const Toast: Story = {
  render: (args) => (
    <div
      className={notificationComponent({
        variant: args.variant,
        type: "toast",
      })}
      style={{ width: 400 }}
    >
      <div className="notification__content">
        <span className="notification__title">{args.title}</span>
        <span className="notification__body">{args.content}</span>
      </div>

      <button
        className={buttonComponent({
          intent: "secondary",
        })}
      >
        Action
      </button>
    </div>
  ),
  args: {
    variant: "primary",
    title: "Alert Title",
    content: "As you guys might know, Destiny had a meetup in Georgia today",
  },
};
