import React, { Component } from "react";
import { CnxtConsum } from "./ContextComp";
class CompC extends Component {
  render() {
    return (
      <CnxtConsum  >
        {
            (name)=> {
                return <div> hamada {name} </div>
            }
        }
      </CnxtConsum>
    );
  }
}
export default CompC;
