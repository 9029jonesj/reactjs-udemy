import React from 'react';
import Option from './Option';

const Options = (props) => (<div>
  <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
    <button className="button button--link" onClick={props.deleteOptions}>Remove All</button>
  </div>
  {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
  <ol>
    {props.options.map((option) => <Option key={option} optionText={option} deleteOption={props.deleteOption}/>)}
  </ol>
</div>);

export default Options;
