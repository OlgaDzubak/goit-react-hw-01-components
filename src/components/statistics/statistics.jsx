import React from 'react';
import css from './statistics.module.css'
import propTypes from 'prop-types';
import {getRandomHexColor} from './statictics'

export const Statistics =({stats, title}) => {
    const dinamicWidth = 'calc(100% / ' + stats.length + ')';
    return (
        <section className={css.statistics}>
            { (title) && (<h2 className={css.title}>{title}</h2>)  }
            <ul className={css.statlist}>
                {
                    stats.map(stat => (
                        <li className={css.item} style={{backgroundColor:getRandomHexColor(), width:dinamicWidth }} key={stat.id}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}</span>
                        </li>
                    ))
                }
             </ul>

        </section>
    );
}

Statistics.propTypes = {
    id: propTypes.number,
    label: propTypes.string,
    percentage: propTypes.number,
}



