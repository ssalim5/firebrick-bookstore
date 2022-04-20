import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const book = (props) => {

    const book =props.book
    console.log('fdsfsdf',book)
    return(
      <div key={book.id} className="book">
                      <div>
                        <Link to={`/`}>
                          <img src={book.cover}></img>
                        </Link>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "250px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>{book.title}</h2>
                          <p>
                            {"BookPrice : "}
                            {book.price}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            variant="danger"
                            onClick={() => {
                            }}
                          >
                            kalp
                          </Button>
                          <Link to={`/`}>
                            <Button>Add cart</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
    )

}

export default book;
