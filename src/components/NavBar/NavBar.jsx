import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from '../CartWidget/CartWidget';
//import logo from 'https://jhonatancarreazo.github.io/Ethnos/img/ethnos_logo.png'
import './NavBar.css';

const NavBar = () => {
    return (
    <div className='navbar'> 
        <div>
            <img src="https://jhonatancarreazo.github.io/Ethnos/img/ethnos_logo.png" alt="" style={{width: '100px'}} />
        </div>
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowSortedDown />
}>
                New Arrivals
            </MenuButton>
            <MenuList>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Sale</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
        
    </div>
    )
}

export default NavBar
