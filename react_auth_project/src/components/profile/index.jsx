import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;

  if (!tokenData) return <h1>Login into account</h1>;

  function onClick() {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">{tokenData.user.id}</h1>
      <button className="logout-button" onClick={onClick}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
