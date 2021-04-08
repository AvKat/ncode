export interface JSONResponseListItem {
  name: string;
  dir: boolean;
}

export interface JSONResponseList {
  status: 0 | 1;
  data: JSONResponseListItem[];
}

export type useStateCallbackHookType = <T extends unknown>(
  initialValue: T
) => [T, (args: T, callback?: Function) => void];

// Needed for monaco env setup
declare global {
  interface Window {
    MonacoEnvironment: any;
  }
}
