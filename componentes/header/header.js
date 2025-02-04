function header(){
    let header = document.createElement(`header`);
    header.className = "div-header";

    let logo = document.createElement(`img`);
    logo.src = "https://1000marcas.net/wp-content/uploads/2020/01/Lamborghini-Logo-tumb.png";
    logo.alt = "Logo";
    header.appendChild(logo);

    let h1 = document.createElement(`h1`);
    h1.textContent = "Todo-List";
    header.appendChild(h1);

    return header;
}

export { header }