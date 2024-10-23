// // import { useSelector } from "react-redux";
// // import { Navigate } from "react-router-dom";
// // import axios from 'axios'

// // export function attempts_Number(result){
// //     return result.filter(r => r !== undefined).length;
// // }

// // export function earnPoints_Number(result, answers, point){
// //     return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
// // }

// // export function flagResult(totalPoints, earnPoints){
// //     return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
// // }

// // /** check user auth  */
// // export function CheckUserExist({ children }){
// //     const auth = useSelector(state => state.result.userId)
// //     return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
// // }

// // /** get server data */
// // export async function getServerData(url, callback){
// //     const data = await (await axios.get(url))?.data;
// //     return callback ? callback(data) : data;
// // }


// // /** post server data */
// // export async function postServerData(url, result, callback){
// //     const data = await (await axios.post(url, result))?.data;
// //     return callback ? callback(data) : data;
// // }
// import axios from 'axios';
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// /** Calculate total attempts */
// export function attempts_Number(result) {
//     return result.filter(r => r !== undefined).length;
// }

// /** Calculate earned points */
// export function earnPoints_Number(result, answers, point) {
//     return result
//         .map((element, i) => answers[i] === element)
//         .filter(i => i)
//         .map(i => point)
//         .reduce((prev, curr) => prev + curr, 0);
// }

// /** Check if the user has passed */
// export function flagResult(totalPoints, earnPoints) {
//     return (totalPoints * 50) / 100 < earnPoints; /** 50% passing criteria */
// }

// /** Check user authentication */
// export function CheckUserExist({ children }) {
//     const auth = useSelector(state => state.result.userId);
//     return auth ? children : <Navigate to={'/'} replace={true}></Navigate>;
// }

// /** Fetch data from the server (GET) */
// export async function getServerData(url, callback) {
//     try {
//         const { data } = await axios.get(url);
//         return callback ? callback(data) : data;
//     } catch (error) {
//         console.error('Error fetching data from server:', error);
//         return null; // You can also return a default value or handle it according to your app logic
//     }
// }

// /** Send data to the server (POST) */
// export async function postServerData(url, result, callback) {
//     try {
//         const { data } = await axios.post(url, result);
//         return callback ? callback(data) : data;
//     } catch (error) {
//         console.error('Error posting data to server:', error);
//         return null; // Handle according to your app logic
//     }
// }
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}