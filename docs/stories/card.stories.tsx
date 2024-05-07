import type { Meta, StoryObj } from "@storybook/react";
import { cardComponent } from "../components/card";

type CardArgs = {
  content: string;
  title: string;
  subtitle: string;
  prominent: false;
};

const meta: Meta<CardArgs> = {
  title: "Card",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<CardArgs>;

export const Primary: Story = {
  render: (args) => (
    <div
      className={cardComponent({ prominent: args.prominent })}
      style={{ width: 340 }}
    >
      <div className="card-extra">
        <span className="badge">Badge</span>
        <span className="badge">Badge</span>
        <span className="badge">Badge</span>
      </div>

      <div className="card-header">
        <span className="card-title">{args.title}</span>
        <span className="card-subtitle">{args.subtitle}</span>
      </div>

      <span>
        As you guys might know, Destiny had a meetup in Georgia today to canvas.
        I was super excited for this since I live there, and I had a chance to
        meet the guy I watch constantly in person. On the...
      </span>

      <div className="card-extra card-extra--right">
        <button className="button button--neutral-text">Action</button>
        <button className="button button--primary-solid">Action</button>
      </div>
    </div>
  ),
  args: {
    title: "Card Title",
    subtitle: "Card subtitle",
    content:
      "As you guys might know, Destiny had a meetup in Georgia today to canvas. I was super excited for this since I live there, and I had a chance to meet the guy I watch constantly in person. On the...",
    prominent: false,
  },
};
