import { Box, Divider, FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { SearchRounded, CatchingPokemonRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { PokemonService } from '../services/PokemonService';
import Cards from './Card';

/* eslint-disable no-unused-vars */
export default function Pokedex() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [name, setName] = useState('');
    const { debounce } = useDebounce(400);
    const [_, setLoading] = useState(false);
    const [val, setVal] = useState('');
    
    
    const handleChange = (event) => {
        setVal(event.target.value);
    };
    
    debounce(() => {
        setLoading(true)
        PokemonService.getPokemon(name).then((result) => {
            setSearch(result.data);
        })
        setLoading(false)
    });
    
    useEffect(() => {
        PokemonService.getAll(val).then((result) => {
            setData(result.data.results);
        })
    }, [val])

    return (
        <Box sx={{width: '100%'}} display='flex' alignItems='center'  flexDirection='column' mt={5}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', mt: 10, display: 'flex', alignItems: 'center', width: 400 }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Pesquise seus pokémons favoritos"
                    onChange={e => setName(e.target.value)} />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchRounded />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <CatchingPokemonRounded color='error' />
                </IconButton>
            </Paper>

            <Box display='flex' alignItems='center' justifyContent='center' width='100%' flexWrap='wrap' textAlign='center'>
                {name ?
                    <Cards
                        id={search.id}
                        name={search.name}
                    /> : ''}

                {data.map((d, index) => (
                    <Cards
                        key={index}
                        id={index + 1}
                        name={d.name}
                    />
                ))}
            </Box>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Ver mais</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={val}
                    label="Adicionar"
                    onChange={handleChange}>
                    <MenuItem value="">
                        <em>0</em>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}