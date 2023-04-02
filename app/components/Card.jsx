import styles from '../styles/Card.module.css'
import * as React from 'react'

const Card = ({course}) => {
    return (
        <div className={[styles["card-course"], styles["card-course-pointer"]].join(" ")}>
            <div className={styles["card-course-image"]}>
                <span className={styles["card-lazy-load-image-background-blur"]}>
                    <img alt={course.name}
                    src={course.image}
                    />
                </span>
            </div>
            <div className={styles["card-course-container"]}>
                <div className={styles["card-course-information"]}>
                    <div className={styles["card-course-title"]}>
                        <h3>{course.name}</h3>
                    </div>
                    <div className={styles["card-course-period"]}>
                        <p>{course.period_formatted} - {course.classes_formatted}</p>
                    </div>
                </div>
                <div className={styles["card-course-description"]}>
                    <div className={styles["card-course-text"]}>
                        <p>{course.description}</p>
                    </div>
                    <div className={styles["card-course-button"]}>
                        <a className={[styles["card-button"], styles["card-button-black"]].join(" ")} href="#">
                            <p>Ver el curso</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card