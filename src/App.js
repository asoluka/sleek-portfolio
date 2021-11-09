import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import AppContext from "./state/AppContext";
import { useEffect, useState } from "react";

function App() {
	const location = useLocation();
	const [pageWidth, setPageWidth] = useState(0);

	useEffect(() => {
		setPageWidth(window.innerWidth);
	}, []);

	return (
		<>
			<GlobalStyle />

			<AppContext.Provider value={pageWidth}>
				<ThemeProvider theme={lightTheme}>
					<SoundBar />
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" component={Main} />
							<Route exact path="/about" component={AboutPage} />
							<Route exact path="/blog" component={BlogPage} />
							<Route exact path="/work" component={WorkPage} />
							<Route exact path="/skills" component={MySkillsPage} />
						</Switch>
					</AnimatePresence>
				</ThemeProvider>
			</AppContext.Provider>
		</>
	);
}

export default App;
