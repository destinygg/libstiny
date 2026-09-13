import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ChevronUp } from "./_icons";
import { useState } from "react";

type SideNavArgs = {};

const meta: Meta<SideNavArgs> = {
  title: "SideNav",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SideNavArgs>;

export const Primary: Story = {
  render: () => (
    <div className="side-nav" style={{ width: "12rem", height: 545 }}>
      <div className="side-nav__group">
        <div className="side-nav__item side-nav__item--active">
          <Icon />
          Overview
        </div>
        <div className="side-nav__item">
          <Icon />
          Subscriptions
        </div>
        <div className="side-nav__item">
          <Icon />
          Connections
        </div>
        <div className="side-nav__item">
          <Icon />
          Messages
        </div>
        <div className="side-nav__item">
          <Icon />
          Developer
        </div>
        <div className="side-nav__item">
          <Icon />
          Advanced
        </div>
      </div>
      <div
        className="side-nav__art"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/gemzar-do-not-pull.png"
          style={{ width: 180, height: 180 }}
        />
      </div>
    </div>
  ),
  args: {},
};

export const Categorized: Story = {
  render: () => {
    const [isVegetablesCollapsed, setIsVegetablesCollapsed] = useState(false);
    const [isFruitsCollapsed, setIsFruitsCollapsed] = useState(false);
    const [isBreadCollapsed, setIsBreadCollapsed] = useState(false);

    return (
      <div style={{ height: "60rem" }}>
        <div className="side-nav" style={{ width: "14rem" }}>
          <div
            className={`side-nav__category ${isVegetablesCollapsed && "side-nav__category--collapsed"}`}
          >
            <div
              className="side-nav__heading"
              onClick={() => setIsVegetablesCollapsed(!isVegetablesCollapsed)}
            >
              <Icon />
              <span style={{ flex: 1 }}>Vegetables</span>
              <ChevronUp className="side-nav__heading-chevron" />
            </div>
            <div className="side-nav__category-content">
              <div className="side-nav__category-indent"></div>
              <div className="side-nav__group">
                <div className="side-nav__item">Carrots</div>
                <div className="side-nav__item">Broccoli</div>
                <div className="side-nav__item">Lettuce</div>
                <div className="side-nav__item">Tomatoes</div>
                <div className="side-nav__item">Cucumbers</div>
              </div>
            </div>
          </div>
          <div
            className={`side-nav__category ${isFruitsCollapsed && "side-nav__category--collapsed"}`}
          >
            <div
              className="side-nav__heading"
              onClick={() => setIsFruitsCollapsed(!isFruitsCollapsed)}
            >
              <Icon />
              <span style={{ flex: 1 }}>Fruits</span>
              <ChevronUp className="side-nav__heading-chevron" />
            </div>
            <div className="side-nav__category-content">
              <div className="side-nav__category-indent"></div>
              <div className="side-nav__group">
                <div className="side-nav__item">Apples</div>
                <div className="side-nav__item">Bananas</div>
                <div className="side-nav__item">Cherries</div>
                <div className="side-nav__item">Strawberries</div>
                <div className="side-nav__item">Watermelon</div>
              </div>
            </div>
          </div>
          <div
            className={`side-nav__category ${isBreadCollapsed && "side-nav__category--collapsed"}`}
          >
            <div
              className="side-nav__heading"
              onClick={() => setIsBreadCollapsed(!isBreadCollapsed)}
            >
              <Icon />
              <span style={{ flex: 1 }}>Bread</span>
              <ChevronUp className="side-nav__heading-chevron" />
            </div>
            <div className="side-nav__category-content">
              <div className="side-nav__category-indent"></div>
              <div className="side-nav__group">
                <div className="side-nav__item">Sourdough</div>
                <div className="side-nav__item">Rye</div>
                <div className="side-nav__item">Wheat</div>
                <div className="side-nav__item">Pumpernickel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  args: {},
};
