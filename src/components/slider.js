import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const CustomSlider = ({ value, handleChange }) => {
    const useStyles = makeStyles({
        root: {
            width: 200,
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </div>
    );
};

export default CustomSlider;
