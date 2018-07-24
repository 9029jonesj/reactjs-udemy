import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('Filter Reducer', () => {
    test('Should setup default filter values', () => {
        const state = filtersReducer(undefined, {
            type: '@@INIT'
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('Should set sort by to amount', () => {
        const state = filtersReducer(undefined, {
            type: 'SORT_BY_AMOUNT'
        });        
        expect(state.sortBy).toBe('amount');
    });

    test('Should set sort by to date', () => {
        const currentState = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sortBy: 'amount'
        };
        const action = {
            type: 'SORT_BY_DATE'
        };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('date');
    });

    test('Should set text filter', () => {
        const text = 'Test Text';
        const action = {
            type: 'SET_TEXT_FILTER',
            text
        };        
        const state = filtersReducer(undefined, action);
        expect(state.text).toBe(text);
    });

    test('Should set start date filter', () => {
        const startDate = moment();
        const state = filtersReducer(undefined, {
            type: 'SET_START_DATE',
            startDate
        });
        expect(state.startDate).toEqual(startDate);
    });

    test('Should set end date filter', () => {
        const endDate = moment();
        const state = filtersReducer(undefined, {
            type: 'SET_END_DATE',
            endDate
        });
        expect(state.endDate).toEqual(endDate);
    });
});