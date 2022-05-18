import React, {FC} from "react";
import {Cell} from "../../models/Cell/Cell";

interface CellProps {
    cell: Cell;
}

export const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.colour].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    )
}