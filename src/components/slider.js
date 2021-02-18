import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PrettoSlider = withStyles({
    root: {
        color: "#686196",
        height: 30,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const CustomSlider = ({ value, handleChange }) => {
    const useStyles = makeStyles({
        root: {
            width: 1000,
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PrettoSlider value={value} onChange={handleChange} aria-labelledby="continuous-slider" valueLabelDisplay="auto" />
        </div>
    );
};

export default CustomSlider;

// export default PrettoSlider;
