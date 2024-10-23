// // import { postServerData } from '../helper/helper';
// // import * as Action from '../redux/result_reducer';

// // export const PushAnswer = (result) => async (dispatch) => {
// //   try {
// //     await dispatch(Action.pushResultAction(result));
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// // export const updateResult = (index) => async (dispatch) => {
// //   try {
// //     await dispatch(Action.updateResultAction(index));
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// // /** insert user data */
// // export const usePublishResult = (resultData) => async (dispatch) => {
// //   if (!resultData || !resultData.result || !resultData.username) {
// //     console.error('Invalid resultData');
// //     return;
// //   }

// //   try {
// //     await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);
// //     dispatch(Action.pushResultAction(resultData.result)); // dispatch an action to update the state
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// import { postServerData } from '../helper/helper';
// import * as Action from '../redux/result_reducer';

// /** Push a new answer into the result */
// export const PushAnswer = (result) => async (dispatch) => {
//   try {
//     dispatch(Action.pushResultAction(result));
//   } catch (error) {
//     console.error("Failed to push answer:", error);
//   }
// };

// /** Update a specific result */
// export const updateResult = (index) => async (dispatch) => {
//   try {
//     dispatch(Action.updateResultAction(index));
//   } catch (error) {
//     console.error("Failed to update result:", error);
//   }
// };

// /** Insert user data and publish results to the server */
// export const usePublishResult = (resultData) => async (dispatch) => {
//   // Basic validation
//   if (!resultData || !resultData.result || !resultData.username) {
//     console.error('Invalid result data. Both username and result are required.');
//     return;
//   }

//   try {
//     // Send result data to the server
//     await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);

//     // After successful response, dispatch an action to update the state
//     dispatch(Action.pushResultAction(resultData.result));
//   } catch (error) {
//     console.error("Failed to publish result to the server:", error);
//   }
// };
import { postServerData } from '../helper/helper';
import * as Action from '../redux/result_reducer';

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.error(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    await dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.error(error);
  }
};

/** insert user data */
export const usePublishResult = (resultData) => async (dispatch) => {
  if (!resultData || !resultData.result || !resultData.username) {
    console.error('Invalid resultData');
    return;
  }

  try {
    await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);
    dispatch(Action.pushResultAction(resultData.result)); // dispatch an action to update the state
  } catch (error) {
    console.error(error);
  }
};