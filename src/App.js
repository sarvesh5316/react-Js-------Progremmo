import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlesListPage from "./pages/ArticlesListPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < NavBar />
        <h1>My Awesome Blog Website</h1>
        <div id="page-body"> 
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/articles" element={< ArticlesListPage/>}/>
            <Route path="/articles/:articleId" element={< ArticlesPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;


