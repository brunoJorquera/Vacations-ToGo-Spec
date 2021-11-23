import React from "react";

import Header from './Header'
import Posts from './Posts'

import { Container } from "react-bootstrap";

export default function Dashboard() {
 
  return (
    <Container className="dash">
      <Header />
      <Posts/>
    </Container>
  );
}
