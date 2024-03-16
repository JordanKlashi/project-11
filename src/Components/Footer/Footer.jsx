function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
        <p className="footer-text">Copyright {year} Argent Bank</p>
        </footer>
    )
}

export default Footer