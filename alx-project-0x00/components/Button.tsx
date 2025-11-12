import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ styles, title }) => {
    return (
        <>
            <button className={styles}>{title}</button>

        </>
    )
}

export default Button