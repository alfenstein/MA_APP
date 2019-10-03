//MineralList
import React from "react";
import { connect } from "react-redux";
import Mineral from "./Mineral";
import { getMinerals } from "../redux/selectors";
import { getMineralsByVisibilityFilter } from "../redux/selectors";
import { Visibility_Filter} from "../constants";

const MineralList = ({ minerals }) => (
    <ul className="Mineral-List">
        {minerals && minerals.length 
            ? minerals.map((minerals, index) => {
                    return <Mineral key={'mineral-${mineral.id}'} mineral={minerals} />;
                })
            : "No Minerals yet!"}
    </ul>
);

const mapStateToProps = state => {
    const { visibilityFilter} = state;
    const minerals = getMineralsByVisibilityFilter(state, visibilityFilter);
    return { minerals };
};

export default connect(mapStateToProps)(MineralList);

