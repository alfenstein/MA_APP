//addmineral
import React from "react";
import { connect } from "react-redux";
import { addMineral } from "../redux/actions";

class AddMineral extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddMineral = () => {
        this.props.addMineral(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <div>
                <input 
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-Mineral" onClick={this.handleAddMineral}>
                    Add Minerals
                </button>
            </div>
        );
    }

}

export default connect(
    null, 
    { addMineral }
)(AddMineral);
