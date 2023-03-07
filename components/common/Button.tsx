import { MdOutlineArrowForwardIos } from 'react-icons/md';

function Button({ text, variant = 'bordered', onClick = () => {}, url = '' }: Button) {
  const variants = {
    underlined: 'text-textLG text-primary px-[20px] py-[10px] bg-white border-b-[5px] border-b-primary',
    bordered: 'text-textLG text-primary px-[20px] py-[10px] bg-white border-[1px] border-primary rounded-lg',
    arrow: 'text-textLG text-primary bg-white',
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
