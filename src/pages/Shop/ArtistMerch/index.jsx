import HenryD from "./henryd";
import BiFiRouter from "./bifi22";
import artistCollectionData from "data/artist-collection-data";
import Products from "../Products/Products";
import ProductPage from "../Products/ProductPage";
import { Route, withRouter } from "react-router-dom";

const ArtistMerchRouter = ({ match, onAddToCart }) => {
  const { artistId } = match.params;

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
      <Route exact path={`${match.path}`}>
        {artistPageMapper[artistId]};
      </Route>
    </>
  );
};

export default withRouter(ArtistMerchRouter);
