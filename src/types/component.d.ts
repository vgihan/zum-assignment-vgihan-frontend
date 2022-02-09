import { Node } from "./node";

export type Component = (pageProps?: {}) => ComponentReturnType;
export type ComponentReturnType = { template: () => Node };
