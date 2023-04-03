import developer from './images/developer.jpg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App-container">
			<main className="App-main">
				<Navbar />
				<div className="description">
					<div className="welcome">
						<h2>Nice to meet you!</h2>
						<h4>Welcome to my portfolio site!</h4>
						<h6>
							Based in Bosnia, I'm <span className="react">React JS</span> and
							<span className="node"> Node JS </span>
							developer passionate about building progressive web apps that
							users enjoy. Let's have a talk to find solutions that are best for
							your business!
						</h6>
						<a href="mailto: j.adilovic@gmail.com" className="contact">
							Contact me
						</a>
					</div>
					<div className="image-container">
						<img className="developer-img" src={developer} alt="" />
					</div>
				</div>
				<section className="cards">
					<div className="card">
						<p className="skill">JavaScript</p>
						<p className="experience">3 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">React</p>
						<p className="experience">2 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">Node</p>
						<p className="experience">2 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">Express</p>
						<p className="experience">2 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">MongoDB</p>
						<p className="experience">2 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">HTML</p>
						<p className="experience">4 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">CSS</p>
						<p className="experience">4 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">Java</p>
						<p className="experience">3 Years Experience</p>
					</div>
					<div className="card">
						<p className="skill">MySQL</p>
						<p className="experience">3 Years Experience</p>
					</div>
				</section>
				<section className="projects-heading">
					<h1 className="title">Projects</h1>
					<a href="mailto: j.adilovic@gmail.com" className="contact">
						Contact me
					</a>
				</section>
				<i className="notification">
					Some fullstack demo projects might take up to 1 minute to load from
					Render
				</i>
				<section className="cards">
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652192660/txgfudhcfcz3khgf9i8u.jpg"
							alt="Seedlings shop"
							className="project-img"
						></img>
						<div className="project-title">Seedlings Web Shop</div>
						<div className="project-description">
							MERN Stack Web Shop Application
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/sadnice"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://sadnice.onrender.com/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652202100/doahsbnielvh7kj3qref.jpg"
							alt="Task manager"
							className="project-img"
						></img>
						<div className="project-title">Task Manager</div>
						<div className="project-description">
							Dashboard MERN Stack Application
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/task-manager-heroku"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://task-manager-b5xr.onrender.com"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652202621/docnsbmo0tmsjibhpyym.jpg"
							alt="Memory game"
							className="project-img"
						></img>
						<div className="project-title">Memory Game</div>
						<div className="project-description">
							React.js Web Application Deployed on Netlify
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/memory-game"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://aki-memory-game.netlify.app/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652204771/tv0d7nim9qfsqimxfol6.jpg"
							alt="Message board"
							className="project-img"
						></img>
						<div className="project-title">Message Board</div>
						<div className="project-description">
							Questions, Answers, Likes, Dislikes and Rankings
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/questionsAnswers"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://questions-answers.onrender.com/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652206150/umfhuyqh0gxgiklmoqzm.jpg"
							alt="User Management"
							className="project-img"
						></img>
						<div className="project-title">User Management</div>
						<div className="project-description">
							MERN Stack CRUD Application
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/user-management"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://user-management-wblz.onrender.com/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1680518781/VacationBooking2022-05-10_nf8mt2.jpg"
							alt="Vacation Booking"
							className="project-img"
						></img>
						<div className="project-title">Vacation Booking</div>
						<div className="project-description">React Quiz Application</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/vacationBooking"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://vacation-booking-ja.netlify.app/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652211238/s2ve6ms5raqc7vxexenp.jpg"
							alt="Work Orders"
							className="project-img"
						></img>
						<div className="project-title">Work Orders</div>
						<div className="project-description">
							Furniture Manufacturing and Warehouse Management App
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/furniture"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://furnapp.herokuapp.com/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652216473/u4na3oqwff58qexotesf.jpg"
							alt="Car Parts"
							className="project-img"
						></img>
						<div className="project-title">Car Parts</div>
						<div className="project-description">
							Java and MySQL Warehouse Management App
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/carparts"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://yapauto.herokuapp.com/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1652216862/mficnlgwfwkj6fu1bxtq.jpg"
							alt="25 + 5 Clock"
							className="project-img"
						></img>
						<div className="project-title">25 + 5 Clock</div>
						<div className="project-description">
							React.js Free Code Camp project assignment
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/25-5-Clock"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://25-5-clock-aki.netlify.app/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1680519122/notion-like-editor_wmmviw.jpg"
							alt="notion like editor"
							className="project-img"
						></img>
						<div className="project-title">Notion Like Editor</div>
						<div className="project-description">
							HTML, CSS, JavaScript and React Editor App
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/notion-like-editor"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://notio-like-editor.netlify.app/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
					<div className="card">
						<img
							src="https://res.cloudinary.com/adilovic/image/upload/v1680519102/forsta-todo-app_t1buz2.jpg"
							alt="to do application"
							className="project-img"
						></img>
						<div className="project-title">ToDo App</div>
						<div className="project-description">
							HTML, CSS, JavaScript and React ToDo App
						</div>
						<div className="project-navigation">
							<a
								href="https://github.com/jadilovic/todosList"
								className="project-code-btn"
							>
								code
							</a>
							<a
								href="https://forsta-todo.netlify.app/"
								className="project-demo-btn"
							>
								demo
							</a>
						</div>
					</div>
				</section>
				<section>
					<h1 className="contact-title">Contact</h1>
					<p>
						I would love to hear about your project and how I could help. Please
						send me an email and I will get back to you as soon as possible.
					</p>
					<a href="mailto: j.adilovic@gmail.com" className="contact">
						Contact me
					</a>
				</section>
				<footer>
					<Navbar />
				</footer>
			</main>
		</div>
	);
}

export default App;
