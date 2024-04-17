import './index.css';
import { redTeamImages } from './images';
import { blueTeamImages } from './images';
import team1 from '../db/team1.json';

function App() {
  const teamBlue = team1.response[0].startXI;
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <div className="logo-block">
            <p>Premier League</p>
            <div className="logo">
              <img src="../public/images/logo.png" alt="Logo" />
            </div>
          </div>
        </header>
        <div className="teams-block">
          <div className="left-team team">
            <div className="team-logo left-team-logo">
              <img src="../public/images/left-team.png" alt="Left team" />
            </div>
            <p>MANCHESTER CITY</p>
          </div>
          <p>VS</p>
          <div className="right-team team">
            <div className="team-logo right-team-logo">
              <img src="../public/images/right-team.png" alt="Right team" />
            </div>
            <p>LIVERPOOL</p>
          </div>
        </div>
        <div className="teams-navigation-block">
          <ul className="teams-list">
            <li>TEAM 1</li>
            <li>TEAM 2</li>
            <li>TEAM 3</li>
          </ul>
        </div>
        <div className="playground-block">
          <div className="playground-wrapper">
            <img src="../public/images/playgroud.png" alt="Playgroud" />
          </div>
          {/* <div>
            {teamBlue.map((player, idx) => (
              <div className="player" key={teamBlue[idx].player.id}>
                {teamBlue[idx].player.id}
                {blueTeamImages[idx]}
              </div>
            ))}
          </div> */}
        </div>
        <div className="coaches-block">
          <div className="coaches-wrapper">
            <div className="left-coach coach">
              <p>Jurgen Klopp</p>
              <div className="coach-photo">
                <img src="../public/images/left-coach.png" alt="Left coach" />
              </div>
            </div>
            <p>Coach</p>
            <div className="right-coach coach">
              <div className="coach-photo">
                <img src="../public/images/right-coach.png" alt="Right coach" />
              </div>
              <p>Jurgen Klopp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
