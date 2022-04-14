import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import { Link as ReactLink } from "react-router-dom";

const paragraphStyles = { padding: "2.5% 0" };
const thumbnailImageManip = "w_1000,h_1000,q_auto:best,c_fill";
const articleImageManip = "w_1500,h_1100,q_auto:best,c_fill,g_auto";
// const lookbookImageManip = "q_auto:best,c_fill,g_auto";

const homelessness = {
  type: "article",
  types: [
    {
      name: "Pinned",
      bgColor: "#fcb941",
    },
    {
      name: "Mission Statement",
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
          to="/mission/how-hsllc-works"
        >
          Let us show you how that works.
        </ReactLink>
        &nbsp; With the combined effort of these charities, and of people like
        you, we will make the "317” a better place for all.
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
      name: "Mission Statement",
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
          to="/mission/homelessness"
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

// eslint-disable-next-line
const edemHorizon = {
  type: "article",
  types: [
    {
      name: "Philanthropy",
      bgColor: "#413c49",
    },
    {
      name: "Mission Statement",
      bgColor: "#FC6042",
    },
  ],
  date: "07 Sep 2021",
  author: "Edem Kabasa",
  title: "All about Horizon House",
  text: "How does buying a T-shirt help the homeless? Habitat Sartorial donates 100%...",
  id: "horizonhouse",
  thumbnail: `https://res.cloudinary.com/do8jxdvtx/image/upload/${thumbnailImageManip}/v1630198192/hsllc/indy-shrm-008_nhusjb.jpg`,
  text1: [
    "How does buying a T-shirt help the homeless? Habitat Sartorial donates 100% of all revenue to the Horizon House of Indianapolis.",
    "Horizon is a well-known nonprofit in downtown Indianapolis. It has a shelter, clothing distribution center, and many other services to help the local impoverished community.",
    "When you buy an item of Habitat apparel, a pre-determined amount goes back to Habitat to keep the lights on and paint flowing, and the rest is donated to Horizon House.",
  ],
  text2: [
    "As a 501(c)3 nonprofit, Horizon House has a breakdown of exactly how all their money is spent available to the public on their website. You can see exactly how much of your Rotary Logo tee went to feeding a child in need or giving hot water to the shelter!",
    "We selected Horizon House because of their openness and transparency. Horizon House allows individuals and groups to go and volunteer at their main location, which is a perfect opportunity to speak with members of the organization and share our humanitarian vision.",
    "Horizon House Indianapolis is a time-tested and reliable benefactor of the local metropolis, so they were naturally the best choice to receive our donations. ",
  ],
  vid1Src: "",
  vid1Desc: "",
  img1Src: `https://res.cloudinary.com/do8jxdvtx/image/upload/${articleImageManip}/v1630198192/hsllc/indy-shrm-008_nhusjb.jpg`,
  img1Desc: "",
  img2Src: `https://res.cloudinary.com/do8jxdvtx/image/upload/${articleImageManip}/v1630198192/hsllc/BO_p6chit.jpg`,
  img2Desc: "",
  suffix: "",
};

// ar_5:6,c_fill,g_auto this works to make correct aspect ratio

const logoHistory = {
  type: "carousel",
  types: [
    {
      name: "Mission Statement",
      bgColor: "#FC6042",
    },
    {
      name: "Design",
      bgColor: "#F5F5DC",
    },
  ],
  date: "05 Oct 2021",
  author: "Habitat Sartorial",
  title: "Logos: Our Promise to You",
  text: "...",
  id: "logo-history",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/
image/upload/v1632938794/misc/Untitled.001_ptxuzp.jpg`,
  carousel: [
    {
      image: `https://res.cloudinary.com/habitatsartorial/image/upload/v1632938794/misc/Untitled.001_ptxuzp.jpg`,
      text: {
        heading: "The ROTARY logo",
        caption:
          "Seals originated as promises. Our seal is just that - a promise to remain diligent, focused, and productive as we work and grow. The Rotary logo bears the skyline of our city, Indianapolis, with stars forming a roof over our home. These stars shine over the third, first, and seventh buildings, as a message to everyone in the 317: we have the talent, time, and treasure to help our fellow citizens, and build our community together.",
        closing:
          "One day, we’ll have stars from, within, and around your city, too. Apparel for charity - it’s the easiest way to make a difference in your home, wherever home may be.",
      },
    },
    {
      image: `https://res.cloudinary.com/habitatsartorial/image/upload/v1632938794/
misc/Untitled.002_itr1az.jpg`,
      text: {
        heading: "The 100 Logo",
        caption:
          "We give our all towards many things - careful design, comfortable and durable fabrics, and sustainable, recyclable packaging and shipping - and this logo certainly represents that effort. But most of all, the 100 is our guarantee to you: 100% of our profit, every day, now and forever, will go towards helping the homeless in our communities. And we’ll be 100% transparent with you, reporting who that money feeds, the beds it buys in shelters, and the gifts it buys for children.",
        closing:
          "YOU are what makes this idea work, so WE make that promise to you, today and every single day.",
      },
    },
    {
      image: `https://res.cloudinary.com/habitatsartorial/image/upload/v1632938794/
misc/Untitled.003_vqhucn.jpg`,
      text: {
        heading: "The HA317AT Logo",
        caption:
          'The word "habitat" means so many things - the climate, the relationships, and the activities that define a location. The challenges that some folks face are the most important part of a "habitat" - the place where we all feel most at home. HA317AT puts our focus front and center - ensuring those folks have a reason to love their city. And we’ve put 317 right in the middle, as our promise never to forget where we began, and never to stop helping individuals on a personal level.',
        closing:
          'At the end of the day, that’s what we do. For those who have gone through it all, we make "habitat" feel like "home".',
      },
    },
  ],
  suffix: (
    <Typography
      align="left"
      variant="body2"
      style={{ fontSize: "1rem" }}
    ></Typography>
  ),
};

const results2021 = {
  type: "video",
  types: [
    {
      name: "Results",
      bgColor: "#ff3fff",
    },
  ],
  date: "23 Feb 2022",
  author: "Habitat Sartorial",
  title: "2021 Results - Thank you!",
  text: "...",
  id: "2021-results",
  video: "https://youtu.be/ZaSu5F7mFag",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/v1645535939/misc/Screen_Shot_2022-02-22_at_08.12.14_r9b78b.png`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Thank you to every member of the Habitat Sartorial community. We already
      have working projects ready to bring you in 2022 - we consider 2021 a good
      start. Now we continue to build!
    </Typography>
  ),
};

const earthDay22 = {
  type: "link",
  types: [
    {
      name: "Pinned",
      bgColor: "#fcb941",
    },
    {
      name: "Earth Day",
      bgColor: "#006600",
    },
  ],
  link: "https://www.linkedin.com/pulse/ethics-commerce-habitatsartorial/?trackingId=COeIlmLApfkbO6agImO8tg%3D%3D",
  date: "14 Apr 2022",
  author: "Edem Kabasa",
  title: "For our City, for our Planet: Earth Day 2022 at Habitat Sartorial",
  text: "It is estimated that over eighty percent of clothing sold globally is produced in “sweatshops” with overworked...",
  id: "",
  thumbnail: "https://media-exp1.licdn.com/dms/image/C4D12AQGBZLD3j_7WWQ/article-cover_image-shrink_600_2000/0/1649938847720?e=2147483647&v=beta&t=9d8efBap6kW67jCItP8auBBCD4NheNlQsmXO4a9bTu0",
};

const postsData = [
  earthDay22,
  homelessness,
  results2021,
  howhsllcworks,
  edemHorizon,
  logoHistory,
];
export default postsData;
