import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const FilmCard = ({ name, img, statistics }) => {
    const [showImage, setShowImage] = useState(true);
    //! JSX icinde yani return icinde if-else kullanamiyoruz onun yerine && or || or ternary(?:) kullanabiliriz if-else i return üzerinde yazip icinde jsx yazabiliriz
    return (
        <Col>
            <Card
                onClick={() => setShowImage(!showImage)}
                className="film-card"
                role="button"
            >
                {showImage ? (
                    <Card.Img variant="top" src={img} height="350px" />
                ) : (
                    <ul className="m-auto">
                        {statistics.map((item, i) => (
                            <li
                                className="list-unstyled h5 text-start "
                                key={i}
                            >
                                <span className="text-danger"> 📽 </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                <Card.Footer>
                    <Card.Title>{name}</Card.Title>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default FilmCard;
