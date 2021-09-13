import React from 'react';

const Alert = ( props ) =>
{
    const capitalize = ( text ) =>
    {
        const lower = text.toLowerCase();
        return lower.charAt( 0 ).toUpperCase() + lower.substring( 1 )
    }
    return (
        <div style={ { height: "50px" } }>
            {
                props.alert && <div className={ `alert alert-${ props.mode === "light" ? "success" : props.alert.type === "danger" ? "danger" : props.alert.type === "success" ? "success" : "danger" } alert-dismissible fade show` } role="alert">
                    <strong>{ capitalize( props.alert.type ) }</strong> { props.alert.msg }
                </div>
            }
        </div>

    );
};

export default Alert;