import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/AuthReducer/action";
import axios from "axios";
import Nav from '../components/adminComponents/Navbar';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Center,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

let initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state);
  const toast = useToast();
  const navigate=useNavigate();
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormValues(initialValue);
    if (formValues.password !== formValues.confirmPassword) {
      toast({
        position: "top",
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(addUser());
    try {
      await axios.post("https://big-basket-api.onrender.com/Users", {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      });
      toast({
        position: "top",
        title: "Sign up successful!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      navigate('/login');
    } catch (err) {
      console.log(err);
      toast({
        position: "top",
        title: "Error signing up. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mx="auto" w={{ base: "80%", md: "50%" }}>
      <Heading as="h1" textAlign="center" my="8">
        Sign Up
      </Heading>
      {isError && (
        <Box textAlign="center" mb="4">
          <p>Error signing up. Please try again later.</p>
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </FormControl>
          <Button
            type="submit"
            isLoading={isLoading}
            backgroundColor={"#84c225"}
            color={"white"}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
          <Center>
          <Link to="/login" color={"#84c225"}>Login</Link>
          </Center>
        </Stack>
      </form>
    </Box>
  );
};

export default SignUp;
