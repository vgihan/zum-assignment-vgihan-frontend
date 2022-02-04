import { Node } from "./node";

export type Component = () => ComponentReturnType;
export type ComponentReturnType = { template: () => Node };
