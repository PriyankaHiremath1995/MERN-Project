import {
    MESSAGE_CREATE_FAIL,
    MESSAGE_CREATE_REQUEST,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_DELETE_FAIL,
    MESSAGE_DELETE_REQUEST,
    MESSAGE_DELETE_SUCCESS,
    MESSAGE_LIST_FAIL,
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_UPDATE_FAIL,
    MESSAGE_UPDATE_REQUEST,
    MESSAGE_UPDATE_SUCCESS,
  } from "../constants/messageConstants";
  import axios from "axios";
  
  export const listMessage = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: MESSAGE_LIST_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const url = (userInfo.email === "CPM@gmail.com") ? '/api/message/allMessages' : '/api/message'
  
      const { data } = await axios.get(url, config);
  
      dispatch({
        type: MESSAGE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: MESSAGE_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  export const createMessageAction = (title, content) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: MESSAGE_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/message/create`,
        { title, content },
        config
      );
  
      dispatch({
        type: MESSAGE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: MESSAGE_CREATE_FAIL,
        payload: message,
      });
    }
  };
  
  export const deleteMessageAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: MESSAGE_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/message/${id}`, config);
  
      dispatch({
        type: MESSAGE_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: MESSAGE_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateMessageAction = (id, title, content) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: MESSAGE_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/message/${id}`,
        { title, content },
        config
      );
  
      dispatch({
        type: MESSAGE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: MESSAGE_UPDATE_FAIL,
        payload: message,
      });
    }
  };