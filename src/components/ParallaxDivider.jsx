import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxDivider({ imageSrc, altLabel, variant }) {
  const dividerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.02]);

  return (
    <div
      ref={dividerRef}
      aria-hidden="true"
      className={`parallax-divider parallax-divider--${variant} relative overflow-hidden border-y border-white/8`}
    >
      <motion.div
        className="parallax-divider-image absolute inset-0"
        style={{ backgroundImage: `url('${imageSrc}')`, y, scale }}
      />
      <div className="parallax-divider-overlay absolute inset-0" />
      <div className="parallax-divider-grain absolute inset-0" />
      <span className="sr-only">{altLabel}</span>
    </div>
  );
}

ParallaxDivider.propTypes = {
  altLabel: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["ash", "shard"]),
};

ParallaxDivider.defaultProps = {
  altLabel: "",
  variant: "ash",
};
