import React from "react";
import type { useStateCallbackHookType } from "../types";

const useStateCallback: useStateCallbackHookType = <T>(initialValue: T) => {
  const [state, _setState] = React.useState(initialValue);
  const cbRef = React.useRef<Function | null>(null);

  const setState = React.useCallback((args: T, callback?: Function) => {
    if (callback) {
      cbRef.current = callback;
    }
    _setState(args);
  }, []);

  React.useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setState];
};

export default useStateCallback;
