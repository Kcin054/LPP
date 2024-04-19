import { BrowserRouter, Route, Routes } from "react-router-dom";
import Full from "./Navbar"
import Page from "./Page/Page";
import EmotionPage from "./Page/EmotionPage";
import StarPage from "./Page/StarPage";
import Question from "./components/question";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Full />}>
          <Route path="/question" element={<Question/>}/>
          <Route path="/page" element={<Page />}/>
          <Route path="/emotionPage" element={<EmotionPage />}/>
          <Route path="/starPage" element={<StarPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
