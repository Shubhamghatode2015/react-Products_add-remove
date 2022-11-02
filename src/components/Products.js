import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Products = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  let navigate = useNavigate();
  // const cart = JSON.parse(localStorage.getItem('lists')) || '[]';
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(state));
  }, [state]);
  // let handelClick = (e) => {
  //   e.preventDefault();
  //   setState([...state, [name, number]]);
  //   console.log(state);

  // };

  const updateditems = state.filter((elem) => {
    return name === elem.name ? true : false;
  });
  console.log(updateditems);
  const addItem = (e) => {
    e.preventDefault();
    if (updateditems.length > 0) {
      alert("data is there");
    } else if (name && number) {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: name,
        number: number
      };
      setState([...state, allInputData]);
      alert("Your Product add Sussessfully");
      setName("");
      setNumber("");
    } else {
      alert("plzz fill data");
    }
  };

  return (
    <>
      <Container className="mt-3 text-center ">
        <Row className="justify-content-center">
          <Col className="md-10">
            <Card className="shadow-lg">
              <Card.Header className="p-3  text-light bg-primary">
                <h4>Create Your Product List</h4>
              </Card.Header>
              <Card.Body style={{ background: "lightblue" }}>
                <Form onSubmit={addItem}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                      name="text"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="name"
                      value={name}
                      placeholder="Enter Your Product's Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="price">price</Form.Label>
                    <Form.Control
                      name="number"
                      onChange={(e) => setNumber(e.target.value)}
                      type="number"
                      id="price"
                      value={number}
                      placeholder="Enter Your Product's price"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button className="mt-3" variant="primary" type="submit">
                      Add Product
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {localStorage.getItem("lists") ? (
          <Button
            className="mt-3"
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/prodlist");
            }}
          >
            product-List
          </Button>
        ) : (
          <h6> “No Product Found”</h6>
        )}
      </Container>
    </>
  );
};

export default Products;
