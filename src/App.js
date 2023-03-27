import reactLogo from './icons/react-logo.svg';
import nodeLogo from './icons/nodejs-logo.svg';
import githubLogo from './icons/github-tile.svg';
import developer from './images/developer.jpg';
import './App.css';

function App() {
	return (
		<div className="App-container">
			<header className="App-header">
				<nav>
					<div className="logos">
						<img src={reactLogo} className="react-logo" alt="react logo" />
						<img src={nodeLogo} className="node-logo" alt="node.js logo" />
						<span className="App-link">Jasmin Adilovic</span>
					</div>
					<div>
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
						</ul>
					</div>
				</nav>
				<div className="description">
					<img className="developer-img" src={developer} alt="" />
				</div>
			</header>
		</div>
	);
}

export default App;
