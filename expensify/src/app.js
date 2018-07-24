import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseAction from './actions/expenses';
import * as filterAction from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(expenseAction.addExpense({
    description: 'Water bill',
    amount: 45000
}));

store.dispatch(expenseAction.addExpense({
    description: 'Gas bill',
    createdAt: 1000
}));

store.dispatch(expenseAction.addExpense({
    description: 'Rent',
    amount: 109500
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
