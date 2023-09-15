import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUserAsync } from "../../app/authenticationSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(registerUserAsync(formData))
    navigate('/login');
  }
  return (
    <>
      <section className="flex justify-center mt-10">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center font-poppins">
            Sign Up
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal text-center font-poppins"
            variant="small"
          >
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmitForm}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                size="lg"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="password"
                size="lg"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <Input
                type="password"
                size="lg"
                name="password_confirmation"
                label="Confirm passowrd"
                value={formData.password_confirmation}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button className="mt-6" fullWidth type="submit">
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </section>
    </>

  );
}

export default Signup;