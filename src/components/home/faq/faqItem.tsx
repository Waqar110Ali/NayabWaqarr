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
<<<<<<< HEAD
    <div className="border-b border-gray-200 py-4">

      <button
        className="flex justify-between items-center w-full text-left font-medium"
=======
    <div className="faq-item">

      <button
        className="faq-question"
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb
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
<<<<<<< HEAD
=======
            className="faq-answer"
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
<<<<<<< HEAD
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-600">{answer}</p>
=======
          >
            <p>{answer}</p>
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

<<<<<<< HEAD
export default FaqItem;
=======
export default FaqItem;
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb
