const size = {
	// xs: "0px",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400",
};

const device = {
	// xs: `(min-width: ${size.xs})`,
	sm: `max-width: ${size.sm}`,
	md: `max-width: ${size.md}`,
	lg: `max-width: ${size.lg}`,
	xl: `max-width: ${size.xl}`,
	xxl: `max-width: ${size.xxl}`,
};

export { size, device };
