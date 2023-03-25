import { CatchingPokemonRounded } from '@mui/icons-material';
import { Card, CardContent, CircularProgress, Fab, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react';
import Modal from './Modal';

export default function Cards({ ...props }) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <Card sx={{ m: 2, mt: 5 }} elevation={8}>
                {props.id ?
                    <>
                        <Box width={240} display='flex' justifyContent='center' p={2}>
                            <div style={{ borderRadius: '100%', width: 200, height: 190, backgroundColor: '#efefef' }}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt="" height={190} width={190} />
                            </div>
                        </Box>
                        <CardContent sx={{ mt: 1, bgcolor: '#e80d0d', height: 35 }}>
                            <Fab onClick={handleClickOpen} sx={{ translate: '0 -40px', bgcolor: 'white', boxShadow: 'none' }}>
                                <CatchingPokemonRounded color='error' fontSize='large' />
                            </Fab>
                            <Typography variant='h6' color='white' sx={{translate: '0 -40px'}}>{props.name}</Typography>
                        </CardContent>
                        <Modal name={props.id} open={open} close={handleClose} />
                    </> :
                    <CircularProgress color='error' variant='indeterminate' />
                }
            </Card>
        </>
    );
}
