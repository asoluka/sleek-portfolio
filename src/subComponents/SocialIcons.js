import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";
import { device } from "../config/breakpoints";

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

	@media only screen and (${device.md}) {
		left: 1rem;
	}
`;

const Line = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === "dark" ? darkTheme.text : darkTheme.body};

	@media only screen and (${device.md}) {
		height: 5rem;
	}
`;

const SocialIcons = (props) => {
	return (
		<Icons>
			<motion.div
				initial={{ transform: "scale(0)" }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1 }}
			>
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
			</motion.div>
			<motion.div
				initial={{ transform: "scale(0)" }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.2 }}
			>
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
			</motion.div>
			<motion.div
				initial={{ transform: "scale(0)" }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.4 }}
			>
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
			</motion.div>
			<motion.div
				initial={{ transform: "scale(0)" }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.6 }}
			>
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
			</motion.div>

			<Line
				color={props.theme}
				initial={{
					height: 0,
				}}
				animate={{
					height: "5rem",
				}}
				transition={{ type: "spring", duration: 1, delay: 0.8 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			/>
		</Icons>
	);
};

export default SocialIcons;
