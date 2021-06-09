import { NavLink } from "react-router-dom"
import AddDayForm from "./AddDayForm"

function AddDayPage({ onAddDay }) {
  return (
    <div className="container">
      <h1 className="text-center">Add New Day</h1>
      <AddDayForm onAddDay={onAddDay} />
      <div className="container d-flex justify-content-center my-3">
        <NavLink to="/"><button className="btn btn-secondary">Home</button></NavLink>
      </div>
    </div>
  );
}

export default AddDayPage;
