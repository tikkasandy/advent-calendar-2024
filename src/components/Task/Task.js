import { useNavigate} from "react-router-dom";
import s from "./Task.module.scss";

const Task = ({ date }) => {
    const navigate = useNavigate();

    const onGoBack = () => {
     navigate("/");
    };

    return (
      <div>
        <button
          className={s.Button}
          type="button"
          aria-label="Go Back"
          onClick={onGoBack}
        >
          Back
        </button>
        <div className={s.Task}>December {date}</div>
      </div>
    );
};

export default Task;
