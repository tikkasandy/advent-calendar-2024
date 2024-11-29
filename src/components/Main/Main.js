import s from "./Main.module.scss";

const Main = ({ children }) => {
  return <main className={s.Main}>{children}</main>;
};

export default Main;
