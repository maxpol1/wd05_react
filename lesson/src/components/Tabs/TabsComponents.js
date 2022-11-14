import styles from './Tabs.module.css'

export const Tab = (props) => {
    console.log(props);
    const {disabled, title, click, type} = props;

    const st = {
        br: styles.br,
    };

    return (
        <button
            disabled={disabled}
            className={`${styles.Tabs} ${st[type]}`}
            onClick={click} >

            {title}
        </button>

    );

}

