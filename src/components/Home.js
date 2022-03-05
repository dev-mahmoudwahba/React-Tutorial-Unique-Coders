import React, { Component ,Fragment, PureComponent } from "react";

class Home extends PureComponent {
//   constructor(props) {
//     super(props);
//     console.log("1- constructor");

//     this.state = {
//       name: "home",
//     };
//   }

//   updateData = () => {
//     this.setState({
//       name: "home comp",
//     });
//   };

//   static getDerivedStateFromProps(props, state) {
//     console.log("2-getDerivedStateFromProps");
//     return null;
//   }

// //   componentDidMount() {
// //     console.log("4-componentDidMount");
// //   }
//   shouldComponentUpdate(nextProps, nextState) {
//       console.log("shouldComponentUpdate");
//       return true
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log("getSnapshotBeforeUpdate");
//   }
//   componentDidUpdate(prevProps, prevState) {
//       console.log("componentDidUpdate");
//   }

  render() {
    console.log("home comp");
    return (
      <Fragment>
          <div> Home comp </div>
         
      </Fragment>
    );
  }
}

export default Home;
