import React from 'react'
import HenryD from './henryd'
import { withRouter } from 'react-router-dom'

const ArtistMerch = ({ match, onAddToCart }) => {
    const { artistId } = match.params
    
    const artistPageMapper = {
        "henryd": <HenryD onAddToCart={onAddToCart} />
    };

    return artistPageMapper[artistId];

}

export default withRouter(ArtistMerch);