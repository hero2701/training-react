import React from "react";

class Demo_one extends React.Component {
    constructor(props){
        super();
       this.state = {
        count : 1
       }
    }
   incre(){
     this.setState({count : this.state.count+=1})
   }

    render() {
        return (
            <div>
                <button onClick={() => this.incre()}>incr</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}


export default Demo_one
