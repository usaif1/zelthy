//dependencies
import { FC } from "react";

//imports
import s from "./container.module.css";

const Container: FC = (props: any) => {
  return <div className={s.container}>{props.children}</div>;
};

export default Container;
