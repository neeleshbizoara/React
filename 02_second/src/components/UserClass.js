import React from "react";
import "./user.css";
import IncreaseButton from "./IncreaseButton";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      gitInfo: {
        name: "Default Name",
        email: "Default"
      }
    };
    console.log("THIS in constructor: ", this);

    console.log(this.props.name + " Constructor is called");
  }

  async componentDidMount() {
    console.log(this.props.name + " Component Did Mounted");
    const data = await fetch("https://api.github.com/users/neeleshbizoara");
    const json = await data.json();
    console.log(json);
    this.setState({
      gitInfo: {
        name: json.name,
        email: json.email,
        avatar_url: json.avatar_url
      }
    });
  }

  componentDidUpdate() {
    console.log("Component Did Updated");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    this.setState({
      count: 0,
      count2: 1,
      gitInfo: {
        name: "Default Name",
        email: "Default"
      }
    });
  }

  componentDidCatch() {}

  render() {
    // const { name, location } = this.props;
    const { name, email, avatar_url } = this.state.gitInfo;
    const { count, count2 } = this.state;

    console.log(this.props.name + " Render is called");

    const increaseCount = () => {
      //   Never update state directly
      //   this.state.count = this.state.count + 1;

      this.setState({
        count: this.state.count + 1
      });
    };
    return (
      <div className="user-card">
        {avatar_url}
        <h2>Count = {count}</h2>
        <h2>Count2 = {count2}</h2>
        <div className="user-container">
          <div>
            <label>Name:</label>
            {name}
          </div>
          <div>
            <label>Email:</label>
            {email}
          </div>
          <img src={avatar_url} style={{ height: "100px", width: "100px" }} />

          {/* <label>Name:</label>{this.props.name}
                <label>Location:</label>{ this.props.name} */}
        </div>
        <IncreaseButton clickAction={increaseCount} label={"Increase Count"} />
        {/* <button onClick={increaseCount}>Increase Count</button> */}
      </div>
    );
  }
}

export default UserClass;
