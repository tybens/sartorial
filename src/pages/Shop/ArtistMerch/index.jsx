import React from 'react'
import HenryD from './henryd'
import { withRouter } from 'react-router-dom'
import BiFiRouter from './bifi22'

const ArtistMerch = ({ match, onAddToCart }) => {
    const { artistId } = match.params
    
    const artistPageMapper = {
        "henryd": <HenryD onAddToCart={onAddToCart} />,
        "bifi22": <BiFiRouter onAddToCart={onAddToCart} />
    };

    return artistPageMapper[artistId];

}

export default withRouter(ArtistMerch);