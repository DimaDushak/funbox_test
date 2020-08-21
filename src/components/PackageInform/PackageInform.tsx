import React from 'react';
import { IDataItem } from '../PackagingBlock';
import classnames from 'classnames';
import styles from './packageinform.css';

interface IPackageInformProps {
    data: IDataItem;
    isSelected: boolean;
    setIsSelected: (b: boolean) => void;
}

export function PackageInform({ data, isSelected, setIsSelected }: IPackageInformProps) {
    const { taste, selectedInform, isDesabled } = data;
    const desabledInfo = classnames(
        styles.text,
        styles.yellow
    );

    return (
        <>
            {(isDesabled) ? <p className={desabledInfo}>Печалька, с {taste} закончился.</p> :
                (isSelected) ? <p className={styles.text}>{selectedInform}</p> :
                <p className={styles.text}>
                    Чего сидишь? Порадуй котэ,&nbsp;
                    <button
                        className={styles.button}
                        onClick={() => setIsSelected(true)}
                    >купи</button>
                </p>
            }
        </>
    );
}
