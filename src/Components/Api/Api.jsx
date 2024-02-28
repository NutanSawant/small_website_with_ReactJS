import React from 'react';

// import React { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Api() {
    const data=useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/octocat`)
    //         .then((res) => res.json())
    //         .then(data => console.log(data)) ;
    //         setData(data);
    // }, [])
    return (
        <div className="text-center m-4 bg-green-400 text-white p-4 text-4xl">
        Location:{data.location}
        <img src={data.avatar_url} />
      </div>
    )
}

export default Api;
export const infoLoader = async()=>
{
    const response = await fetch(`https://api.github.com/users/octocat`)
    return response.json()
}