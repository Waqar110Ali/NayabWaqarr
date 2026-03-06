import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

interface Props {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">

      <button
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default FaqItem;