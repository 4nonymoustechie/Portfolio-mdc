import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";
import page1 from './assets/resume/page1.jpg';
import page2 from './assets/resume/page2.jpg';
import page3 from './assets/resume/page3.jpg';
import resume from './assets/resume/my-resume.pdf'

const resumeImages = [page1, page2, page3];

const ResumeViewer = () => {
  const [current, setCurrent] = useState(0);
  const [showViewer, setShowViewer] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % resumeImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? resumeImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">My Resume</h2>

      {/* Show Button First */}
      {!showViewer && (
        <button
          onClick={() => setShowViewer(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700"
        >
          View Resume
        </button>
      )}

      {/* Conditional Resume Viewer */}
      {showViewer && (
        <div className="relative w-full max-w-3xl mx-auto mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={resumeImages[current]}
                alt={`Resume page ${current + 1}`}
                className="rounded-xl shadow-lg object-contain w-full"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Next
            </button>
          </div>

          {/* Download Resume PDF */}
          <div className="mt-6">
            <a
              href={resume}
              download
              className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
            >
              <FiDownloadCloud className="mr-2" />
              Download Full Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;
