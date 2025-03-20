'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BlurInProps {
  children: ReactNode;
  delay?: number;
}

const BlurIn = ({ children, delay = 0 }: BlurInProps) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn; 