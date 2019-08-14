import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  p {
    color: #58bc58;
  }
`;

class Header extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h(
          "header",
          {
            onclick: "{this.testClick.bind(this)}"
          },
          this.state.title
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "ohhhleg"
    };
  }

  testClick() {
    this.setstate({
      title: "cheung"
    });
  }

  componentDidMount() {}
}

Header.css = `p{color:#58bc58}`;
export default Header;
