import { Link } from "react-router-dom";
import { heroSectionList } from "../data/heroSectionList";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sectionKey, setSectionKey] = useState<number>(0);
  const [asideKey, setAsideKey] = useState<number>(1);

  useEffect(() => {
    const currentIndex = setInterval(handleCurrentCategory, 5000);

    return () => {
      clearInterval(currentIndex);
    };
  }, []);

  const handleCurrentCategory = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSectionList.length);
    setSectionKey((prev) => prev + 1);
    setAsideKey((prev) => prev + 1);
  };

  return (
    <main className="bg-primary-lightblue h-96 text-black px-32 flex justify-between items-center overflow-hidden max-lg:px-10 max-sm:flex-col-reverse max-sm:justify-center max-sm:h-fit max-sm:py-6 max-sm:text-center">
      <motion.section
        key={sectionKey}
        initial={{ opacity: 0, y: 100 + "%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-6xl font-bold">
          {heroSectionList[currentIndex].title}
        </h2>
        <p className="mt-1 font-medium">
          {heroSectionList[currentIndex].description}
        </p>
        <button className="mt-5 px-6 py-2 text-white rounded bg-primary-darkblue hover:bg-black transition max-sm:block max-sm:mx-auto">
          <Link to="shop">Shop now</Link>
        </button>
      </motion.section>
      <motion.aside
        key={asideKey}
        className="w-96 max-sm:w-40"
        initial={{ x: 100 + "%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="object-cover"
          src={heroSectionList[currentIndex].image}
          alt={heroSectionList[currentIndex].title}
        />
      </motion.aside>
    </main>
  );
};

export default HeroSection;
