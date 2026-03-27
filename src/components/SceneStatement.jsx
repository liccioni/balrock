import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SceneStatement({ eyebrow, title, body, align, tone }) {
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start end", "end start"],
  });
  const ghostX = useTransform(
    scrollYProgress,
    [0, 1],
    align === "right" ? ["4%", "-6%"] : ["-4%", "6%"],
  );
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.02, 0.09, 0.03]);
  const shouldAnimateIn = import.meta.env.MODE !== "test";

  return (
    <motion.section
      ref={statementRef}
      initial={shouldAnimateIn ? { opacity: 0, y: 42 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`scene-statement scene-statement--${tone} scene-statement--${align}`}
      aria-hidden="true"
    >
      <div className="scene-statement-shell mx-auto max-w-6xl px-5 sm:px-6 md:px-10 lg:px-16">
        <p className="scene-statement-eyebrow">{eyebrow}</p>
        <div className="scene-statement-copy">
          <h2 className="scene-statement-title">{title}</h2>
          {body ? <p className="scene-statement-body">{body}</p> : null}
        </div>
        <motion.div
          className="scene-statement-ghost"
          style={{ x: ghostX, opacity: ghostOpacity }}
        >
          {eyebrow}
        </motion.div>
      </div>
    </motion.section>
  );
}

SceneStatement.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  body: PropTypes.string,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(["ember", "ash"]),
};

SceneStatement.defaultProps = {
  align: "left",
  body: "",
  tone: "ash",
};
