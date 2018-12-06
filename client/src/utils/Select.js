import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'captian', label: 'Captian Morgan' },
  { value: 'maker', label: 'Makers Mark' },
  { value: 'old over', label: 'Old Overholt' }
];

class AutoSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}