import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

function Payment() { 
    const { router } = useRouter();
    const [paymentMethod, setPaymentMethod] = useState('');
    const { state, dispatch } = useContext(Store);
    const { cart: {shippingAddress} } = state;


    useEffect (() => {
        if(!shippingAddress.address) {
            router.push('/shipping');
        } else {
            setPaymentMethod(Cookies.get('payment_Method') || '');
        }
    }, []);
    return (
        <Layout title="Payment Method">
            <CheckoutWizard activeStep={2}></CheckoutWizard>
            <form className="classes.form" onSubmit={submitHandler}></form>
        </Layout>
    )
}

export default Payment
