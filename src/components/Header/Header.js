import { useLocation, useNavigate } from "react-router-dom";
import TwinklesLeft from "../Decor/TwinklesLeft";
import TwinklesRight from "../Decor/TwinkleRight";
import { IoCalendarOutline } from "react-icons/io5";
import s from "./Header.module.scss";

const Header = ({ text }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldHideElement = location.pathname === "/";

  const onGoBack = () => {
    navigate("/");
  };

  return (
    <header className={s.Header}>
      <div className={s.Wrapper}>
        <TwinklesLeft></TwinklesLeft>
        <p className={s.Text}>{text}</p>
        <TwinklesRight></TwinklesRight>
      </div>

      {!shouldHideElement && (
        <button
          className={s.Button}
          type="button"
          aria-label="Go Back"
          onClick={onGoBack}
        >
          <IoCalendarOutline className={s.Svg} />
        </button>
      )}
    </header>
  );
};

export default Header;
