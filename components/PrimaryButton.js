const PrimaryButton = ({
  children = '',
  isPrimary = 'true',
  ...otherProps
}) => {
  const btnColor = isPrimary
    ? 'bg-colorPrimary text-colorPale'
    : 'bg-colorPale text-[#544E5D]';
  return (
    <button
      className={`${btnColor} rounded-2xl py-4 px-8 font-semibold`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
