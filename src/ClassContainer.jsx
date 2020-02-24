import "./ui/ClassContainer.css";

import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

class ClassContainer extends Component {
    render() {
        return (
            <div className={this.props.class + " " + this.props.classes.value} onClick={this.props.clickAction.execute}>
                {this.props.content}
            </div>
        );
    }
}
export default hot(ClassContainer);
