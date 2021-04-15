export const Reducers = {
    onAmountChanged(state: any, amount: string): any {
        console.log(`Amount changed from ${state.amount} to ${amount}`);
        return {
            ...state,
            amount
        };
    },

    onCurrencyPairChanged(state: any, currencyPair: string): any {
        console.log(`currencyPair changed from ${state.currencyPair} to ${currencyPair}`);
        return {
            ...state,
            currencyPair
        };
    },

    book(state: any): any {
        return {
            ...state,
            isBooking: true,
            bookingResults: null
        };
    },

    bookingComplete(state: any, bookingSuccess: boolean): any {
        return {
            ...state,
            isBooking: true,
            bookingResults: true
        };
    },
    bookingFailed(state: any, bookingSuccess: boolean): any {
         return {
            ...state,
            isBooking: false,
            bookingResults: false
        };
    }
};