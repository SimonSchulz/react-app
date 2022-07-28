import React from 'react';
import Page from "../page/page";

import store from "../../redux/store";
const OrderPage = () => {
    const id = store.getState().orderReducer.join();
    return (
        <Page title={'My orders'} id={id} />
    );
};
export default OrderPage;