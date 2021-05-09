import { useEffect, useState } from "react";
import * as s from "./styles";

interface MovieCardProps {
    id: string;
    source: string;
    title: string;
    date: string;
    getSize(): void;
}

function MovieCard({ 
    id,
    source,
    title,
    date,
    getSize,
}: MovieCardProps) {
    const [isNominated, setIsNominated] = useState<Boolean>();

    function nominateMovie() {
        if (localStorage.length >= 5)
            return alert("You have already nominated 5 movies.")

        localStorage.setItem(id, title);
        setIsNominated(false);
        getSize();

        if (localStorage.length === 5)
            return alert("Thank you for your nominations!");
    }

    function removeMovie() {
        localStorage.removeItem(id);
        setIsNominated(true);
        getSize();
    }

    useEffect(() => {}, [isNominated])

    return (
        <s.Container>
            <s.Poster src={source}/>
            <s.PosterContainer>
                {localStorage.getItem(id) === null ? (
                    <s.Button onClick={nominateMovie}>Nominate</s.Button>
                ) : (
                    <s.Button onClick={removeMovie}>Remove</s.Button>
                )}
            </s.PosterContainer>
            <s.Title>{title}</s.Title>
            <s.Detail>{date}</s.Detail>
        </s.Container>
    );
}

export default MovieCard;