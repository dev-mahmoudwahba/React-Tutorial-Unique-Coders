import React, { Component ,createRef,Fragment, PureComponent } from "react";

class Home extends Component {
// refs example
constructor(props){
  super(props)
  this.callbackRef = null;
  this.callbackRefFun = (ele)=> {
        this.callbackRef = ele
    }
  // this.inputRef = createRef()
}

componentDidMount(){
  if (this.callbackRef){
    this.callbackRef.focus()
  }
// this.inputRef.current.focus()
}

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
    // console.log("home comp");
    
    return (
      <Fragment>
          <div> 
            {/* <input type ="text" ref={this.inputRef} /> */}
            <input type ="text" ref={this.callbackRefFun} />
             </div>
      </Fragment>
    );
  }
}

export default Home;
