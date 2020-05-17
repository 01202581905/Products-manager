import React,{ useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';

function ListProductPage(props) {

    useEffect( () => {
        props.fetchAllProducts();
        props.clearItemEditing();
    }, []);

    const onDelete = (id) => {
        props.onDeleteProduct(id);
    };

    let products = props.products;
    
    const showProductItem = (products) => {
        let result = null;
        if( products.length > 0 ) {
            result = products.map( (product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={ onDelete } />
                );
            } );
        }
        return result;
    };
    
    return (
        < div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <Link to="product/add">
            <button type="button" className="btn btn-info mrb-10">ADD PRODUCT</button>
            </Link>
            <ProductList>
                { showProductItem(products) }
            </ProductList>
        </ div>
    );
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actions.actFetchProductsAPI());
        },
        onDeleteProduct: (id) => {
            dispatch(actions.actDeleteProductAPI(id));
        },
        clearItemEditing: () => {
            dispatch(actions.actClearEditing());
        }
    }
};

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProductPage);
