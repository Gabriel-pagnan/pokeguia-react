/* eslint-disable no-undef */
import { Dialog, DialogContent, DialogTitle, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef,  useEffect, useState } from "react";
import { PokemonService } from "../services/PokemonService";
import '../typeColor.css'
import Carousel from 'react-material-ui-carousel'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ ...props }) {
    const [data, setData] = useState([]);
    const types = data.types?.map(typeInfo => typeInfo.type.name);
    

    useEffect(() => {
        PokemonService.getPokemon(props.name).then((result) => {
            setData(result.data);
        })
    }, [props.name])

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.close}
                aria-describedby="alert-dialog-slide-description">

                <Box display='flex' justifyContent='space-between' alignItems='center' width={600}>
                    <Box width={300} textAlign='center' p={2} className={types}>

                        <Carousel
                            NextIcon={<ArrowForwardIosOutlined />}
                            PrevIcon={<ArrowBackIosOutlined />}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" height={210} width={210} />
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${data.id}.png`} alt="" height={210} width={210} />
                        </Carousel>

                        <DialogTitle component={Typography} color='white' variant='h4'>

                        </DialogTitle>

                        <Typography mt={1} textAlign='left' color='white'>
                            Nome: {data.name}<br />
                            Altura: {data.height} m<br />
                            Peso: {data.weight} Kg<br />
                            Tipo: {types}
                        </Typography>
                    </Box>

                    <DialogContent>
                        {data.stats?.map((stat, index) => (
                            <Box key={index} mt={1}>
                                <Typography  zIndex={1} mb={2} variant="overline" mt={2} >{stat.stat.name}: {stat.base_stat}</Typography>
                                <Box className={types} width={stat.base_stat} height={8}  sx={{borderRadius: '20px'}}/>
                            </Box>
                        ))}
                    </DialogContent>
                </Box>
            </Dialog>
        </div>
    );
}

