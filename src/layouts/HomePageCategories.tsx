import { Link } from "react-router-dom";

const HomePageCategories = () => {
  const categories = [
    {
      title: "Electronics",
      image: "/images/electronics2.jpg",
      customStyles: "",
      path: "electronics",
    },
    {
      title: "Women's clothing",
      image: "/images/women-clothing2.jpg",
      customStyles: "",
      path: "women's clothing",
    },
    {
      title: "Jewelleries",
      image: "/images/jewellery2.jpg",
      customStyles: "col-span-2 max-sm:col-span-1",
      path: "jewelery",
    },
    {
      title: "Men's clothing",
      image: "/images/men-clothing2.jpg",
      customStyles:
        "row-start-1 col-start-3 row-span-2 max-sm:row-auto max-sm:col-auto",
      path: "men's clothing",
    },
  ];

  return (
    <section className="mt-5 grid grid-cols-3 grid-rows-[250px,250px] gap-2 px-5 max-sm:grid-cols-1 max-sm:grid-rows-[400px,400px,400px,400px] max-sm:px-2">
      {categories.map((category, index) => (
        <article
          key={index}
          className={`group relative cursor-pointer overflow-hidden bg-cover bg-center ${category.customStyles}`}
        >
          <img
            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            src={category.image}
            alt=""
          />
          <div className="absolute left-8 top-24 text-white">
            <h4 className="text-3xl font-bold">{category.title}</h4>
            <Link to={`/${category.path}`}>
              <button className="mt-2 rounded border border-primary-darkblue px-4 py-1 font-medium transition hover:bg-primary-darkblue">
                Shop now
              </button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomePageCategories;
