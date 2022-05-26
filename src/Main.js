import React from 'react';

const path = process.env.PUBLIC_URL;
function Main(props) {
	return (
		<section>
			<div className='container'>
				<div className='inner'>
					<article className='main'>
						<div className='pic'>
							<img src={`${path}/img/profile.jpg`} />
						</div>
						<div className='txt'>
							<h2>
								LEE <em>HAE MUN</em>
							</h2>
							<h3>WEB PUBLISHER / FRONTEND DEVELOPER</h3>
						</div>
					</article>
					<article className='contact'>
						<h2>Contact</h2>
						<div className='title'>
							<ul>
								<li>Phone :</li>
								<li>E-Mail :</li>
							</ul>
							<ul>
								<li>010-3286-0058</li>
								<li>lhmun1129@naver.com</li>
							</ul>
						</div>
					</article>
					<article className='sns'>
						<h2>Social</h2>
						<ul>
							<li>
								<a href='https://github.com/bikyung'>GITHUB</a>
							</li>
							<li>
								<a href='https://bikyung.tistory.com/'>BLOG</a>
							</li>
						</ul>
					</article>
					<article className='skill'>
						<h2>Skills</h2>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>SCSS</li>
							<li>JAVASCRIPT</li>
							<li>REACT</li>
						</ul>
					</article>
					<div className='works'>
						<h2>Project</h2>
						<ul>
							<li>
								<a href='https://bikyung.github.io/Portfolio/'>
									<img src={`${path}/img/html_kawasaki.png`} />
								</a>
								<h3>HTML PORTFOLIO</h3>
							</li>
							<li>
								<a href=''>
									<img src={`${path}/img/react_pf.png`} />
								</a>
								<h3>REACT PORTFOLIO</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;
