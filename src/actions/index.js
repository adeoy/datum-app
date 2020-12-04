import axios from "axios";

export const actions = {
  setInitialState: "SET_INITIAL_STATE",

  addTask: "ADD_TASK",
  removeTask: "REMOVE_TASK",
  updateTask: "UPDATE_TASK",

  removeScrapedResult: "REMOVE_SCRAPED_RESULT",
};

export const setInitialState = (payload) => ({
  type: actions.setInitialState,
  payload,
});

export const getInitialState = () => {
  return async (dispatch) => {
    Promise.all([axios.get("http://127.0.0.1:5000/api/v1/tasks/")])
      .then(([tasks]) => {
        dispatch(
          setInitialState({
            tasks: tasks.data.data,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addTask = (payload) => ({
  type: actions.addTask,
  payload,
});

export const uploadTask = (task) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:5000/tasks/", task)
      .then(({ status, data }) => {
        if (status === 202) {
          dispatch(addTask({ _id: data.data, ...task }));
        }
      });
  };
};

export const removeTask = (payload) => ({
  type: actions.removeTask,
  payload,
});

export const deleteTask = (_id) => {
  return (dispatch) => {
    axios
      .delete(`http://127.0.0.1:5000/api/v1/tasks/${_id}`)
      .then(({ status }) => {
        if (status === 200) {
          dispatch(removeTask(_id));
        }
      });
  };
};

export const updateTask = (payload) => ({
  type: actions.updateTask,
  payload,
});

export const putTask = (task) => {
  return (dispatch) => {
    const _id = task._id;
    delete task["#"];
    delete task._id;
    axios
      .put(`http://127.0.0.1:5000/api/v1/tasks/${_id}`, task)
      .then(({ status }) => {
        if (status === 200) {
          dispatch(updateTask({ _id: _id, ...task }));
        }
      });
  };
};

export const removeScrapedResult = (payload) => ({
  type: actions.removeScrapedResult,
  payload,
});

export const deleteScrapedResult = (_id) => {
  return (dispatch) => {
    axios
      .delete(`http://127.0.0.1:5000/api/v1/scraping_results/${_id}`)
      .then(({ status }) => {
        if (status === 200) {
          dispatch(removeScrapedResult(_id));
        }
      });
  };
};
