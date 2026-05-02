import { createPortal } from "react-dom";
interface IProps {
  children: React.ReactNode;
}
function ModalsWrapper({ children }: IProps) {
  return createPortal(<div>{children}</div>, document.body);
}

export default ModalsWrapper;
