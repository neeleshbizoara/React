import {Component}  from 'react'
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//   return <div><div>About us page</div>
//     <User name={ 'Neelesh Bizoara (functional Component)'} />
//     <UserClass name={ 'Neelesh Bizoara (Class)'} location={"Pune (Maharashtra)"} />
//   </div>;
// };
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }

  componentDidMount() {
        console.log('Parent Component Did Mounted')
    }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <div>About us page</div>
        <User name={"Neelesh Bizoara (functional Component)"} />
        <UserClass
          name={"Neelesh Bizoara (Class)"}
          location={"Pune (Maharashtra)"}
        />
        <UserClass
          name={"Akshay (Class)"}
          location={"Pune (Maharashtra)"}
        />
      </div>
    );
  }
}
export default About;
