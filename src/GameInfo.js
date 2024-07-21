import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import RatingSection from './RatingSection';
import CommentSection from './CommentSection';
import game1 from './game1.png';
import game2 from './game2.png';
import game3 from './game3.png';
import game4 from './game4.png';
import game5 from './game5.png';

const gamesData = [
    { 
        id: 1, 
        title: 'The Legend of Zelda: Breath of the Wild', 
        img: game1, 
        platform: 'Nintendo', 
        genre: 'Adventure', 
        score: 98, 
        defaultRating: 4.96,
        defaultPeople: 10,
        description: `
            <p>"The Legend of Zelda: Breath of the Wild" is an action-adventure video game developed and published by Nintendo.
            It was released in March 2017 and is part of the iconic "The Legend of Zelda" series. The game is available on Nintendo Switch and Wii U platforms.</p>
            <p>In "Breath of the Wild," players take on the role of Link, the protagonist, who awakens from a long slumber to find the kingdom of Hyrule in a state of ruin. 
            The land is engulfed in darkness, and the ancient evil known as Calamity Ganon threatens to destroy the world. Link embarks on a quest to stop Ganon's resurrection 
            and save Princess Zelda and the kingdom of Hyrule.</p>
        ` 
    },
    { 
        id: 2, 
        title: 'Super Mario World', 
        img: game2, 
        platform: 'Nintendo', 
        genre: 'Platformer', 
        score: 95, 
        defaultRating: 4.75,
        defaultPeople: 8,
        description: `
            <p>"Super Mario World" is a platform game developed and published by Nintendo. The game was released in 1990 for the Super Nintendo Entertainment System (SNES).</p>
            <p>In the game, players control Mario as he sets out on a quest to rescue Princess Peach and Dinosaur Land from the series' antagonist, Bowser. 
            Super Mario World introduces Yoshi, Mario's dinosaur companion, who can eat enemies and gain abilities by eating Koopa Troopa shells.</p>
        ` 
    },
    { 
        id: 3, 
        title: 'Portal 2', 
        img: game3, 
        platform: 'PC', 
        genre: 'Puzzle', 
        score: 90, 
        defaultRating: 4.85,
        defaultPeople: 12,
        description: `
            <p>"Portal 2" is a puzzle-platform game developed and published by Valve Corporation. It was released in April 2011 for Windows, Mac OS X, Linux, PlayStation 3, and Xbox 360.</p>
            <p>Players control Chell in the single-player campaign as she navigates the Aperture Science facility using the portal gun to solve puzzles and overcome obstacles. 
            The game also features a cooperative multiplayer mode, where players control two robots, Atlas and P-Body, to solve puzzles together.</p>
        ` 
    },
    { 
        id: 4, 
        title: 'Mass Effect 2', 
        img: game4, 
        platform: 'PC', 
        genre: 'RPG', 
        score: 89, 
        defaultRating: 4.9,
        defaultPeople: 15,
        description: `
            <p>"Mass Effect 2" is an action role-playing game developed by BioWare and published by Electronic Arts. It was released in January 2010 for Windows and Xbox 360, and later for PlayStation 3.</p>
            <p>The game continues the story of Commander Shepard as they build a team to stop a race of insect-like aliens known as the Collectors from abducting entire human colonies. 
            Players make choices that affect the story and the fate of characters throughout the game, with an emphasis on narrative and character development.</p>
        ` 
    },
    { 
        id: 5, 
        title: 'Red Dead Redemption 2', 
        img: game5, 
        platform: 'PlayStation', 
        genre: 'Adventure', 
        score: 88, 
        defaultRating: 4.95,
        defaultPeople: 20,
        description: `
            <p>"Red Dead Redemption 2" is an action-adventure game developed and published by Rockstar Games. It was released in October 2018 for PlayStation 4 and Xbox One, 
            and later for Windows and Stadia.</p>
            <p>The game is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States, and follows outlaw Arthur Morgan, 
            a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West while attempting to survive against government forces, rival gangs, 
            and other adversaries.</p>
        ` 
    },
];

const GameInfo = () => {
    const { id } = useParams();
    const game = gamesData.find(game => game.id === parseInt(id));

    if (!game) {
        return <div>Game not found</div>;
    }

    return (
        <div className="gameinfo">
            <div className="main">
                <br></br>
                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', fontSize: '2.5em' }}>{game.title}</h1>
                <div className='titleImage'>
                    <img src={game.img} alt="img" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
                <Link to="/checkout" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
                    <button style={{ fontSize: '1.5em' }}>Buy Now</button>
                </Link>

                <RatingSection defaultRating={game.defaultRating} defaultPeople={game.defaultPeople} />
                <CommentSection />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default GameInfo;

