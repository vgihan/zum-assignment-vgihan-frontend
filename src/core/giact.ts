export const Giact = (() => {
  let _state: any = [];
  let _render: any;
  let idx = 0;

  const render = (component: Function, $parent: HTMLElement) => {
    const renderComponent = component($parent);
    renderComponent.render();
    _render = renderComponent;
  };
  const useState = <T>(initState: T): [() => T, (newState: T) => void] => {
    const i = idx++;
    _state[i] = initState;
    const getState = (): T => _state[i];
    const setState = (newState: T) => {
      console.log(_state, _render);
      _state[i] = newState;
      if (_render) _render.render();
    };
    return [getState, setState];
  };

  return { useState, render };
})();
