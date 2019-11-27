import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						twitter
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<article className="media center">
						<span className="icon">
							<a href={data.site.siteMetadata.twitter}>
								<FaTwitter size="1.5em" color="blue" />
							</a>
						</span>
						&nbsp;
						<span className="icon">
							<a href={data.site.siteMetadata.github}>
								<FaGithub size="1.5em" color="black" />
							</a>
						</span>
					</article>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
