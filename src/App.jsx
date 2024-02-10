
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
 
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import EditProjectPage from "./pages/EditProjectPage";
import StudnetListPage from "./pages/StudnetListPage";
 
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
        <Route path="/projects/:projectId/edit" element={ <EditProjectPage /> } />
        <Route path="/students" element={ <StudnetListPage /> } />

      
      </Routes>
      
    </div>
  );
}
 
export default App;