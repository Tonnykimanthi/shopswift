interface titleProps {
  title: string;
}

const CategoriesTitle = ({ title }: titleProps) => {
  return <h2 className="self-start text-2xl text-white">{title}</h2>;
};

export default CategoriesTitle;
