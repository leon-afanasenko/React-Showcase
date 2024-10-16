import { useState, useEffect } from 'react';
import { login } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../redux/slices/authSlice';
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ email, password }));
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/profile');
    }
    return () => {
      dispatch(resetState());
    };
  }, [isSuccess, navigate, dispatch]);

  if (isLoading) return <h1>loading</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {isError && <p>{message}</p>}
      {isSuccess && <p>Login successful</p>}
    </div>
  );
}

export default Login;
