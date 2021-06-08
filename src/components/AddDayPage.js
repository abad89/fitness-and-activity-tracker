import { NavLink } from "react-router-dom"
import AddDayForm from "./AddDayForm"

function AddDayPage() {
  return (
    <div>
      <h1>Add New Day</h1>
      <NavLink to="/"><button>Home</button></NavLink>
      <AddDayForm />
    </div>
  );
}

export default AddDayPage;
