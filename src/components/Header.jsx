import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/3.png";
const Header = () => {
    return (
        <Container className="text-center mt-5 header">
            <Image className="logo" src={logo} width="250px"></Image>
            <h1 className="my-2 text-danger">Film Legends</h1>
        </Container>
    );
};

export default Header;
