import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Login() {
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
    <br />
    <br />
    <center>
        <Link href="/">
      <img style={{width: 300, cursor: "pointer", height: 200}} src="/logo.jpg" alt="logo" />
        </Link>
    </center>
    <br />
    <br />
    <div className="container-login">
        <div className="konten-login">
            <h1>DAFTAR</h1>
            <div className="isi-login">
            <label style={{fontSize: 20, fontWeight: "bold"}} htmlFor="username">Email</label>
            <input type="text" placeholder="Email" />
            <label style={{fontSize: 20, fontWeight: "bold"}} htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />
            <label style={{fontSize: 20, fontWeight: "bold"}} htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <label style={{fontSize: 20, fontWeight: "bold"}} htmlFor="username">Alamat</label>
            <input type="text" placeholder="Alamat" />
            </div>
            <input type="submit" value="DAFTAR" />
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