import "./ui/ClassContainer.css";

import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

class ClassContainer extends Component {
    render() {
        return <div className={this.props.classes.value}>{this.props.content}</div>;
    }
}

export default hot(ClassContainer);
