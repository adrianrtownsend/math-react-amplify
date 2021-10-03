import React, { useEffect, useReducer, createContext, useMemo } from 'react'
//import * as SecureStore from 'expo-secure-store'

import { Amplify, Auth, API, Cache, graphqlOperation } from 'aws-amplify'

import { IAction, IAppContext, IAuthActionData, IApiActionData, IState } from './types'

import * as Test from './testData.json'

import * as queries from './src/graphql/queries'
import * as mutations from './src/graphql/mutations'
import * as subscriptions from './src/graphql/subscriptions'

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
      console.log('testing: ', action.payload)
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
  }, [])

  const authContext = useMemo(() => ({
    action: async ({type, payload}: IAuthActionData) => {
      dispatch({
        type: type,
        payload: payload
      })
    }
  }), [])

  const apiContext = useMemo(() => ({
    action: async ({type, operation, model, variables}: IApiActionData) => {
      const getType = (type) => (
        type == 'query' ? queries :
        type == 'mutation' ? mutations :
        type == 'subscription' ? subscriptions :
        queries
      )
      const res = await API.graphql(
        graphqlOperation(
          getType(type)[`${operation}${model}`],
          variables
        )
      )

      // fix to test with classes

      return res
    }
  }), [])

  const navigationContext = useMemo(() => (
    async (data) => {
      
    }
  ), [])

  const value = {
    authContext,
    apiContext,
    //navigationContext,
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