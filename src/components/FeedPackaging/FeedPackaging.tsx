import React from 'react';
import classnames from 'classnames';
import { PackageWeight } from '../PackageWeight';
import { getDeclination } from '../../utils';
import { IDataItem } from '../PackagingBlock';
import styles from './feedpackaging.css';

const declinations = ['мышь', 'мыши', 'мышей'];

interface IFeedPackagingProps {
    data: IDataItem;
    isSelected: boolean;
    setIsSelected: (b: boolean) => void;
}

export function FeedPackaging({ data, isSelected, setIsSelected }: IFeedPackagingProps) {
    const [ isHovered, setIsHovered ] = React.useState(false);
    const { taste, servingsCount, giftsCount, weight, isDesabled } = data;

    const feedPackaging = classnames(
        styles.feedPackaging,
        { [styles.greyBorder]: isDesabled },
        { [styles.blueBorder]: !isSelected && !isDesabled },
        { [styles.pinkBorder]: isSelected && !isDesabled }
    );

    return (
        <div 
            className={feedPackaging}
            onMouseEnter={() => {
                if (!isDesabled) setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                setIsSelected(!isSelected);
                setIsHovered(false);
            }}
        >
            <div className={styles.border}>
                <div className={styles.textBlock}>
                    {isSelected && isHovered ? 
                        <p className={styles.pink}>Котэ не одобряет?</p> :
                        <p className={styles.grey}>Сказочное заморское яство</p>
                    }
                    <h2 className={styles.heading}>Нямушка</h2>
                    <p className={styles.subheading}>с {taste}</p>
                    <div className={styles.descriptions}>
                        <p><b>{servingsCount}</b> порций</p>
                        <p><b>{getDeclination(declinations, giftsCount)}</b> в подарок</p>
                        {(giftsCount == 5) && (
                          <p className={styles.lastDescription}>заказчик доволен</p>
                        )}
                    </div>
                </div>
            </div>
            <img src="/images/cat.png" className={styles.image} />
            <PackageWeight weight={weight} isSelected={isSelected} isDesabled={isDesabled} />
        </div>
    );
}
