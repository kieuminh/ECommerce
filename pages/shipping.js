import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function Shipping() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    if (!userInfo) {
        router.push('login?redirect=/shipping');
    }
    
    return (
        <div>Shipping page</div>
    )
}
 