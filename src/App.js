import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./pages/main.js";
import Login from "./pages/login.js";
import Interest from "./pages/interest.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact></Route>
                <Route path="/login" component={Login} exact></Route>
                <Route path="/interest" component={Interest} exact></Route>
                <Route render={({ location }) => <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
