import styles from "./button.module.scss";

interface ButtonProps {
   children: React.ReactNode;
   type?: "button" | "submit" | "reset";
   className?: string;
   onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
   children,
   type,
   className,
   onClick,
}) => {
   return (
      <button
         type={type}
         className={`${styles.button} ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
