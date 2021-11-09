import React from "react";
import styled from "styled-components";
import img from "../assets/Images/unsplash_background.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

import { device } from "../config/breakpoints";

const MainContainer = styled(motion.div)`
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const Container = styled.div`
	background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
	width: 100%;
	height: auto;
	position: relative;
	padding-bottom: 5rem;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
	grid-gap: calc(1rem + 2vw);

	@media only screen and (${device.md}) {
		grid-template-columns: repeat(1, minmax(calc(9rem + 15vw), 1fr));
	}
`;

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const BlogPage = () => {
	return (
		<MainContainer
			variant={container}
			initial="hidden"
			animate="show"
			exit={{
				opacity: 0,
				transition: { duration: 0.5 },
			}}
		>
			<Container>
				<LogoComponent />
				<PowerButton />
				<SocialIcons />
				<AnchorComponent width="50" height="50" />
				<Center>
					<Grid>
						{Blogs.map((blog) => (
							<BlogComponent key={blog.id} blog={blog} />
						))}
					</Grid>
				</Center>
				<BigTitle text="BLOG" top="5rem" left="5rem" />
			</Container>
		</MainContainer>
	);
};

export default BlogPage;
