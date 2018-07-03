'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.deleteOption = _this.deleteOption.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'deleteOptions',
        value: function deleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'deleteOption',
        value: function deleteOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (word) {
                        return word !== option;
                    })
                };
            });
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) return 'Enter valid option';else if (this.state.options.indexOf(option) > -1) return 'This option already exists';
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var option = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[option]);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, deleteOptions: this.deleteOptions, deleteOption: this.deleteOption }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick, disabled: !props.hasOptions },
            'What should I do?'
        )
    );
};

// class Option extends React.Component {
//     constructor(props) {
//         super(props);
//         this.deleteOption = this.deleteOption.bind(this);
//     }
//
//     deleteOption() {
//         this.props.deleteOption(this.props.optionText);
//     }
//
//     render() {
//         return (
//             <div>
//                 <li key={this.props.optionText}> {this.props.optionText}</li>
//                 <button onClick={this.deleteOption}>Remove</button>
//             </div>
//         );
//     }
//
//
// }

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            { key: props.optionText },
            ' ',
            props.optionText
        ),
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.deleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

// Stateless Functional Component
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'ol',
            null,
            props.options.map(function (option) {
                return React.createElement(Option, { key: option, optionText: option, deleteOption: props.deleteOption });
            })
        ),
        React.createElement(
            'button',
            { onClick: props.deleteOptions },
            'Remove All Options'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = { error: undefined };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(IndecisionApp, null)
);

ReactDOM.render(jsx, document.getElementById('app'));
