import React from 'react';
import { FeedPackaging } from '../FeedPackaging';
import { PackageInform } from '../PackageInform';
import styles from './packagingblock.css';

export interface IDataItem {
    taste: string;
    servingsCount: number;
    giftsCount: number;
    weight: string;
    selected: boolean;
    selectedInform: string;
    isDesabled: boolean;
}

interface IPackagingBlockProps {
    data: IDataItem;
}

export function PackagingBlock({ data }: IPackagingBlockProps) {
    const [ isSelected, setIsSelected ] = React.useState(data.selected);

    return (
        <div className={styles.packagingBlock}>
            <FeedPackaging
                data={data}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
            />
            <PackageInform
                data={data}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
            />
        </div>
    );
}
