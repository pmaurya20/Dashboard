import React from 'react';
import '../portlet/portlet.css';
import PropTypes from 'prop-types';

var Portlet = props => {
    return (
        <div className="portlet">
            {/* Portlet Header */}
            {props.PortletTitle ?
                <div className="portlet-header d-flex align-items-center">
                    <div>
                        {props.PortletSubTitle ?
                            <p className="portlet-subtitle">{props.PortletSubTitle}</p>
                            : null
                        }
                        <h3 className="portlet-title">{props.PortletTitle}</h3>
                    </div>
                    {props.PortletFilterAction ?
                        <div className="ml-auto">{props.PortletFilterAction}</div>
                        : null}
                </div>
                : null
            }

            {/* Portlet Body */}
            {props.children ?
                <div className="portlet-body">
                    {props.children}
                </div>
                : null
            }
        </div>
    )
}

Portlet.prototype = {
    PortletTitle: PropTypes.string
    // PortletBody: PropTypes.function
}

export default Portlet;