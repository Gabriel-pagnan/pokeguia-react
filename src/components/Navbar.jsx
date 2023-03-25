import { AppBar, Slide, Toolbar, useScrollTrigger } from "@mui/material";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Navbar(props) {
    return (
        <HideOnScroll {...props}>
            <AppBar>
                <Toolbar>
                    <img src="img/logo.png" alt="" height={50} />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}