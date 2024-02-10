import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helper/data";
import FilmCard from "./FilmCard";

const FilmContainer = () => {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value); //!setter metodlari asecron olarak calisir
        // console.log(search);
    };
    // console.log(search);

    // console.log(data);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    // console.log("filter", filteredData);

    return (
        <>
            <Form.Control
                onChange={handleChange}
                type="search"
                placeholder="Search Player..."
                className="w-50 m-auto"
            />

            <Container className="p-3 rounded-4 film-container my-3">
                <Row>
                    <Row
                        xs={1}
                        sm={2}
                        md={3}
                        lg={4}
                        // xl={6}
                        className="justify-content-center g-3"
                    >
                        {/* //!3 farkli sekilde props gönderimi ve alt comp karsilanmasi*/}

                        {/* {filteredData.map((film, i) => (
                            <FilmCard
                                key={i}
                                film={film}
                                //?{film} or const {name,img,statistics}=film
                                or
                                {...film}//!objenin icindeki tüm veriler lazimsa
                                //?{name,img, statistics}
                                or
                                img={film.img}
                                name={film.name}
                                statistics={film.statistics}
                                //?{name,img,statistics}
                            />
                        ))} */}
                        {
                            // !filtreleme ve maplemeyi bu sekilde ardardada yapabiirdik
                            // data
                            //     .filter((item) =>
                            //         item.name
                            //             .toLowerCase()
                            //             .includes(search.trim().toLowerCase())
                            //     )
                            //     .map((film, i) => (
                            //         <FilmCard key={i} {...film} />
                            //     ))

                            filteredData.map((film, i) => (
                                <FilmCard key={i} {...film} />
                            ))
                        }
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default FilmContainer;
