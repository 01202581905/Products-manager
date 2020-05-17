import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function ProductactionPage(props) {

    const [state, setState] = useState({
        txtName: '',
        txtPrice: '',
        ckbInventory: '',
        id: ''
    });

    useEffect( () => {
        let { match } = props;
        if( match ) {
            let id = match.params.id;
            props.onEditProduct(id);
        }
    }, []);

    useEffect(() => {
        if( props.itemEditing.id ) {
            setState({
                txtName: props.itemEditing.name,
                txtPrice: props.itemEditing.price,
                ckbInventory: props.itemEditing.status === true ? 'checked' : false,
                id: props.itemEditing.id
            });
        }
    }, [props.itemEditing])


    const onChange= (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        setState({
            txtName: name === 'txtName' ? value : state.txtName,
            txtPrice: name === 'txtPrice' ? value : state.txtPrice,
            ckbInventory: name === 'ckbInventory' ? value : state.ckbInventory,
            id: state.id
        });
    };

    const onSave = (event) => {
        event.preventDefault();
        let { history } = props;
        let id = state.id;
        let tempProduct = {
            id,
            name: state.txtName,
            price: state.txtPrice,
            status: state.ckbInventory,
            inventory: 10
        };
        if( id !== '' ) {
            props.onUpdateProduct(tempProduct);
        }
        else {
            props.onAddProduct(tempProduct);
        }
        history.goBack();
    };

    return (
        < div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <form onSubmit={ onSave }>
                <div className="form-group">
                    <label>Name Product:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="txtName" 
                        value={state.txtName} 
                        onChange={ onChange }/>
                </div>
                <div className="form-group">
                    <label>Price Product:</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="txtPrice" 
                        value={state.txtPrice} 
                        onChange={ onChange }/>
                </div>
                <div className="form-group">
                    <label>Inventory:</label>
                </div>
                <div className="form-group">
                    <input 
                        type="checkbox" 
                        name="ckbInventory" 
                        onChange={ onChange } 
                        checked={state.ckbInventory}/>Still Inventory
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/productlist">
                    <button type="button" className="btn btn-danger ml-10">Cancel</button>
                </Link>
            </form>
            
        </ div>
    );
}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actions.actAddProductAPI(product))
        },
        onEditProduct: (id) => {
            dispatch(actions.actGetProductAPI(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actions.actUpdateProductAPI(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductactionPage);
