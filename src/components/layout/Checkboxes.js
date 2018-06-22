import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { assign, extend, findIndex, map } from  'lodash';

let clickBox
let event_names

class Checkboxes extends Component {


  constructor(props) {
    super(props)
    clickBox = props.clickBox
    event_names = props.event_names
    console.log("event_names: ",event_names)
  }

  handleChange = name => event => {
    console.log(event_names)
    let n = name
    n['checked'] = event.target.checked
    clickBox(n)
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { event_names } = this.props;

    const event_checkboxes = event_names.map(({event_name, checked}, index) =>
        <div key={index}>

          {event_name}
          <Checkbox
            onChange={this.handleChange({event_name})}
            value={event_name}
            color="primary"
          />
        </div>
    );

    return (
      <div>
        {event_checkboxes}
      </div>
    );
  }
}

export default Checkboxes;
