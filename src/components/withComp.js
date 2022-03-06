import React, { Component } from "react";

const withComp = (OrgComp) => {
  return class NewComp extends Component {
    state = {
      name: " comp",
    };
    updateNameState = () => {
      this.setState({
        name: "comp 2",
      });
    };

    render() {
      console.log(this.props);

      return (
        <OrgComp
          name={this.state.name}
          updateNameState={this.updateNameState}
          {...this.props}
        />
      );
    }
  };
};

export default withComp;
