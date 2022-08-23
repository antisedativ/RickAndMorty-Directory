import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={""} element={<HomePage/>}/>
            <Route path={"/character/:id"} element={<CharacterDetailsPage />}/>
            <Route path={"*"} element={<h1>Not found :(</h1>} />
        </Routes>
    </div>
  );
}

export default App;
