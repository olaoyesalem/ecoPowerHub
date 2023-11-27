const Button = ({className,children,href}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Button;
