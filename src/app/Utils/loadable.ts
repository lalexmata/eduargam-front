export declare class Loadable<T, E = any>{
  private _data?;
  private _error?;
  private _loading?;
  constructor();
  get data(): T;
  set data(data: T);
  get error(): E;
  set error(error: E);
  get loading(): boolean;
  set loading(loading: boolean);
  private _clear;
}
