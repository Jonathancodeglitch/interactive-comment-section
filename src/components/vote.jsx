import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";

export default function Vote({ vote }) {
  return (
    <div className="vote">
      <button className="vote_btn" type="button">
        <img src={plus} alt="icon" />
      </button>
      <div className="count">{vote}</div>
      <button className="vote_btn" type="button">
        <img src={minus} alt="icon" />
      </button>
    </div>
  );
}
