import { PureComponent } from "react";
import Head from "next/head";
import { Provider, Subscribe } from "unstated";
import { Grommet, ResponsiveContext } from "grommet";
import { Swipeable } from "react-swipeable";
import OurSidebar from "./Sidebar.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { sidebarContainer } from "../containers/sidebar.js";

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div style={{ width: "100%", height: "100%" }} className="wrapper">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="LOT" content="Lot booking" />
          <title>LOT</title>
          {/* <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/manifest/favicon.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/manifest/favicon.ico"
          />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3d5194" />
          <link rel="manifest" href="/static/manifest/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="/static/manifest/icons/icon-192x192.png"
          /> */}
          <link
            rel="preload"
            as="style"
            href="/static/resources/css/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/resources/css/react-sidenav.css"
          />
          <link
            rel="preload"
            as="style"
            href="/static/resources/css/bootstrap.min.css"
          />
          <link
            rel="preload"
            as="style"
            href="/static/resources/css/mdb.min.css"
          />
          <link
            rel="preload"
            as="style"
            href="/static/resources/css/datepicker.css"
          />
          <link rel="stylesheet" href="/static/resources/css/datepicker.css" />
          <link
            rel="stylesheet"
            href="/static/resources/css/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/resources/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/resources/css/mdb.min.css" />
          />
        </Head>
        <Grommet plain>
          <Provider>
            <Subscribe to={[]}>
              {containers => (
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionLeave={false}
                  transitionEnter={false}
                  transitionAppearTimeout={500}
                >
                  <Swipeable
                    onSwipedLeft={eventData =>
                      sidebarContainer.setState({ expanded: false })
                    }
                    onSwipedRight={eventData =>
                      sidebarContainer.setState({ expanded: true })
                    }
                  >
                    <OurSidebar />
                    <div
                      onClick={() =>
                        sidebarContainer.setState({ expanded: false })
                      }
                    >
                      <div
                        className="main"
                        style={{
                          height: "100%",
                          minHeight: "100vh"
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  </Swipeable>
                </ReactCSSTransitionGroup>
              )}
            </Subscribe>
            <ResponsiveContext.Consumer>
              {size => {
                // this.updateSize(size);
              }}
            </ResponsiveContext.Consumer>
          </Provider>
        </Grommet>
        <style jsx global>
          {``}
        </style>
      </div>
    );
  }
}
