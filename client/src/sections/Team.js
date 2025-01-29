import React from 'react';
import team1 from '../assets/images/team/team1.png'; // Ensure this path is correct
import team2 from '../assets/images/team/team2.png'; // Ensure this path is correct
import team3 from '../assets/images/team/team3.png'; // Ensure this path is correct
import twitterIcon from '../assets/icons/twitter-icon.png'; // Ensure this path is correct
import linkedinIcon from '../assets/icons/linkedin-icon.png'; // Ensure this path is correct

const Team = () => {
    return (
        <section className="team" id="team">
            <div className="container">
                <h2>Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={team1} alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                        <div className="social-links">
                            <a href="/"><img src={twitterIcon} alt="Twitter" /></a>
                            <a href="/"><img src={linkedinIcon} alt="LinkedIn" /></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={team2} alt="Team Member 2" />
                        <h3>Jack Smith</h3>
                        <p>Blockchain Developer</p>
                        <div className="social-links">
                            <a href="/"><img src={twitterIcon} alt="Twitter" /></a>
                            <a href="/"><img src={linkedinIcon} alt="LinkedIn" /></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={team3} alt="Team Member 3" />
                        <h3>Rock Johnson</h3>
                        <p>Marketing Lead</p>
                        <div className="social-links">
                            <a href="/"><img src={twitterIcon} alt="Twitter" /></a>
                            <a href="/"><img src={linkedinIcon} alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;