import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [hargaNaga, setHargaNaga] = useState(0)
  const [hargasalak, sethargasalak] = useState(0)
  const [hargaklengkeng, sethargaklengkeng] = useState(0)
  const [hargadurian, sethargadurian] = useState(0)
  const [hargajeruk, sethargajeruk] = useState(0)
  const [hargamanggis, sethargamanggis] = useState(0)
  const [hargaanggur, sethargaanggur] = useState (0)
  const [hargajambu, sethargajambu] = useState (0)

  const [totalHarga, setTotalHarga] = useState(0)

  // counter
  const btnNagaMinus = () =>{
    setHargaNaga(hargaNaga - 1)
    setTotalHarga(totalHarga - 7000)
  }
  const btnNagaPlus = () =>{
    setHargaNaga(hargaNaga + 1)
    setTotalHarga(totalHarga + 7000)
  }

  const btnSalakMinus = () => {
    sethargasalak(hargasalak - 1)
    setTotalHarga(totalHarga - 15000)
  }
  const btnSalakplus = () => {
    sethargasalak(hargasalak + 1)
    setTotalHarga(totalHarga + 15000)
  }
  
  const btnklengkengkMinus = () => {
    sethargaklengkeng(hargaklengkeng - 1)
    setTotalHarga(totalHarga - 35000)
  }
  const btnKlengkenglus = () => {
    sethargaklengkeng(hargaklengkeng + 1)
    setTotalHarga(totalHarga + 35000)
  }

  const btndurianminus = () => {
    sethargadurian(hargadurian - 1)
    setTotalHarga(totalHarga - 50000 )
  }
  const btndurianplus = () => {
    sethargadurian(hargadurian + 1)
    setTotalHarga(totalHarga + 50000)
  }

  const btnjerukminus = () => {
    sethargajeruk(hargajeruk - 1)
    setTotalHarga(totalHarga - 8000 )
  }
  const btnjerukplus = () => {
    sethargajeruk(hargajeruk + 1)
    setTotalHarga(totalHarga + 8000)
  }

  const btnmanggisminus = () => {
    sethargamanggis(hargamanggis - 1)
    setTotalHarga(totalHarga - 12000 )
  }
  const btnmanggisplus = () => {
    sethargamanggis(hargamanggis + 1)
    setTotalHarga(totalHarga + 12000)
  }
  
  const btnanggurminus = () => {
    sethargaanggur(hargaanggur - 1)
    setTotalHarga(totalHarga - 45000 )
  }
  const btnanggurplus = () => {
    sethargaanggur(hargaanggur + 1)
    setTotalHarga(totalHarga + 45000)
  }

  const btnjambuminus = () => {
    sethargajambu(hargajambu - 1)
    setTotalHarga(totalHarga - 15000 )
  }
  const btnjambuplus = () => {
    sethargajambu(hargajambu + 1)
    setTotalHarga(totalHarga + 15000)
  }



  return (
    <div>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Bootstrap CSS */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
  <link rel="stylesheet" href="style.css" />
  <title>Juragan Buah</title>
  {/* container start */}
  <div className="container">
    <span>area pengiriman<br /><span className="jbdt">jabotabek</span></span>
    {/* <input type="search" placeholder="Search" style={{marginLeft: 259, paddingLeft:'10px'}} aria-label="Search" /> */}
    <a href="login" className="button">Login</a>
    <br />
    <br />
    <center>
      <img style={{width: 300, height: 200}} src="/logo.jpg" alt="logo" />
    </center>
    <br />
    <br />
    <div className="container-box">
      <div className="card">
        <img className="card-img-center" src="/naga.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Buah Naga</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.7.000</p>
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnNagaMinus}>-</button>
          <p className="card-text fw-bolder">{hargaNaga}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnNagaPlus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/Buah-Salak.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Salak pondo</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.15.000</p>
          {/* <Link href="/beli" ><a className="btn btn-primary">Beli</a></Link> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnSalakMinus}>-</button>
          <p className="card-text fw-bolder">{hargasalak}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnSalakplus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/klengkeng.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">klengkeng</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.35.000</p>
          {/* <p className="card-text">total = Rp.{total.toLocaleString()}</p> */}
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnklengkengkMinus}>-</button>
          <p className="card-text fw-bolder">{hargaklengkeng}</p>
          {/* <p className="card-text fw-bolder">{qty}</p> */}
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnKlengkenglus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/durian.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Durian</h5>
          <p className="card-text">@1</p>
          <p className="card-text">Rp.50.000</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btndurianminus}>-</button>
          <p className="card-text fw-bolder">{hargadurian}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btndurianplus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/jeruk.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Jeruk</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.8.000</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnjerukminus}>-</button>
          <p className="card-text fw-bolder">{hargajeruk}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnjerukplus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/manggis.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Manggis</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.12.000</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnmanggisminus}>-</button>
          <p className="card-text fw-bolder">{hargamanggis}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnmanggisplus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/anggur.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Anggur Merah</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.45.000</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnanggurminus}>-</button>
          <p className="card-text fw-bolder">{hargaanggur}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnanggurplus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img-center" src="/jambu kristal.jpeg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Jambu Kristal</h5>
          <p className="card-text">1kg</p>
          <p className="card-text">Rp.15.000</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <div style={{width: 180}} className="d-flex justify-content-between align-items-center">
          <button onClick={btnjambuminus}>-</button>
          <p className="card-text fw-bolder">{hargajambu}</p>
          {/* <a href="#" className="btn btn-primary">Beli</a> */}
          <button onClick={btnjambuplus}>+</button>
          </div>
        </div>
      </div>
      <div className="card">
        {/* <img className="card-img-center" src="/jambu kristal.jpeg" alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">Total Harga</h5>
          {/* <p className="card-text"></p> */}
          <p className="card-text">Rp. {totalHarga}</p>
          <a href="https://api.whatsapp.com/send?phone=6282232084714" className="btn btn-primary">BAYAR</a>
        </div>
      </div>
    </div>
  </div>
  {/* container end */}
  {/* Optional JavaScript; choose one of the two! */}
  {/* Option 1: Bootstrap Bundle with Popper */}
  {/* Option 2: Separate Popper and Bootstrap JS */}
  {/*
    
    
    */}
</div> 


  )
}