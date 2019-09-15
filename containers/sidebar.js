import { Container } from "unstated";

class SidebarContainer extends Container {
  state = {
    expanded: false,
    location: "",
    search: false
  };
}

export const sidebarContainer = new SidebarContainer();
