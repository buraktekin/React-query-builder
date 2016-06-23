import React from 'react';
import { Input } from 'react-bootstrap';

class StringField extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
        <Input type="text" onChange={this.onChange.bind(this)} value={this.state.value}
               label={this.state.value} ref="textarea" />
    );
  }
}

StringField.propTypes = {
  /*help: React.PropTypes.string*/
};

export default StringField;
