const FilterGroup = ({ title, children, className = "" }) => {
  return (
    <div
      className={`border-b border-gray-200 py-6 last:border-b-0 ${className}`}
    >
      <h3 className="mb-4 text-sm font-semibold text-gray-800">{title}</h3>

      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default FilterGroup;
