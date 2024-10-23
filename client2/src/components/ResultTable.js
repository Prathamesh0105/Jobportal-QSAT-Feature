// import React, { useEffect, useState } from 'react'
// import { getServerData } from '../helper/helper'

// export default function ResultTable() {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
//             setData(res)
//         })
//     })

//   return (
//     <div>
//         <table>
//             <thead className='table-header'>
//                 <tr className='table-row'>
//                     <td>Name</td>
//                     <td>Attemps</td>
//                     <td>Earn Points</td>
//                     <td>Result</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 { !data ?? <div>No Data Found </div>}
//                 {
//                     data.map((v, i) => (
//                         <tr className='table-body' key={i}>
//                             <td>{v?.username || ''}</td>
//                             <td>{v?.attempts || 0}</td>
//                             <td>{v?.points || 0}</td>
//                             <td>{v?.achived || ""}</td>
//                         </tr>
//                     ))
//                 }
                
//             </tbody>
//         </table>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

export default function ResultTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the data from the server when the component mounts
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res);
        });
    }, []); // Empty dependency array ensures this effect runs only once after mount

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earned Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Show a message if no data is available */}
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="4">No Data Found</td>
                        </tr>
                    ) : (
                        data.map((v, i) => (
                            <tr className='table-body' key={i}>
                                <td>{v?.username || 'N/A'}</td>
                                <td>{v?.attempts || 0}</td>
                                <td>{v?.points || 0}</td>
                                <td>{v?.achived ? 'Passed' : 'Failed'}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
