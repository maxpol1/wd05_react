import styles from './Title.module.css';

export const A = (props) => {
    const {title} = props;
    return (
        <a href={"#"} className={styles.main}> {title} </a>);
};