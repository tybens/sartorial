import { Typography, Link } from "@material-ui/core";

const thumbnailImageManip = "w_1000,h_1000,q_auto,c_fill";
const lookbookImageManip = "q_auto,c_fill,g_auto";

const bifi22Photos = {
  type: "lookbook",
  types: [
    {
      name: "Live Show",
      bgColor: "#01DF01",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "20 Apr 2022",
  author: "Habitat Sartorial",
  title: "Photos: By Indy, For Indy 2022 at Hi-Fi Annex",
  text: "...",
  id: "bifi22-photos",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1660228646/2022/bifi22/Photos/8-4-22HabSatconcert-027_ewz3xh.jpg`,
  images: [
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228688/2022/bifi22/Photos/8-4-22HabSatconcert-003_vmb3f7.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228640/2022/bifi22/Photos/8-4-22HabSatconcert-008_f3qfhd.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228712/2022/bifi22/Photos/8-4-22HabSatconcert-117_nx2rln.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228702/2022/bifi22/Photos/8-4-22HabSatconcert-015_yy7pgs.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228661/2022/bifi22/Photos/8-4-22HabSatconcert-033_an0amb.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228712/2022/bifi22/Photos/8-4-22HabSatconcert-125_elfte5.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228719/2022/bifi22/Photos/8-4-22HabSatconcert-130_rjgrli.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228712/2022/bifi22/Photos/8-4-22HabSatconcert-120_utydj2.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228710/2022/bifi22/Photos/8-4-22HabSatconcert-028_nq42ar.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228726/2022/bifi22/Photos/8-4-22HabSatconcert-141_jo19ph.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228701/2022/bifi22/Photos/8-4-22HabSatconcert-046_bck6fz.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228663/2022/bifi22/Photos/8-4-22HabSatconcert-042_poqsuu.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228646/2022/bifi22/Photos/8-4-22HabSatconcert-027_ewz3xh.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228654/2022/bifi22/Photos/8-4-22HabSatconcert-044_slnb0c.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228639/2022/bifi22/Photos/8-4-22HabSatconcert-035_keizth.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228729/2022/bifi22/Photos/8-4-22HabSatconcert-158_hwyif1.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228729/2022/bifi22/Photos/8-4-22HabSatconcert-154_gqy52k.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228729/2022/bifi22/Photos/8-4-22HabSatconcert-162_axq3hc.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228751/2022/bifi22/Photos/8-4-22HabSatconcert-178_wyjgkd.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228686/2022/bifi22/Photos/8-4-22HabSatconcert-057_wv20no.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228658/2022/bifi22/Photos/8-4-22HabSatconcert-064_eqqdrw.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228746/2022/bifi22/Photos/8-4-22HabSatconcert-174_qykvka.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228744/2022/bifi22/Photos/8-4-22HabSatconcert-173_c2tkxe.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228671/2022/bifi22/Photos/8-4-22HabSatconcert-073_vrtnom.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228665/2022/bifi22/Photos/8-4-22HabSatconcert-070_exw2mw.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228752/2022/bifi22/Photos/8-4-22HabSatconcert-183_o7zlvm.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228747/2022/bifi22/Photos/8-4-22HabSatconcert-198_j0ocav.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228681/2022/bifi22/Photos/8-4-22HabSatconcert-088_vpdjkh.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228699/2022/bifi22/Photos/8-4-22HabSatconcert-091_bcq5u7.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228761/2022/bifi22/Photos/8-4-22HabSatconcert-203_mnun4l.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228700/2022/bifi22/Photos/8-4-22HabSatconcert-097_bg6xs0.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228755/2022/bifi22/Photos/8-4-22HabSatconcert-210_ra2cs0.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228756/2022/bifi22/Photos/8-4-22HabSatconcert-218_palscw.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228739/2022/bifi22/Photos/8-4-22HabSatconcert-108_lwnkdi.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1660228713/2022/bifi22/Photos/8-4-22HabSatconcert-105_ttvvhg.jpg`,
  ],
  img1Src:
    "https://res.cloudinary.com/habitatsartorial/image/upload/v1660228646/2022/bifi22/Photos/8-4-22HabSatconcert-027_ewz3xh.jpg",

  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Photography by KJ Bail. Find his instagram at&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://instagram.com/kj_bail_photography?utm_medium=copy_link"
      >
        @kj_bail_photography
      </Link>
      . Henryd, Ellit, JusMari, Arboretum, Huckleberry Funk, and Outer Limits
      for Habitat Sartorial, in By Indy, For Indy 2022. Find their music
      on&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://open.spotify.com/playlist/5lVNzzqGp65BosexxffFCP?si=vhuxhWkSTl6cM8Y2gk8uHA"
      >
        the show recap Spotify playlist
      </Link>
      .
    </Typography>
  ),
};

const earthday22Lookbook = {
  type: "lookbook",
  types: [
    {
      name: "Earth Day",
      bgColor: "#0B610B",
    },
    {
      name: "Lookbook",
      bgColor: "#66cccc",
    },
  ],
  date: "20 Apr 2022",
  author: "Habitat Sartorial",
  title: "Lookbook: Earth Day 2022",
  text: "...",
  id: "earthday-22-lookbook",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1650418843/2022/Earth%20Day/Lookbook/DSC09921_bh7spy.jpg`,
  images: [
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1650418843/2022/Earth%20Day/Lookbook/DSC09921_bh7spy.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1650418831/2022/Earth%20Day/Lookbook/DSC00254_ihzjjh.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1650418849/2022/Earth%20Day/Lookbook/DSC00301_xqptwh.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1650418828/2022/Earth%20Day/Lookbook/DSC00018_flzpq5.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1650418836/2022/Earth%20Day/Lookbook/DSC00555_pmn7x0.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1650418832/2022/Earth%20Day/Lookbook/DSC00498_e1tadb.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418843/2022/Earth%20Day/Lookbook/DSC00126_n6t7db.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418829/2022/Earth%20Day/Lookbook/DSC00058_i6xtci.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418849/2022/Earth%20Day/Lookbook/DSC00039_gcmgxq.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418842/2022/Earth%20Day/Lookbook/DSC09970_vtjhqo.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418831/2022/Earth%20Day/Lookbook/DSC00243_xi9eyp.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418833/2022/Earth%20Day/Lookbook/DSC00486_rawc86.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418847/2022/Earth%20Day/Lookbook/DSC00538_r1pv22.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418832/2022/Earth%20Day/Lookbook/DSC00198_zgmdv4.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1650418845/2022/Earth%20Day/Lookbook/DSC09944_yj8ztl.jpg`,
  ],
  img1Src:
    "https://res.cloudinary.com/habitatsartorial/image/upload/v1650418843/2022/Earth%20Day/Lookbook/DSC09921_bh7spy.jpg",

  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Taylor Serbin, Stephen C. Smith, and Daniel Toluhi for Habitat Sartorial.
      Photography by KJ Bail. Find his instagram at&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://instagram.com/kj_bail_photography?utm_medium=copy_link"
      >
        @kj_bail_photography
      </Link>
      .
    </Typography>
  ),
};

const fw21classics2Promo = {
  type: "video",
  types: [
    {
      name: "Classics",
      bgColor: "#0000ff",
    },
    {
      name: "Promotional",
      bgColor: "#8db600",
    },
  ],
  date: "06 Dec 2021",
  author: "Habitat Sartorial",
  title: "BTS: Fall/Winter 2021 Classics 2",
  text: "...",
  id: "fw21-classics-2-bts",
  video: "https://youtu.be/YXOenpCgpnQ",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1638771720/misc/Screen_Shot_2021-12-06_at_01.16.23_ayilk2.jpg`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Videography by Henry Bobeck. Find his socials at&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://henrybobeck.com/"
      >
        henrybobeck.com
      </Link>
      .
    </Typography>
  ),
};

const fw21classics2Lookbook = {
  type: "lookbook",
  types: [
    {
      name: "Classics",
      bgColor: "#0000ff",
    },
    {
      name: "Lookbook",
      bgColor: "#66cccc",
    },
  ],
  date: "01 Dec 2021",
  author: "Habitat Sartorial",
  title: "Lookbook: Fall/Winter 2021 Classics 2",
  text: "...",
  id: "fw21-classics-2-lookbook",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1638227220/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3520_kopiyp.jpg`,
  images: [
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227216/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3351_uvt1ya.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227215/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3338_wv2ild.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227219/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3465_egi2be.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227220/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3520_kopiyp.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227216/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3336_psoxgq.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227218/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3363_sgf1uu.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227220/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3447_ra9bcy.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/${lookbookImageManip}/v1638227219/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3536_w2b0qs.jpg`,
    `https://res.cloudinary.com/habitatsartorial/image/upload/v1638227214/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3383_ztfzbc.jpg`,
  ],
  img1Src:
    "https://res.cloudinary.com/habitatsartorial/image/upload/w_1000,h_1000,c_fill/v1638243377/Fall%20Winter%202021%20Classics%202%20Lookbook/IMG_3520_uh8bsp.jpg",

  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Photography by McKenzie Stewart.
    </Typography>
  ),
};

const musicLookbook = {
  type: "lookbook",
  types: [
    {
      name: "Promotional",
      bgColor: "#8db600",
    },
    {
      name: "Lookbook",
      bgColor: "#66cccc",
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
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Photography by KJ Bail. Find his instagram at&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://instagram.com/kj_bail_photography?utm_medium=copy_link"
      >
        @kj_bail_photography
      </Link>
      .
    </Typography>
  ),
};

// ar_5:6,c_fill,g_auto this works to make correct aspect ratio

const musicVideo = {
  type: "video",
  types: [
    {
      name: "Promotional",
      bgColor: "#8db600",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "18 Aug 2021",
  author: "Habitat Sartorial",
  title: "Promo: Summer 2021 Music Collection",
  text: "...",
  id: "summer21-promo-video",
  video: "https://vimeo.com/588980823",
  thumbnail: `https://res.cloudinary.com/do8jxdvtx/image/upload/${thumbnailImageManip}/v1629234885/hsllc/thumb_notext-min_iuz3bb.png`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Videography by Henry Bobeck. Find his socials at&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://henrybobeck.com/"
      >
        henrybobeck.com
      </Link>
      .
    </Typography>
  ),
};

const conradInterview = {
  type: "video",
  types: [
    {
      name: "Interview",
      bgColor: "#660000",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "30 Aug 2021",
  author: "Habitat Sartorial",
  title: "Alex Conrad: Summer 2021 Musician Interview",
  text: "...",
  id: "interview-conrad",
  video: "https://youtu.be/YR6ODtFG6_A",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1630288884/Summer%202021%20Music%20Collection/Screen_Shot_2021-08-29_at_22.00.32_jazcg5.png`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Find Alex’s music on Instagram&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.instagram.com/mckenzietaylormusic/"
      >
        @mckenzietaylormusic
      </Link>
      .
    </Typography>
  ),
};

const davidsonInterview = {
  type: "video",
  types: [
    {
      name: "Interview",
      bgColor: "#660000",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "16 Sep 2021",
  author: "Habitat Sartorial",
  title: "Henry Davidson: Summer 2021 Musician Interview",
  text: "...",
  id: "interview-davidson",
  video: "https://www.youtube.com/watch?v=BE2PsNqYnVI",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/v1631796838/
Summer%202021%20Music%20Collection/pressrelease_henrydavidson_vmaf9v.png`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Find Henry on Instagram&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.instagram.com/henrymdavidson/"
      >
        @henrymdavidson
      </Link>
      .
    </Typography>
  ),
};

const brownInterview = {
  type: "video",
  types: [
    {
      name: "Interview",
      bgColor: "#660000",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "05 Oct 2021",
  author: "Habitat Sartorial",
  title: "Griffin Brown: Summer 2021 Musician Interview",
  text: "...",
  id: "interview-brown",
  video: "https://youtu.be/FK3RXcu2BPA",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/v1633411035/Summer%202021%20Music%20Collection/Screen_Shot_2021-10-05_at_01.16.04_kvql3i.png`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Find Griffin on Instagram&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.instagram.com/griffinmbrown/"
      >
        @griffinmbrown
      </Link>
      .
    </Typography>
  ),
};

const inmanInterview = {
  type: "video",
  types: [
    {
      name: "Interview",
      bgColor: "#660000",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "27 Jan 2022",
  author: "Habitat Sartorial",
  title: "Rosie Inman: Winter 2021 Musician Interview",
  text: "...",
  id: "interview-inman",
  video: "https://youtu.be/k_0tspJhUoI",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/v1643218621/Summer%202021%20Music%20Collection/inman_interviewthumbnail_dztpwi.jpg`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Find Rosie performing around the Indianapolis area, and both on
      Instagram&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.instagram.com/musicbyroz/"
      >
        @musicbyroz
      </Link>
      &nbsp;and at her website&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.rosieinman.com"
      >
        rosieinman.com
      </Link>
      .
    </Typography>
  ),
};

const arboretumInterview = {
  type: "video",
  types: [
    {
      name: "Spring 2022",
      bgColor: "#BADAEF",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "23 Feb 2022",
  author: "Habitat Sartorial",
  title: "Arboretum Collective: Spring 2021 Musician Interview",
  text: "...",
  id: "interview-arboretum",
  video: "https://youtu.be/me-kcyWjZe0",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/v1645535436/2022/Interviews/Arboretum/arboretum_thumbnail_w7ihhy.png`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Find Arboretum on&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://l.instagram.com/?u=https%3A%2F%2Fdistrokid.com%2Fhyperfollow%2Farboretum1%2Farboretum-2&e=ATOSL-CDRy7RV1yO9jHOWJLdnDXLCLXzyJvqmMF8xiUnweXEljN1Q-bnYUPzIYKnWquIa2XkkxFA0wxu3YNDIME1Zx_F1k8B8rTT_g&s=1"
      >
        all platforms
      </Link>
      &nbsp;and on instagram&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.instagram.com/arboretumcollective/"
      >
        @arboretumcollective
      </Link>
      .
    </Typography>
  ),
};

const bifi22Video = {
  type: "video",
  types: [
    {
      name: "Live Show",
      bgColor: "#01DF01",
    },
    {
      name: "Music",
      bgColor: "#d597ce",
    },
  ],
  date: "30 Aug 2021",
  author: "Habitat Sartorial",
  title: "Recap: By Indy, For Indy 2022 at Hi-Fi Annex",
  text: "...",
  id: "bifi22-video",
  video: "https://youtu.be/qgBe1teMyik",
  thumbnail: `https://res.cloudinary.com/habitatsartorial/image/upload/${thumbnailImageManip}/v1660228671/2022/bifi22/Photos/8-4-22HabSatconcert-073_vrtnom.jpg`,
  suffix: (
    <Typography align="center" variant="body2" style={{ fontSize: "1rem" }}>
      Videography by JLyn Smith, an Indy talent who has done work for Chris Brown, Post Malone, Megan Thee Stallion, and more. Find his information at&nbsp;
      <Link
        target="_blank"
        color="secondary"
        style={{ fontWeight: 700 }}
        href="https://www.jlynsmith.com/"
      >
        jlynsmith.com
      </Link>
      .
    </Typography>
  ),
};

const postsData = [
  bifi22Video,
  bifi22Photos,
  earthday22Lookbook,
  arboretumInterview,
  inmanInterview,
  fw21classics2Promo,
  fw21classics2Lookbook,
  brownInterview,
  davidsonInterview,
  conradInterview,
  musicVideo,
  musicLookbook,
];
export default postsData;