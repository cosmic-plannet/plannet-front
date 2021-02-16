import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./pages/main.js";
import Login from "./pages/login.js";
import Interest from "./pages/interest.js";
import Mypage from "./pages/mypage.js";
import Ranking from "./pages/ranking.js";
import Planet from "./pages/Planet/planet.js";
import Evaluation from "./pages/evaluation.js";
import Complete from "./pages/complete.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact></Route>
                <Route path="/login" component={Login} exact></Route>
                <Route path="/interest" component={Interest} exact></Route>
                <Route path="/mypage" component={Mypage} exact></Route>
                <Route path="/ranking" component={Ranking} exact></Route>
                <Route exact path="/planet" component={Planet} />
                <Route path="/planet/:text/:id?" component={Planet} />
                <Route path="/evaluation" component={Evaluation} />
                <Route path="/complete" component={Complete} />
                <Route render={({ location }) => <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
