import React from "react";
import FilterHead from "./FilterHead";
import Results from "./Results";

import { Container } from "react-bootstrap";

export default function FilterPage() {
 
  return (
    <Container className="dash">
      <FilterHead />
      <Results/>
    </Container>
  );
}