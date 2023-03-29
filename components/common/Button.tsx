import { MdOutlineArrowForwardIos } from 'react-icons/md';

function Button({ text, variant = 'bordered', onClick = () => {}, url = '', size = 'lg' }: Button) {
  const textSize = {
    lg: 'text-textLG',
    md: 'text-text',
    sm: 'text-textSM',
  };

  const variants = {
    underlined: textSize[size] + ' text-primary px-[20px] py-[10px] bg-white border-b-[5px] border-b-primary',
    bordered: textSize[size] + ' text-primary px-[20px] py-[10px] bg-white border-[1px] border-primary rounded-lg',
    arrow: textSize[size] + ' text-primary bg-white',
  };

  return (
    <button
      className={
        variants[variant] +
        ' ' +
        'flex justify-start items-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out'
      }
      onClick={() => {
        url ? (window.location.href = url) : onClick();
      }}
    >
      {text.toUpperCase()} {variant === 'arrow' && <MdOutlineArrowForwardIos className="inline-block" />}
    </button>
  );
}

export default Button;
