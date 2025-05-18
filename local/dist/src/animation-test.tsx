import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 400 }}
      transition={{ duration: 2 }}
      className="w-32 h-32 bg-blue-500"
    >
      Animated Box
    </motion.div>
  );
};

export default AnimatedBox;
