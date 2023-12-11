import { cn } from '@/utils';

/**
 * @param {{children: React.ReactNode;   size: 'sm' | 'md' | 'full';   variant: 'default' | 'outline' | 'solid' | 'icon';   type: 'primary' | 'secondary';}} props */
function Button(props) {
  const { children, size, variant, type, ...rest } = props;

  const variantStyles = {
    default:
      'w-full px-6 py-2 bg-neutral-50 text-neutral-1000 hover:bg-neutral-200 shadow-button backdrop-blur-xl disabled:cursor-not-allowed disabled:bg-neutral-50  disabled:opacity-50',
    outline:
      'gap-2.5 px-6 py-2 border shadow-button border-solid border-button-stroke shadow-3xl backdrop-blur-neutral text-center',
    solid:
      'gap-2.5 hover:bg-twitter-blue-hover bg-twitter-blue  text-neutral-50 disabled:bg-twitter-blue-disabled disabled:cursor-not-allowed',
  };
  const textType = {
    primary: 'text-twitter-blue',
    secondary: 'text-neutral-50',
  };
  const buttonSize = {
    sm: 'text-sm px-4 py-1.5 font-bold',
    md: 'w-[7rem] px-6 py-3 shadow-3xl md:w-[13.8rem] md:rounded-6xl',
    full: 'p-5 w-full',
  };

  return (
    <button
      className={cn(
        rest?.className,
        'rounded-full text-base font-bold',
        variantStyles[variant],
        textType[type],
        buttonSize[size],
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
