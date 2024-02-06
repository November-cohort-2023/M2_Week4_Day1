
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
 
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
 
function App() {
  return (
    <div className="App">
      
     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={ <ProjectListPage /> } />
        <Route path="/projects/:projectId" element={ <ProjectDetailsPage /> } />
        <Route path="/projects/create" element={ <CreateProjectPage /> } />
      </Routes>
      
    </div>
  );
}
 
export default App;