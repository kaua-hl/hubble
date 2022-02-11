import { StyledHeader, Nav, Logo, Image } from "./Header.styled";
import { Container } from "../../styles/Container.styled";
import { Flex } from "../../styles/Flex.styled";
import { Button } from "../../styles/Button.styled";

const logoName = "logo.svg";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={require(`../../assets/${logoName}`)} alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="../../assets/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
