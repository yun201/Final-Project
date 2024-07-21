import { useState } from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import game1 from './game1.png';
import game2 from './game2.png';
import game3 from './game3.png';
import game4 from './game4.png';
import game5 from './game5.png';

const Games = () => {
    const [game, setGame] = useState('');
    const [platform, setPlatform] = useState('All');
    const [genre, setGenre] = useState('All');
    const [score, setScore] = useState('High-to-Low');

    const data = [
        { title: 'The Legend of Zelda: Breath of the Wild', id: 1, platform: 'Nintendo', genre: 'Adventure', score: 98 },
        { title: 'Super Mario World', id: 2, platform: 'Nintendo', genre: 'Platformer', score: 95 },
        { title: 'Portal 2', id: 3, platform: 'PC', genre: 'Puzzle', score: 90 },
        { title: 'Mass Effect 2', id: 4, platform: 'PC', genre: 'RPG', score: 89 },
        { title: 'Red Dead Redemption 2', id: 5, platform: 'PlayStation', genre: 'Adventure', score: 88 }
    ];

    const filter = (game, platform, genre, score, data) => {
        let filteredData = data;
        if (game) {
            filteredData = filteredData.filter(item => item.title.toLowerCase().includes(game.toLowerCase()));
        }
        if (platform !== 'All') {
            filteredData = filteredData.filter(item => item.platform === platform);
        }
        if (genre !== 'All') {
            filteredData = filteredData.filter(item => item.genre === genre);
        }
        if (score === 'High-to-Low') {
            filteredData = filteredData.sort((a, b) => b.score - a.score);
        } else {
            filteredData = filteredData.sort((a, b) => a.score - b.score);
        }
        return filteredData;
    }

    const filteredGames = filter(game, platform, genre, score, data);

    return (
        <div className="gamesContainer">
            <div className="filterBar">
                <h2>Filter Search</h2>
                <div>
                    <label htmlFor="platformFilter">Platform</label>
                    <select id="platformFilter" onChange={e => setPlatform(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Nintendo">Nintendo</option>
                        <option value="PC">PC</option>
                        <option value="PlayStation">PlayStation</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="genreFilter">Genre</label>
                    <select id="genreFilter" onChange={e => setGenre(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="RPG">RPG</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="scoreFilter">Score</label>
                    <select id="scoreFilter" onChange={e => setScore(e.target.value)}>
                        <option value="High-to-Low">High-to-Low</option>
                        <option value="Low-to-High">Low-to-High</option>
                    </select>
                </div>
            </div>
            <div className="mainContent">
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search Games..."
                        onChange={e => setGame(e.target.value)}
                    />
                </div>
                <div className="gamesList">
                    {filteredGames.map(game => (
                        <div key={game.id} className="gameItem">
                            <img src={game.id === 1 ? game1 : game.id === 2 ? game2 : game.id === 3 ? game3 : game.id === 4 ? game4 : game5} alt="game" />
                            <div className="gameDetails">
                                <span className="gamePlatform">Platform: {game.platform}</span>
                                <span className="gameGenre">Genre: {game.genre}</span>
                                <span className="gameScore">Score: {game.score}</span>
                                <Link to={`/gameinfo/${game.id}`}>{game.title}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Games;










