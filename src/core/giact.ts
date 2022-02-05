import { Component, ComponentReturnType } from "../types/component";
import { VirtualDom } from "./virtualDom";

export const Giact = (() => {
  let _state: any = [];
  let _render: Function;
  let _root: ComponentReturnType;
  let idx = 0;

  const render = (component: Component, $parent: HTMLElement) => {
    if (!_root) _root = component();
    if (!_render) _render = () => VirtualDom.render(_root.template(), $parent);
    _render();
  };
  const useState = <T>(initState: T): [() => T, (newState: T) => void] => {
    const i = idx++;
    _state[i] = initState;
    const getState = (): T => _state[i];
    const setState = (newState: T) => {
      _state[i] = newState;
      if (_render) _render();
    };
    return [getState, setState];
  };

  return { useState, render };
})();
