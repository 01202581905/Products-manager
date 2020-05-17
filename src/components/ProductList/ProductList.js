import React from 'react';

function Productlist(props) {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">LIST PRODUCTS</h3>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>NUMBER ORDER</th>
                            <th>CODE</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.children }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Productlist;
