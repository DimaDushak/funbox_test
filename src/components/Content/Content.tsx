import React from 'react';
import { PackagingBlock } from '../PackagingBlock';
import { generateRandomString } from '../../utils';
import styles from './content.css';

export function Content() {
    const data = [
        {
            taste: 'фуа-гра',
            servingsCount: 10,
            giftsCount: 1,
            weight: '0,5',
            selected: false,
            selectedInform:'Печень утки разварная с артишоками.',
            isDesabled: false
        },
        {
            taste: 'рыбой',
            servingsCount: 40,
            giftsCount: 2,
            weight: '2',
            selected: true,
            selectedInform: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            isDesabled: false
        },
        {
            taste: 'курой',
            servingsCount: 100,
            giftsCount: 5,
            weight: '5',
            selected: false,
            selectedInform: 'Филе из цыплят с трюфелями в бульоне.',
            isDesabled: true
        }
    ];

    return (
        <div className={styles.content}>
            <p className={styles.text}>
                Ты сегодня покормил кота?
            </p>
            <div className={styles.flexBlock}>
                {
                    data.map((item) => <PackagingBlock data={item} key={generateRandomString()} />)
                }
            </div>
        </div>
    );
}
