import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    let text = e.target.value;
                    this.props.dispatch(setTextFilter(this.props.text));
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    let sort = e.target.value;
                    switch (sort) {
                        case 'date':
                            this.props.dispatch(sortByDate());
                            break;
                        case 'amount':
                            this.props.dispatch(sortByAmount());
                            break;
                        default:
                            break;
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start_date"
                    endDate={this.props.filters.endDate}
                    endDateId="end_date"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    showDefaultInputIcon={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div >
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);