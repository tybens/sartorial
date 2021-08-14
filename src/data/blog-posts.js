import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import { Link as ReactLink } from "react-router-dom";
// import henryVid from "assets/vids/henryvid.mp4";
import howhsllcworksImg1 from "assets/blog/IMG_1064.png";
import howhsllcworksImg2 from "assets/blog/marketing.png";

const paragraphStyles = { padding: "2.5% 0" };

const homelessness = {
  types: [
    {
      name: "Homelessness",
      bgColor: "#fcb941",
    },
    {
      name: "Indianapolis",
      bgColor: "#FC6042",
    },
  ],
  date: "14 Aug 2021",
  author: "Payne Vogtman",
  title: "Homelessness in Indianapolis - and How we ALL can help",
  text: "In 2019, the temperature in Indianapolis fell to -11°F. That night...",
  id: "homelessness",
  text1: [
    "In 2019, the temperature in Indianapolis fell to -11°F. That night, 105 people slept outside, on the concrete, with no shelter from the spitting frost and chilling wind. ",
    "This year, that number has increased to 263 people - and those are only the fraction of Indy’s homeless who live without shelter.",
    "Over 1900 people, right now, spend their days and nights without a home, right in our backyard. These folks are veterans, grandparents, teachers, wives, and husbands who deal with health problems, food insecurity, addiction, and an unshakeable stigma while trying to find the stability and progress that comes with a home. ",
    "Over 250 of them are children, who find their youthful curiosity and boundless energy occupied with finding the bare necessities of life.",
  ],
  text2: (
    <>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        A number of charities provide assistance to the homeless population
        every day. Just last year:
      </Typography>
      <List>
        <ListItem>
          <ListItemText>
            - &nbsp;&nbsp;&nbsp; Horizon House provided over 4000 showers and
            meals, and helped 87 people secure employment.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            - &nbsp;&nbsp;&nbsp; Wheeler Mission provided nearly 700 beds every
            night, and moved 154 of its guests to stable housing.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            - &nbsp;&nbsp;&nbsp; Habitat for Humanity built and repaired 53
            homes for families in greater Indianapolis.
          </ListItemText>
        </ListItem>
      </List>
      <Typography
        gutterBottom
        align="left"
        variant="h5"
        style={{ fontWeight: 700 }}
      >
        So how do you help?
      </Typography>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        That’s where we come in. Habitat Sartorial makes it easy for you to
        support these charities - just by updating your wardrobe.&nbsp;
        <ReactLink style={{ fontWeight: 700 }} to="/">
          Let us show you how that works.
        </ReactLink>
        &nbsp; With the combined effort of these charities, and of people like
        you, we will make the “317” a better place for all.
      </Typography>
    </>
  ),
  vid1Src: "",
  vid1Desc: "",
  img1Src:
    "https://indianapublicradio.org/wp-content/uploads/2019/11/indianapolis-wikimedia_commons-1560x900.jpg",
  img1Desc: "",
  img2Src:
    "https://www.gannett-cdn.com/presto/2018/10/15/PIND/52db2f02-06d4-4ad5-bfae-2e4cf6a3bdd7-IMG_5850.JPG?crop=4031,2267,x0,y0&width=3200&height=1800&format=pjpg&auto=webp",
  img2Desc: "",
  suffix: (
    <Typography align="left" variant="body2">
      Thank you for reading. To learn more about the homeless population in
      Indianapolis, read the&nbsp;
      <Link
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.chipindy.org/uploads/1/3/3/1/133118768/2021_pit_report.pdf"
      >
        2021 Marion County Point-in-Time Count&nbsp;
      </Link>
      report by IU’s Public Policy Institute. Annual Reports from&nbsp;
      <Link
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.horizonhouse.cc/annualreport/"
      >
        Horizon House
      </Link>
      ,&nbsp;
      <Link
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://wheelermission.org/wp-content/uploads/2021/02/WM-Annual-Report-2020-Final.pdf"
      >
        Wheeler Mission
      </Link>
      , and&nbsp;
      <Link
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://indyhabitat.org/wp-content/uploads/2020/07/2019-Community-Report-Interactive.pdf"
      >
        Habitat for Humanity
      </Link>
      &nbsp;provide more information on their activities in the city.
    </Typography>
  ),
};

const howhsllcworks = {
  types: [
    {
      name: "Habitat Sartorial",
      bgColor: "#334AC0",
    },
    {
      name: "Indianapolis",
      bgColor: "#FC6042",
    },
  ],
  date: "14 Aug 2021",
  author: "Payne Vogtman",
  title: "How Your Next Shopping Spree could Build a Home in Indy",
  text: "Habitat Sartorial exists to help the homeless population in Indianapolis...",
  id: "how-hsllc-works",
  text1: (
    <>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        Habitat Sartorial exists to help the homeless population in
        Indianapolis.&nbsp;
        <ReactLink to="/blog/homelessness">
          You can read more about the folks we work with here.
        </ReactLink>
        &nbsp;So what exactly do we do, and where do you fit in?
      </Typography>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        First and foremost, we’re a fashion design studio, so we’ve spent the
        last 12 months testing fabrics, inks, stitching patterns, and printing
        techniques. The product that shows up at your door represents a year of
        study and practice, and careful dedication to the improvement of your
        wardrobe.
      </Typography>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        With every order, we guarantee:
      </Typography>
      <List>
        <ListItem>
          <ListItemText>
            - &nbsp;&nbsp;&nbsp;Cotton-primary fabric, to keep polyester fibers
            out of our oceans
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            - &nbsp;&nbsp;&nbsp; Water-based ink, free of harmful chemicals
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            - &nbsp;&nbsp;&nbsp; 100% Reusable and Recyclable shipping materials
          </ListItemText>
        </ListItem>
      </List>
    </>
  ),
  text2: (
    <>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        Every time you wear our apparel, you tell the world that you care. You
        care about that family who just lost their home - that soldier who’s
        trying to live a normal life again - and those parents who will do
        anything to create the best lives for their children. You tell the world
        that you’ve taken tangible action to help them - and you give everyone
        who sees you an easy way to do the same.
      </Typography>

      <Typography align="left" variant="body1" style={paragraphStyles}>
        <span style={{ fontWeight: 700 }}>
          That’s what we do: we make it simple and easy for people who care to
          take action towards solving a very complex problem.
        </span>{" "}
        We won’t send you a letter asking for more donations - we’ll drop a new
        collection for you to update your style. We won’t send a free gift that
        you didn’t ask for - we’ll send you a piece of apparel that you’ll be
        proud to wear for years to come.
      </Typography>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        The next time you need a comfy hoodie, or a new outfit for a party, or a
        thoughtful gift for a friend, tell the world that you care. Together, we
        &nbsp;<span style={{ fontWeight: 700 }}>will</span> make a difference
        for the people in our community.
      </Typography>
    </>
  ),
  vid1Src: "",
  vid1Desc: "",
  img1Src: howhsllcworksImg1,
  img1Desc: "",
  img2Src: howhsllcworksImg2,
  img2Desc: "",
  suffix: "",
};

const postsData = [howhsllcworks, homelessness];

export default postsData;
