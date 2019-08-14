import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const StyledComponents = styled.div`
  .IndexPage__normal___KDGPh {
    margin-top: 0 !important;
  }
`;

class ComponentName extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h(
          Layout,
          null,
          h(
            Header,
            {
              className: "header"
            },
            h("div", {
              className: "logo"
            }),
            h(
              Menu,
              {
                theme: "dark",
                mode: "horizontal",
                defaultSelectedKeys: ["2"],
                style: {
                  lineHeight: "64px"
                }
              },
              h(
                Menu.Item,
                {
                  key: "1"
                },
                "nav 1"
              ),
              h(
                Menu.Item,
                {
                  key: "2"
                },
                "nav 2"
              ),
              h(
                Menu.Item,
                {
                  key: "3"
                },
                "nav 3"
              )
            )
          ),
          h(
            Layout,
            null,
            h(
              Sider,
              {
                width: 200,
                style: {
                  background: "#fff"
                }
              },
              h(
                Menu,
                {
                  mode: "inline",
                  defaultSelectedKeys: ["1"],
                  defaultOpenKeys: ["sub1"],
                  style: {
                    height: "100%",
                    borderRight: 0
                  }
                },
                h(
                  SubMenu,
                  {
                    key: "sub1",
                    title: h(
                      "span",
                      null,
                      h(Icon, {
                        type: "user"
                      }),
                      "subnav 1"
                    )
                  },
                  h(
                    Menu.Item,
                    {
                      key: "1"
                    },
                    "option1"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "2"
                    },
                    "option2"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "3"
                    },
                    "option3"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "4"
                    },
                    "option4"
                  )
                ),
                h(
                  SubMenu,
                  {
                    key: "sub2",
                    title: h(
                      "span",
                      null,
                      h(Icon, {
                        type: "laptop"
                      }),
                      "subnav 2"
                    )
                  },
                  h(
                    Menu.Item,
                    {
                      key: "5"
                    },
                    "option5"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "6"
                    },
                    "option6"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "7"
                    },
                    "option7"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "8"
                    },
                    "option8"
                  )
                ),
                h(
                  SubMenu,
                  {
                    key: "sub3",
                    title: h(
                      "span",
                      null,
                      h(Icon, {
                        type: "notification"
                      }),
                      "subnav 3"
                    )
                  },
                  h(
                    Menu.Item,
                    {
                      key: "9"
                    },
                    "option9"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "10"
                    },
                    "option10"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "11"
                    },
                    "option11"
                  ),
                  h(
                    Menu.Item,
                    {
                      key: "12"
                    },
                    "option12"
                  )
                )
              )
            ),
            h(
              Layout,
              {
                style: {
                  padding: "0 24px 24px"
                }
              },
              h(
                Breadcrumb,
                {
                  style: {
                    margin: "16px 0"
                  }
                },
                h(Breadcrumb.Item, null, "Home"),
                h(Breadcrumb.Item, null, "List"),
                h(Breadcrumb.Item, null, "App")
              ),
              h(
                Content,
                {
                  style: {
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }
                },
                "Content"
              )
            )
          )
        ),
        ","
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
}

ComponentName.css = `.IndexPage__normal___KDGPh{margin-top:0 !important}`;
export default ComponentName;
