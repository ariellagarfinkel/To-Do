import  Header from "./Header";
import  Content from "./Content";
import  Footer from "./Footer";
import  CreateToDo from "./CreateToDo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element = {<Content />}> </Route>
        <Route path="/createToDo" element = {<CreateToDo />}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
