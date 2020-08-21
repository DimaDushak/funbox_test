import React from 'react';
import classnames from 'classnames';
import styles from './packageweight.css';

interface IPackageWeightProps {
    weight: string;
    isSelected: boolean;
    isDesabled: boolean;
}

export function PackageWeight({ weight, isSelected, isDesabled }: IPackageWeightProps) {
    const circle = classnames(
        styles.circle,
        { [styles.greyCircle]: isDesabled },
        { [styles.blueCircle]: !isSelected && !isDesabled },
        { [styles.pinkCircle]: isSelected && !isDesabled }
    );

    return (
        <div className={circle}>
            <p>{weight}</p>
            <p>кг</p>
        </div>
    );
}
