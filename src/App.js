import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Components/Counter"

class App extends React.Component {

  render() {
    return <div>
      <Counter />
      {/* <Card /> */}
    </div>
   
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

export default App;
