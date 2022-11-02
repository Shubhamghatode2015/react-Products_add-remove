import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  CloseButton,
  ListGroup,
  Form
} from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const getLocalItmes = () => {
  const list = localStorage.getItem("lists");
  if (list.length <= 2) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("lists"));
  }
};

const ProdList = () => {
  const [items, setItems] = useState(getLocalItmes());
  const [products, setProducts] = useState("");
  let navigate = useNavigate();
  let handelClick = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  const handelDelete = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
    localStorage.setItem("lists", JSON.stringify(updateditems));
  };
  return (
    <>
      <Container className="mt-3">
        <Container className="col-6 mt-3 text-center">
          <Form.Control
            type="search"
            placeholder="Search Products"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setProducts(e.target.value);
            }}
          />
          {items
            .filter((value) => {
              if (products === "") {
                return "";
              } else if (
                value.name
                  .toString()
                  .toLowerCase()
                  .includes(products.toLowerCase())
              ) {
                return value;
              }
            })
            .map((value) => {
              return (
                <>
                  <Container key={value.id}>
                    <p>{value.name}</p>
                  </Container>
                </>
              );
            })}
        </Container>

        <Container className="text-center">
          <Button className="mt-3 col-5 text-center" onClick={handelClick}>
            Add Product
          </Button>
        </Container>
        {items.length > 0 ? (
          <>
            {items.map((elem) => {
              return (
                <>
                  <Container className="mt-3 col-5 text-center" key={elem.id}>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item as="li">
                        <span> {elem.name} </span> <FaRupeeSign />{" "}
                        <span> {elem.number}</span>
                        <CloseButton
                          title="Delete Item"
                          onClick={() => handelDelete(elem.id)}
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </Container>
                </>
              );
            })}
          </>
        ) : (
          <h2 className="container text-center"> “No Product Found”</h2>
        )}
      </Container>
    </>
  );
};

export default ProdList;
