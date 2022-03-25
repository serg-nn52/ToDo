import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActionFilter } from "../../store/filter/actions";
import { setStateColor } from "../../store/filter/selectors";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const colorButtonText = useSelector(setStateColor);

  return (
    <>
      <button
        type="button"
        style={{ color: colorButtonText === "all" ? "red" : "black" }}
        onClick={() => dispatch(createActionFilter("all"))}>
        All
      </button>
      <button
        type="button"
        style={{ color: colorButtonText === "done" ? "red" : "black" }}
        onClick={() => dispatch(createActionFilter("done"))}>
        Done
      </button>
      <button
        type="button"
        style={{ color: colorButtonText === "actual" ? "red" : "black" }}
        onClick={() => dispatch(createActionFilter("actual"))}>
        {" "}
        Actual
      </button>
    </>
  );
};

export default Filter;
