import React from 'react';
import './styles/index.scss'
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="container">
        <Header />
        <Routes>
            <Route path={""} element={<HomePage/>}/>
            <Route path={"/character/:id"} element={<CharacterDetailsPage />}/>
            <Route path={"*"} element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
