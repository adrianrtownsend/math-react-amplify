import React, { useEffect, useReducer, createContext, useMemo } from "react";
//import * as SecureStore from 'expo-secure-store';

import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
//import * as subscriptions from './graphql/subscriptions';

interface IState {
  user: object | null;
  loading: boolean;
}

interface IDispatchContext {
  test: Function;
}

interface IAppContext {
  dispatchContext: IDispatchContext;
  state: IState;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IState = {
  user: null,
  loading: true
}

const reducer = (prevState: IState, action: IAction) => {
  switch(action.type) {
    case 'IS_LOADED': 
      console.log('loaded')
      return ({
        ...prevState,
        loading: false
      })
    case 'SIGN_OUT':
      return initialState
    case 'TEST':
      console.log('testing')
      return ({...prevState})
    case 'AUTH_CURRENT_USER':
      console.log('logged in user: ', action.payload.user)
      return ({
        ...prevState,
        user: action.payload.user
      })
    default:
      throw new Error()
  }
};

export const AppContext = createContext<IAppContext | null>(null)

export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type: 'IS_LOADED'})

    /*Auth.currentAuthenticatedUser({ bypassCache: false })
    .then(user => {
      dispatch({
        type: 'AUTH_CURRENT_USER',
        payload: { user }
      })
    })
    .catch(err => console.log('error getting user', err))*/
  }, [])

  const dispatchContext = useMemo(() => ({
    test: async () => {
      dispatch({type: 'TEST'})
    },
    signOut: async () => {
      try {
        await Auth.signOut()
      } catch(error) {
        console.log('error signing out: ', error)
      }
      dispatch({type: 'SIGN_OUT'})
    }
  }), [])

  const value = {
    dispatchContext,
    state
  }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

/*const appContext = useMemo(() => ({
    createClass: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    readClass: () => (),
    updateClass: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user
    }),
    deleteClass: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    createAssignment: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    readAssignment: () => (),
    updateAssignment: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    deleteAssignment: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
  }), []);

  const subscribeContext = useMemo(() => ({

  }), []);*/