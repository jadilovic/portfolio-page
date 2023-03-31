import reactLogo from '../icons/react-logo.svg';
import nodeLogo from '../icons/nodejs-logo.svg';
import githubLogo from '../icons/github-tile.svg';
import frontendMentor from '../icons/frontendmentor.svg';
import hackerRank from '../icons/hackerrank.svg';
import linkedin from '../icons/linkedin-tile.svg';

const Navbar = () => {
	return (
		<nav>
			<div className="logos">
				<img src={nodeLogo} className="node-logo" alt="node.js logo" />
				<img src={reactLogo} className="react-logo" alt="react logo" />
				<span className="App-link">Jasmin Adilovic</span>
			</div>
			<ul className="nav-links">
				<li>
					<a href="https://github.com/jadilovic">
						<img
							className="profile-link"
							src={githubLogo}
							alt="ja github profile"
						/>
					</a>
				</li>
				<li>
					<a href="https://www.frontendmentor.io/profile/jadilovic">
						<img
							className="profile-link"
							src={frontendMentor}
							alt="ja frontend-mentor profile"
						/>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/jasmin-adilovic-2561aa17/">
						<img
							className="profile-link"
							src={linkedin}
							alt="ja linkedin profile"
						/>
					</a>
				</li>
				<li>
					<a href="https://www.hackerrank.com/jadilovic">
						<img
							className="profile-link"
							src={hackerRank}
							alt="ja hacker-rank profile"
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
