import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Container } from "react-bootstrap";
import Random from './Random'

export default function Profile() {
  return (
    <Container className="dash">
      <ProfileHeader />
      <Random />
    </Container>
  );
}
