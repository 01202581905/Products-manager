import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {

    let { product, index } = props;
    let status = product.status === true ? 'Still': 'Over'; 
    let statusClass = product.status === true ? 'warning': 'default';
    const onDelete = (id) => {
        if( confirm(`Are you sure want to delete product has id = ${id} ?`) ) { //eslint-disable-line
            props.onDelete(id);
        }
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}$</td>
            <td>
                <span className={`label label-${statusClass}`}>{status}</span>
            </td>
            <td>
                <Link to={`/product/${product.id}/edit`}>
                    <button 
                        type="button" 
                        className="btn btn-success mrr-10">UPDATE
                    </button>
                </Link>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={ () => onDelete(product.id) }>DELETE
                </button>
            </td>
        </tr>
    );
}

export default ProductItem;
