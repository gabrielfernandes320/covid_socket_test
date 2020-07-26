import React from "react";
import Toolbar, { Item } from "devextreme-react/toolbar";
import Button from "devextreme-react/button";
import UserPanel from "../user-panel/user-panel";
import "./header.scss";
import { Template } from "devextreme-react/core/template";

export default ({ menuToggleEnabled, title, toggleMenu, userMenuItems }) => (
  <header className={"header-component"}>
    <Toolbar className={"header-toolbar"}>
      <Item
        visible={menuToggleEnabled}
        location={"before"}
        widget={"dxButton"}
        cssClass={"menu-button"}
      >
        <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
      </Item>
      <Item
        location={"before"}
        cssClass={"header-title"}
        text={title}
        visible={!!title}
      />
    </Toolbar>
  </header>
);
