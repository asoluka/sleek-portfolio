import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: fixed;
	bottom: 0;
	left: 2rem;

	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled.span`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
	return (
		<Icons>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://github.com/asoluka" }}
				>
					<Github
						width={25}
						height={25}
						fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://twitter.com/sleekcodes" }}
				>
					<Twitter
						width={25}
						height={25}
						fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://facebook.com" }}
				>
					<Facebook
						width={25}
						height={25}
						fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{
						pathname:
							"https://www.youtube.com/channel/UCJTN5fDHo5l3xKgS3OJ8t3A",
					}}
				>
					<YouTube
						width={25}
						height={25}
						fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</div>

			<Line color={props.theme} />
		</Icons>
	);
};

export default SocialIcons;
