import React from 'react';

const Option = (props) => (
    <div className="option">
        <li key={props.optionText} className="option__text"> {props.optionText}</li>
        <button className="button button--link" onClick={(e) => {
            props.deleteOption(props.optionText)
        }}>Remove
        </button>
    </div>
);

export default Option;
