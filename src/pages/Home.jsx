import FormInit from "../components/FormInit";
import React from "react";
import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <FormInit
          email={this.props.email}
          handleChange={this.props.handleChange}
          handleSelectUser={this.props.handleSelectUser}
          handleSubmit={this.props.handleSubmit}
          history={this.props.history}
        />
      </div>
    );
  }
}
export default Home;
