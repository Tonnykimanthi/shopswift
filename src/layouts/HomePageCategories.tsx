const HomePageCategories = () => {
  const categories = [
    {
      title: "Electronics",
      image: "/images/electronics2.jpg",
      customStyles: "",
    },
    {
      title: "Women's clothing",
      image: "/images/women-clothing2.jpg",
      customStyles: "",
    },
    {
      title: "Jewelleries",
      image: "/images/jewellery2.jpg",
      customStyles: "col-span-2 max-sm:col-span-1",
    },
    {
      title: "Men's clothing",
      image: "/images/men-clothing2.jpg",
      customStyles:
        "row-start-1 col-start-3 row-span-2 max-sm:row-auto max-sm:col-auto",
    },
  ];

  return (
    <section className="my-5 px-5 grid grid-cols-3 grid-rows-[250px,250px] max-sm:grid-rows-[400px,400px,400px,400px] gap-2 max-sm:grid-cols-1">
      {categories.map((category, index) => (
        <article
          key={index}
          className={`bg-center bg-cover relative cursor-pointer overflow-hidden group ${category.customStyles}`}
        >
          <img className="w-full h-full object-cover group-hover:scale-110 transition duration-300" src={category.image} alt="" />
          <div className="absolute top-24 left-8 text-white">
            <h4 className="text-3xl font-bold">{category.title}</h4>
            <button className="mt-2 px-4 py-1 font-medium rounded border border-primary-darkblue hover:bg-primary-darkblue transition">
              Shop now
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomePageCategories;
