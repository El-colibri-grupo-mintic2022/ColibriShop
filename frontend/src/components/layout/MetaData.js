import React from 'react'
import {Helmet} from 'react-helmet'

const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - My Proyecto UdeA 2022`}</title>
        </Helmet>
    )

}
export default MetaData