import { BrowserRouter, Route } from "react-router-dom";
import About from "./category/About/About";
import Contact from "./category/Contact/Contact";
import Home from "./Home";
import Project from "./category/Project/Project";
import Recruitment from "./category/Recruitment/Recruitment";
import Member from "./category/Member/Member";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/recruitment" component={Recruitment} />
        <Route path="/contact" component={Contact} />
        <Route path="/Projectpage" component={Project} />
        <Route path="/member" component={Member} />
      </BrowserRouter>
    </div>
  );
}

export default App;
