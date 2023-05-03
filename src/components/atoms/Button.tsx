import { useRouter } from 'next/router';

interface IButton {
  title: string;
  style?: string;
  loading?: boolean;
  loadingTitle?: string | null;
  path?: string;
  color?: string;
  bgColor?: string;
  shadow?: string;
  padding?: string;
  disabled?: boolean;
  type?: string;
  size?: string;
  bold?: boolean;
  capitalize?: boolean;
  handleClick?: any;
  handleSecondClick?: () => void;
}

export default function Button(props: IButton) {
  const navigate = useRouter();
  return (
    <button
      className={`
            mb-5
            ${props.padding ? props.padding : 'p-3'}
            ${props.color ? props.color : 'text-white '}
            ${props.bgColor ? props.bgColor : 'bg-red-default '}    
            ${props.loading && 'opacity-60'}
            hover:shadow-xl
            ${props.shadow ? props.shadow : 'hover:shadow-red-100 '}
            w-full rounded-full
            ${(props.disabled || props.loading) && 'cursor-not-allowed'}
            ${props.bold && 'font-bold'}
            ${props.capitalize && 'capitalize'}
            ${props.size ? props.size : 'text-sm'}
            `}
      onClick={
        props.path
          ? () => props.path && navigate.push(props.path)
          : props.handleClick
      }
      disabled={props.disabled || props.loading}
      type={props.type === 'submit' ? 'submit' : 'button'}
    >
      {props.loading ? props.loadingTitle : props.title}
    </button>
  );
}
