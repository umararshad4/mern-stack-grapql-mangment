import AddClientModel from "../components/AddClientModel";
import AddProjectModel from "../components/AddProjectModel";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
        <AddProjectModel />
      </div>
      <Projects />
      <hr />
      <Clients />
    </div>
  );
};

export default Home;
