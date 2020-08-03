import "./ui/ClassContainer.css";

import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

class ClassContainer extends Component {
    render() {
        const dynamicClasses =
            this.props.classes && this.props.classes.status === "available" ? this.props.classes.value : "";
        const dynamicStyles =
            this.props.styles && this.props.styles.status === "available" ? JSON.parse(this.props.styles.value) : {};

        return (
            <div
                className={this.props.class + " " + dynamicClasses}
                style={dynamicStyles}
                onClick={this._onclick.bind(this)}
            >
                {this.props.content}
            </div>
        );
    }
    _onclick() {
        const { clickAction } = this.props;
        if (clickAction && clickAction.canExecute && !clickAction.isExecuting) {
            clickAction.execute();
        }
    }
}
export default hot(ClassContainer);
