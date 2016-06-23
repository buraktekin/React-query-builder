import React from 'react';
import { Input, Well } from 'react-bootstrap';

class SelectField extends React.Component{
    constructor(props) {
        super(props);
    }
    renderSelections() {
        const selections = [];
        this.props.selections.map(function loop(selection, index) {
            selections.push(
                <Input type="select" key={index} label={selection.label} {...selection}>
                    <option>Select...</option>
                </Input>
            );
        });
        return selections;
    }

    render() {
        const selections = this.renderSelections();
        return (
            <div className="selectboxes">
                <Well>
                    {selections}
                </Well>
            </div>
        );
    }
}

export default SelectField;