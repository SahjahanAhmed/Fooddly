import { animateScroll } from "react-scroll";

export const handleScroll = (whereTo) => {
  animateScroll.scrollTo(whereTo, {
    duration: 300,
    smooth: true,
  });
};
