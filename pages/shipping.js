import { useRouter } from 'next/router';
import React from 'react';

export default function Shipping() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    router.push('/login');
    return (
        <div></div>
    )
}
