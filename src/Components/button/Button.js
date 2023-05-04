/* eslint-disable jsx-a11y/alt-text */

const Button = ({ href, title, svg, className, download, target, rel }) => {
  return (
    <a
      href={href}
      className={className}
      download={download}
      target={target}
      rel={rel}
    >
      {title}
      <img src={svg} className="button__icon" />
    </a>
  );
};

export default Button;
