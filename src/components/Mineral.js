//mineral

import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleMineral } from "../redux/actions";

const Mineral = ({ mineral, togglemineral }) => (
    <li className="mineral-item" onClick={() => toggleMineral(mineral.id)}>
        {mineral && mineral.completed ? "👌" : "👋"}{" "}
        <span 
            className={cx(
                "Mineral-item__text",
                mineral && mineral.completed && "Mineral-item__text--completed"
            )}
        >
            {mineral.content}
        </span>
    </li>
);

export default connect(
    null,
    { toggleMineral }
)(Mineral)