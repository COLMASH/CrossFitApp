import FormInit from "./components/FormInit";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email } = this.state;
    return (
      <div className="App">
        <FormInit email={email} handleChange={this.handleChange} />
      </div>
    );
  }
}
export default App;
