import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    if (email && password) {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!(localStorage.setItem("session", JSON.stringify(data)))=== true) {
            alert("Login sussefully");
            localStorage.setItem("session", JSON.stringify(data));
            navigate("/products");
          } else {
            alert("login plz!");
          }
        });
    } else {
      alert("login plz!");
    }
  };

  useEffect(() => {
    localStorage.getItem("session") === null
      ? navigate("/login")
      : navigate("/");
  }, [navigate]);
  return (
    <>
      <Container className="mt-3">
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type={email}
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={password}
              placeholder="Password"
              name="password"
              onChange={(e) => setPasword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
