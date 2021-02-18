import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

const CustomCheckbox = withStyles({
    root: {
        color: "#686196",
        "&$checked": {
            color: "#686196",
        },
    },
    checked: {},
})((props) => <Checkbox disabled checked inputProps={{ "aria-label": "disabled checked checkbox" }} color="default" {...props} />);

// const CustomCheckbox = () => {
//     const [checked, setChecked] = React.useState(true);
//     const handleChange = (event) => {
//         setChecked(event.target.checked);
//     };

//     return <Checkbox checked={checked} onChange={handleChange} inputProps={{ "aria-label": "primary checkbox" }} />;
// };

export default CustomCheckbox;
