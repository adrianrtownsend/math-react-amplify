
export interface IListAction {
  type: string;
  operation: string;
  model: string;
  variables?: object;
}

export interface IList {
  action: IListAction;
  style?: string;
}

export interface IState {
  user: object | null;
  loading: boolean;
}

export interface IDispatchAction {
  dispatchAction: Function;
}

export interface IAuthActionData {
  type: string;
  payload?: object;
}

export interface IAuthAction {
  action: Function;
}

export interface IApiActionData {
  type: string;
  operation: string;
  model: string;
  variables?: object;
}

export interface IApiAction {
  action: Function;
}

export interface IAppContext {
  authContext?: IAuthAction;
  apiContext?: IApiAction;
  state: IState;
}

export interface IAction {
  type: string;
  payload?: object | any;
}