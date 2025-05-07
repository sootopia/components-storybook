import styles from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'link';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  label: string;
  rounded: 'small' | 'medium' | 'large' | 'full';
  onClick?: () => void;
}

export const Button = ({ variant = 'default', size = 'medium', label, rounded = 'small', ...props }: ButtonProps) => {
  const buttonClasses = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    styles[`rounded--${rounded}`],
  );
  return (
    <button type="button" className={buttonClasses} {...props}>
      {label}
    </button>
  );
};
