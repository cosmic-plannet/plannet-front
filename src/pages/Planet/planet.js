import React from "react";
import { Route } from "react-router-dom";
import PlanetDetail from "./detail";
import PlanetList from "./list";

const Planet = ({ match }) => {
    return (
        <>
            {match.params.text && match.params.text !== "detail" && <Route expact path="/planet/:text" component={PlanetList} />}
            <Route exact path="/planet" component={PlanetList} />
            {match.params.id && <Route path="/planet/detail/:id" component={PlanetDetail} />}
        </>
    );
};

export default Planet;
