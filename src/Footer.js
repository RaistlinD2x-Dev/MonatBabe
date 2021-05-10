import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <FooterLink href="http://www.facebook.com/USMonatBabe">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="https://www.instagram.com/mrs._richey_/">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="https://www.youtube.com/channel/UCLZFHW_7XaVM6nF8rCh-4ww">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>
                Youtube
              </span>
            </i>
          </FooterLink>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;