import * as React from 'react';
import {Store} from '../infrastructure/store';
import {Reducers} from '../store/reducers';
import {SideEffects} from '../store/sideEffects';

export default class OrdersView extends React.Component<any, any> {
    private store: Store<any>;

    constructor(props: any) {
        super(props);

        const initialState: any = {
            amount: '1m',
            currencyPair: 'USDGBP',
            isBooking: false,
            bookingResults: null,
        };

        this.store = new Store(
            initialState,
            Reducers,
            SideEffects,
            (nextState: any) => this.setState(nextState)
        );

        // set initial state
        this.state = this.store.currentState;
    }

    onAmountChanged = (amount: any) => {
        this.store.dispatchAction('onAmountChanged', amount);
    };

    onCurrencyPairChanged = (ccyPair: string) => {
        this.store.dispatchAction('onCurrencyPairChanged', ccyPair);
    };

    onBookRequested = () => {
        this.store.dispatchAction('book');
    };

    render() {
        return (
            <div>
                <h1>OrdersList</h1>
                Amount: <input type="text" value={this.state.amount}
                               onChange={(e) => this.onAmountChanged(e.target.value)}/>
                <br/>
                Currency:
                <select value={this.state.currencyPair} onChange={(e) => this.onCurrencyPairChanged(e.target.value)}>
                    <option value="EURUSD">EURUSD</option>
                    <option value="USDJPY">USDJPY</option>
                    <option value="USDGBP">USDGBP</option>
                </select>
                <br/>
                Order summary: <br/>
                Amount({this.state.amount})
                <br/>
                <button onClick={(e) => this.onBookRequested()}>
                    book
                </button>
                { this.state.isBooking && this.state.bookingResults == null && ( <h2> IN PROGRESS</h2>)}
                { this.state.bookingResults  !== null && this.state.isBooking  && ( <h2> DONE</h2>)}
                { this.state.bookingResults  !== null && !this.state.isBooking  && ( <h2> FAILED</h2>)}
            </div>
        );
    }
}
