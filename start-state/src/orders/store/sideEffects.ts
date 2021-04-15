import {OrdersService} from "../services/ordersService";

const ordersService = new OrdersService();

export const SideEffects = {
    book(state: any, onDone: (doneAction: string, ...args: any) => void) {
        ordersService.book(state.currencyPair, state.amount, (result) => {
        	if(result) {
        		onDone('bookingComplete');
        	} else {
        		onDone('bookingFailed');
        	}
        })

    }
};