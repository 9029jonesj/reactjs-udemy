import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  closeModal = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  deleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  deleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((word) => word !== option)
    }));
  };

  addOption = (option) => {
    if (!option)
      return 'Enter valid option';
    else if (this.state.options.indexOf(option) > -1)
      return 'This option already exists';
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (<div>
      <Header title={title} subtitle={subtitle}/>
      <div className="container">
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <div className="widget">
          <Options options={this.state.options} deleteOptions={this.deleteOptions} deleteOption={this.deleteOption}/>
          <AddOption addOption={this.addOption}/>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
      </div>
    </div>);
  }
}

IndecisionApp.defaultProps = {
  options: []
};
