import {Tab} from './TabsComponents';
import styles from './Tabs.module.css';


function Tabs () {
    const clickAll = () => {
        console.log(1);
    };
    return (
        <div className={styles.main}>
            <div className={styles.cont}>
                <Tab title={'All'} type={'br'} click={clickAll}>

                </Tab>
                <Tab title={'My favorites'}/>
                <Tab title={'Popular'}/>
            </div>
        </div>
    );
}
// const arr = ['cdcs', 'ecwc', 'ecsdc', 'ecawcaa', 'cwccew', 'cevrvc', 'cwcdcsd'];


export default Tabs;