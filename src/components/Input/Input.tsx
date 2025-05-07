import styles from './Input.module.scss';
import clsx from 'clsx';

export interface InputProps {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
  value?: string;
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  rounded?: 'small' | 'medium' | 'large' | 'full';
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = 'text',
  size = 'medium',
  rounded = 'small',
  name,
  error,
  placeholder,
  onChange,
  disabled,
  value,
  ...props
}: InputProps) => {
  const inputClasses = clsx(
    styles['form--control'],
    styles[`form--${size}`],
    styles[`rounded--${rounded}`],
    error && styles['form--error'],
  );

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={inputClasses}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};
