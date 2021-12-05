import React from 'react';

const TableField = ({fieldName, settingsField, editBook, removeBook}) => {

    return (
        <div className="tableField">
            {fieldName}
            {settingsField && 
                <>
                     <i onClick={editBook} className="fa fa-edit"></i>
                    <i onClick={removeBook} className="fa fa-trash-alt"></i>
                </>
            }
           
        </div>
    )
}

export default TableField;