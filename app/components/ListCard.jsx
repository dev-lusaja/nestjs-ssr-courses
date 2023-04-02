import * as React from 'react'
import Card from './Card'
import styles from '../styles/ListCard.module.css'

const ListCard = ({ courses }) => {
    let card_list = []

    courses.forEach((course, index) => {
        card_list.push(<Card course={course}/>)
    })

    return (
        <div className={styles['main-content']}>
            <section className={styles["tabs-wrapper"]}>
                <div className={styles["tabs-container"]}>
                    <section className={styles["courses-wrapper"]}>
                        <div className={styles["courses-container"]}>
                            <ul className={[styles["courses-list"], styles["courses-list-enter-done"]].join(" ")}>
                                {card_list}
                            </ul>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default ListCard