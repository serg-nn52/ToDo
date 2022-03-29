import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filter, selectFilter } from "../../store/filter/sliceFilter";

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const colorButtonText = useAppSelector(selectFilter);

  return (
    <>
      <button
        type="button"
        style={{ color: colorButtonText === "all" ? "red" : "black" }}
        onClick={() => dispatch(filter("all"))}>
        All
      </button>
      <button
        type="button"
        style={{ color: colorButtonText === "done" ? "red" : "black" }}
        onClick={() => dispatch(filter("done"))}>
        Done
      </button>
      <button
        type="button"
        style={{ color: colorButtonText === "actual" ? "red" : "black" }}
        onClick={() => dispatch(filter("actual"))}>
        {" "}
        Actual
      </button>
    </>
  );
};

export default Filter;
