import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses';

describe('Expense Actions', () => {

    test('Remove Expense', () => {
        const action = removeExpense({
            id: '123abc'
        });
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        });
    });

    test('Edit Expense', () => {
        const action = editExpense('123abc', {
            description: 'Edit Expense'
        });
        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id: '123abc',
            updates: {
                description: 'Edit Expense'
            }
        });
    });

    test('Add Expense - Default Values', () => {
        const action = addExpense();
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                description: '',
                note: '',
                amount: 0,
                createdAt: 0,
                id: expect.any(String)
            }
        });
    });

    test('Add Expense - Custom Values', () => {
        const expenseData = {
            description: 'Description',
            note: 'Note',
            amount: 9000,
            createdAt: 314
        };
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
    });
});