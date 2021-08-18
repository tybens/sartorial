import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import { Link as ReactLink } from "react-router-dom";
// import henryVid from "assets/vids/henryvid.mp4";

const paragraphStyles = { padding: "2.5% 0" };
const thumbnailImageManip = "w_1000,h_1000,q_auto:best,c_fill";
const articleImageManip = "w_1500,h_1100,q_auto:best,c_fill,g_auto";
const lookbookImageManip = "q_auto:best,c_fill,g_auto";

const homelessness = {
  type: "article",
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
  thumbnail: `https://res.cloudinary.com/do8jxdvtx/image/upload/${thumbnailImageManip}/v1629298251/hsllc/indy_ydmxzl.jpg`,
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
        <ReactLink
          target="_blank"
          style={{ fontWeight: 700 }}
          to="/blog/how-hsllc-works"
        >
          Let us show you how that works.
        </ReactLink>
        &nbsp; With the combined effort of these charities, and of people like
        you, we will make the “317” a better place for all.
      </Typography>
    </>
  ),
  vid1Src: "",
  vid1Desc: "",
  img1Src: `https://res.cloudinary.com/do8jxdvtx/image/upload/${articleImageManip}/v1629298251/hsllc/indy_ydmxzl.jpg`,
  img1Desc: "",
  img2Src: `https://res.cloudinary.com/do8jxdvtx/image/upload/${articleImageManip}/v1629298294/hsllc/wheeler_qt139y.webp`,
  img2Desc: "",
  suffix: (
    <Typography align="left" variant="body2">
      Thank you for reading. To learn more about the homeless population in
      Indianapolis, read the&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.chipindy.org/uploads/1/3/3/1/133118768/2021_pit_report.pdf"
      >
        2021 Marion County Point-in-Time Count&nbsp;
      </Link>
      report by IU’s Public Policy Institute. Annual Reports from&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.horizonhouse.cc/annualreport/"
      >
        Horizon House
      </Link>
      ,&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://wheelermission.org/wp-content/uploads/2021/02/WM-Annual-Report-2020-Final.pdf"
      >
        Wheeler Mission
      </Link>
      , and&nbsp;
      <Link
        target="_blank"
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
  type: "article",
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
  thumbnail: `https://res.cloudinary.com/do8jxdvtx/image/upload/${thumbnailImageManip}/v1629298603/hsllc/IMG_1064_xbmgon.png`,
  text1: (
    <>
      <Typography align="left" variant="body1" style={paragraphStyles}>
        Habitat Sartorial exists to help the homeless population in
        Indianapolis.&nbsp;
        <ReactLink
          to="/blog/homelessness"
          style={{ fontWeight: 700 }}
          target="_blank"
        >
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
      <Typography align="left" variant="body1" style={paragraphStyles}>
        More importantly, we know that what you wear tells the world who and
        what you care about. When you buy from us, we pay all the expenses
        required to get your apparel to your door, and donate all the remaining
        money to our selected charity (Horizon House for 2021).
      </Typography>
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
        </span>
        &nbsp; We won’t send you a letter asking for more donations - we’ll drop
        a new collection for you to update your style. We won’t send a free gift
        that you didn’t ask for - we’ll send you a piece of apparel that you’ll
        be proud to wear for years to come.
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
  img1Src: `https://res.cloudinary.com/do8jxdvtx/image/upload/${articleImageManip}/v1629298603/hsllc/IMG_1064_xbmgon.png`,
  img1Desc: "",
  img2Src: `https://res.cloudinary.com/do8jxdvtx/image/upload/${articleImageManip}/v1629298588/hsllc/marketing_n6eflc.png`,
  img2Desc: "",
  suffix: "",
};

const musicLookbook = {
  type: "lookbook",
  types: [
    {
      name: "Lookbook",
      bgColor: "#66cccc",
    },
    {
      name: "Habitat Sartorial",
      bgColor: "#334AC0",
    },
  ],
  date: "18 Aug 2021",
  author: "Habitat Sartorial",
  title: "Lookbook: Fall/Winter 2021 Classics",
  text: "...",
  id: "fw21-classics-lookbook",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1629236884/Summer%202021%20Photos/DSC08620_is6dwa.jpg`,
  images: [
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236904/Summer%202021%20Photos/DSC08828_tn7imm.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236902/Summer%202021%20Photos/DSC08691_tngumi.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236901/Summer%202021%20Photos/DSC08800_pvudup.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236900/Summer%202021%20Photos/DSC08892_shqmir.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236897/Summer%202021%20Photos/DSC08757_amlp7n.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236897/Summer%202021%20Photos/DSC08807_ngqdil.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236896/Summer%202021%20Photos/DSC08791_idhsko.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236892/Summer%202021%20Photos/DSC08570_zkglne.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236889/Summer%202021%20Photos/DSC08521_azuupr.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236888/Summer%202021%20Photos/DSC08719_elfxar.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236888/Summer%202021%20Photos/DSC08732_xzmy5f.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1629236887/Summer%202021%20Photos/DSC08628_enfr5u.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1629236904/Summer%202021%20Photos/DSC08912_ntgker.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1629236884/Summer%202021%20Photos/DSC08620_is6dwa.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1629236884/Summer%202021%20Photos/DSC08576_vyvcf0.jpg`,
  ],
  img1Src:
    "https://res.cloudinary.com/habitatsartorial/image/upload/w_1000,h_1000,c_fill/v1629236884/Summer%202021%20Photos/DSC08620_is6dwa.jpg",
  suffix: "",
};

// ar_5:6,c_fill,g_auto this works to make correct aspect ratio

const musicVideo = {
  type: "video",
  types: [
    {
      name: "Promotional",
      bgColor: "#93c572",
    },
    {
      name: "Habitat Sartorial",
      bgColor: "#334AC0",
    },
  ],
  date: "18 Aug 2021",
  author: "Habitat Sartorial",
  title: "Promo: Summer 2021 Collection",
  text: "...",
  id: "summer21-promo-video",
  video: "https://vimeo.com/588980823",
  thumbnail: `https://res.cloudinary.com/do8jxdvtx/image/upload/${thumbnailImageManip}/v1629234885/hsllc/thumb_notext-min_iuz3bb.png`,
  suffix: "",
};

// took out musicVideo for now

const postsData = [musicVideo, musicLookbook, howhsllcworks, homelessness];

export default postsData;
