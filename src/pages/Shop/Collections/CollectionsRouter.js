import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Collections from './Collections';
import Products from '../Products/Products'


const CollectionsRouter = ({ collectionsData, onAddToCart, match }) => {

    return (
    <Switch>
        <Route path={`${match.path}/:collectionId`}>
          <Products collectionsData={collectionsData} onAddToCart={onAddToCart} />
        </Route>
        <Route path={`${match.path}`}>
        <Collections
            collectionsData={collectionsData}
          />
        </Route>
    </Switch>
    )
}

export default withRouter(CollectionsRouter);
