import React from 'react';

function CardBuah(props) {
    return (
        <div>
            <div className="card">
                <img className="card-img-center" src={props.gambar} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{props.nama}</h5>
                <p className="card-text">{props.bobot}kg</p>
                <p className="card-text">Rp.{props.harga}</p>
                <a href="#" className="btn btn-primary" onclick>Beli</a>
            </div>
      </div>
        </div>
    );
}

export default CardBuah;