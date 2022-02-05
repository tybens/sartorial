import { Grid, Typography } from "@material-ui/core";
import artistCollectionData from "data/artist-collection-data";
import Products from "../Products/Products";

const ArtistSample = () => {
  return (
    <Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h2">Your Artist Name Here</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Your artist description here.</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Products
          collectionsData={artistCollectionData}
          collectionId="artist-sample"
        />
      </Grid>
    </Grid>
  );
};

export default ArtistSample;
