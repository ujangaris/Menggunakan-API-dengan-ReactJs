# API : "Application Programing Interface"

    - interface : perantara disini maksudnya penghubung berbagai macam Platform

## Mengkonsumsi dan Menampilkan API dari fakestoreapi Menggunakan react-bootstrap

    Todo:
        1. install react-bootstrap
            npm install react-bootstrap bootstrap

            link: https://react-bootstrap.github.io/getting-started/introduction/

        2. kunjungi situs fakestoreapi
            link : https://fakestoreapi.com/
        3. Product.js
            - Menampilkan data dari fake api:fakestoreapi
            - menampilkan data didalam card dari react-bootstrap
        4.  App.js
            import dan memasang component Products

## Card Link

    Todo:
        1.  inisialisasi state untuk menampilkan data berdasarkan id
        2.  handle erroy key
        3.  buat props untuk hook(showMoreId, setShowMoreId)
        4.  Tambahkan Card.Link
            Bagian ini digunakan untuk menampilkan deskripsi produk dan
            memberikan tautan untuk membaca deskripsi selengkapnya atau membaca sedikitnya.
        5.  Untuk deskripsi produk, jika props.showMoreId bernilai sama dengan props.id,
            maka komponen akan menampilkan deskripsi lengkap (props.description). Jika tidak,
            maka hanya menampilkan 50 karakter dari deskripsi produk (props.description.substr(0, 50)).

            Tautan (Card.Link) yang berfungsi untuk membaca deskripsi selengkapnya atau sedikitnya,
            memiliki event handler onClick yang menjalankan fungsi.
            Fungsi ini mencegah default behavior dari tautan dengan memanggil e.preventDefault()
            dan mengubah nilai state showMoreId dengan memanggil props.setShowMoreId.
            Nilai props.setShowMoreId akan bernilai props.id jika props.showMoreId tidak bernilai sama dengan props.id,
            dan bernilai false jika sebaliknya.

            Text yang akan ditampilkan pada tautan akan bergantung pada nilai props.showMoreId
            yaitu, "Read Less" jika bernilai sama dengan props.id dan "Read More..." jika tidak.
