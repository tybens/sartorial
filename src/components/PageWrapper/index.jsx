import { useEffect } from "react";

const titleMapper = {
  Piece:
    "One day, we’ll have stars from, within, and around your city, too. Apparel for charity - it’s the easiest way to make a difference in your home, wherever home may be.",
  "Your Cart":
    "Check out the items in your cart! If there are no items, add some more. Thank you for you support.",
  Fashion:
    "Merch for a cause. Instead of sending letters to ask for money, we offer new styles and new releases of apparel to serve as our request for more donations - allowing your desire to look and feel good incentivize further donation. Every time a customer makes a purchase with us, they know they’ve put their money towards their own community.",
  Mission:
    "We've replaced the 'free gift' often exchanged for a donation with durable, attractive clothing, a basic need for everyone, and instead of trying to save money and selling something cheap, we dedicated over a year to finding the softest, strongest fabrics, and practicing the most precise printing methods available.",
  Content:
    "Thank you to every member of the Habitat Sartorial community. We already have working projects ready to bring you in 2022 - we consider 2021 a good start. Now we continue to build!",
};

const PageWrapper = (props) => {
  useEffect(() => {
    document.title = props.title
      ? `Habitat Sartorial | ${props.title} for a cause`
      : "Habitat Sartorial | Fashion for a cause";
    if (props.title) document.description = titleMapper[props.title];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.children;
};

export default PageWrapper;
