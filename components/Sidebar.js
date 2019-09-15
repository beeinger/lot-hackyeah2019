import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Icon } from "semantic-ui-react";
import Link from "next/link";
import { Subscribe } from "unstated";
import { sidebarContainer } from "../containers/sidebar";

const OurSidebar = () => (
  <Subscribe to={[sidebarContainer]}>
    {sidebar => (
      <SideNav
        defaultSelected="home"
        style={{
          background: "rgba(119,136,153,0.1)",
          position: "fixed"
        }}
        expanded={sidebar.state.expanded}
        onToggle={() =>
          sidebar.setState({
            expanded: !sidebar.state.expanded
          })
        }
        onMouseEnter={() =>
          sidebar.setState({
            expanded: true
          })
        }
        onMouseLeave={() =>
          sidebar.setState({
            expanded: false
          })
        }
      >
        <SideNav.Toggle style={{ background: "rgb(19,45,114, 0.75)" }} />
        <SideNav.Nav>
          <Link href="/">
            <NavItem
              style={{
                background:
                  sidebar.state.location === "feed"
                    ? "rgba(0,0,0,0.2)"
                    : "rgba(0,0,0,0)"
              }}
            >
              <NavIcon>
                <Icon
                  name="home"
                  style={{
                    fontSize: "1.75em",
                    color: "rgb(19,45,114)"
                  }}
                />
              </NavIcon>
              <NavText style={{ color: "rgb(19,45,114)" }}>Home</NavText>
            </NavItem>
          </Link>
          <Link href="/search">
            <NavItem
              style={{
                background:
                  sidebar.state.search === true
                    ? "rgba(0,0,0,0.2)"
                    : "rgba(0,0,0,0)"
              }}
            >
              <NavIcon>
                <Icon
                  name="plane"
                  style={{ fontSize: "1.75em", color: "rgb(19,45,114)" }}
                />
              </NavIcon>
              <NavText style={{ color: "rgb(19,45,114)" }}>
                Search flights
              </NavText>
            </NavItem>
          </Link>
          <Link href="/settings">
            <NavItem
              style={{
                background:
                  sidebar.state.location === "settings"
                    ? "rgba(0,0,0,0.2)"
                    : "rgba(0,0,0,0)"
              }}
            >
              <NavIcon>
                <Icon
                  name="settings"
                  style={{ fontSize: "1.75em", color: "rgb(19,45,114)" }}
                />
              </NavIcon>
              <NavText style={{ color: "rgb(19,45,114)" }}>Settings</NavText>
            </NavItem>
          </Link>
        </SideNav.Nav>
      </SideNav>
    )}
  </Subscribe>
);

export default OurSidebar;
