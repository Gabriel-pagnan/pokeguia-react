/* eslint-disable jsx-a11y/anchor-is-valid */
import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
    return (
        <Box p={2} mt={5} display='flex' alignItems='center'>
            <Typography variant="subtitle2">
                © Copyright 2023 Gabriel Vinicius Pagnan
            </Typography>

            <IconButton size="large">
                <a href="http://github.com/Gabriel-pagnan" target="_blank" rel="noopener noreferrer"><GitHub color="error" /></a>
            </IconButton>

            <IconButton size="large">
                <a href="http://github.com/Gabriel-pagnan" target="_blank" rel="noopener noreferrer"><LinkedIn color="error" /></a>
            </IconButton>

            <Box sx={{position: 'absolute', right: 0, bottom: '-10', m: 3}}>
                <a href="#">
                    <img src="img/arrow_up.svg" alt="" width={40} height={40}/>
                </a>
            </Box>
        </Box>
    );
}