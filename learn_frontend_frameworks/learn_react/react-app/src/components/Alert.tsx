import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
}

export const Alert = ({ children }: AlertProp) => {
  return <div className="alert alert-primary"> {children} </div>;
};
