import { useEffect, useState } from "react";
import MovieCard from "../../Common/MovieCard";
import image from "../../Assets/No-data-cuate.png";

import * as s from "./styles";

interface IMovieCard {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
}

function Movies() {
    const [movies, setMovies] = useState<IMovieCard[]>([]);
    const [nominees, setNominees] = useState<string[]>([]);
    const [searchTitle, setSearchTitle] = useState<string>("s=Avengers");
    const [size, setSize] = useState<number>(0);

    function removeNominee(title: string) {
        setSearchTitle("s="+title);
    }

    function getNominees() {
        let tempNominees = [] as any[];

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i) as string;
            tempNominees[i] = localStorage.getItem(key);
        }

        return tempNominees;
    }

    function getSize() {
        setSize(localStorage.length);
    }

    useEffect(() => {
        setNominees(getNominees);

        fetch(`https://www.omdbapi.com/?${searchTitle}&apikey=d3f01f2d`)
        .then(results => results.json())
        .then(data => {
            setMovies(data.Search);
        })
    }, [searchTitle, size]);

    return (
        <s.Section>
            <s.Searchbar
                type="text"
                placeholder="Search movie"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTitle("s="+e.target.value)}
                value={searchTitle.slice(2)}
            />
            <s.NomineesList>
                <s.NomineesLabel>Nominees:</s.NomineesLabel>
                {nominees.map((nominee, index) => (
                    <s.NomineesTitle onClick={() => removeNominee(nominee)}>{index+1}. {nominee}</s.NomineesTitle>
                ))}
            </s.NomineesList>
            {movies ? (
                <s.MovieContainer>
                    {movies.map(movie => (
                            <MovieCard
                                id={movie.imdbID}
                                source={movie.Poster}
                                title={movie.Title}
                                date={movie.Year}
                                getSize={getSize}
                            />
                    ))}
                </s.MovieContainer>
            ) : (
                <s.MovieContainer>
                    <s.Empty>
                        <s.EmptyImg src={image}/>
                        <s.EmptyLabel>No movies found :(</s.EmptyLabel>
                        <s.EmptyDescription>Try changing the title</s.EmptyDescription>
                    </s.Empty>
                </s.MovieContainer>
            )}
        </s.Section>
    );
}

export default Movies;