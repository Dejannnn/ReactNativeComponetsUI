import React from "react";
// import { Text, View } from "react-native";

//Types
import {PageProps} from "./types"

//Styled
import { Container } from "./styled";
const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>Test components {title}</h1>
      {children}
    </Container>
  );
};

export default Page;
