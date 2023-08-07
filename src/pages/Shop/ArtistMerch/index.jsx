import HenryD from "./henryd";
import BiFiRouter from "./bifi22";
import artistCollectionData from "data/artist-collection-data";
import Products from "../Products/Products";
import ProductPage from "../Products/ProductPage";
import { Route, useLocation, useParams } from "react-router-dom";

const ArtistMerchRouter = ({ onAddToCart }) => {
  const { artistId } = useParams();
  const location = useLocation();

  const artistPageMapper = {
    henryd: <HenryD onAddToCart={onAddToCart} />,
    bifi22: <BiFiRouter onAddToCart={onAddToCart} />,
  };

  return (
    <>
      <Route path={`/shop/artist/:collectionId/products/:productId`}>
        <ProductPage
          onAddToCart={onAddToCart}
          collectionsData={artistCollectionData}
        />
      </Route>
      <Route exact path={`/shop/artist/:collectionId/products`}>
        <Products
          collectionsData={artistCollectionData}
        />
      </Route>
      <Route exact path={`${location.pathname}`}>
        {artistPageMapper[artistId]};
      </Route>
    </>
  );
};

export default ArtistMerchRouter;
