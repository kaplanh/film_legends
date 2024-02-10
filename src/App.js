import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import FilmContainer from "./components/FilmContainer";

function App() {
    return (
        <Container className="text-center">
            <Header />
            <FilmContainer />
        </Container>
    );
}

export default App;
