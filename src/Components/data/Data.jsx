import React from 'react';
import { useParams } from 'react-router-dom';

function Data() {
    const {uid} = useParams()
    return ( 
        <div>User:{uid}</div>
     );
}

export default Data;