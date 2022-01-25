import React from "react";
import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Задания</StyledNavLink>
        </Item>
      </List>
      <List>
        <Item>
          <StyledNavLink to={toAuthor()}>Об авторе</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};