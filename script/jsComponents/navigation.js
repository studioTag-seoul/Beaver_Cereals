export class Navigation extends HTMLElement {
  connectedCallback() {
    // const navigation = document.querySelector("#navigation");
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.appendChild(navigation.content.cloneNode(true));
    this.shadowRoot.innerHTML = `\
    <nav>
      <ul class="nav">
        <li class="navList">
          <a class="navAnchor" href="#">SHOP</a>
        </li>
        <li class="navList">
          <a class="navAnchor" href="#">ABOUT</a>
        </li>
        <li class="navList">
          <a class="navAnchor" href="#">
            <img
              id="logo"
              src="../../asset - Beaver Cereals/Images/Beaver Cereals Logo.png"
              alt="Logo"
            />
          </a>
        </li>
        <li class="navList">
          <a class="navAnchor" href="#">CART</a>
        </li>
        <li class="navList">
          <a class="navAnchor" href="#">LOG IN</a>
        </li>
      </ul>
    </nav>
    <link rel="stylesheet" href="../../css/styles.css" />`;
  }
}

customElements.define("nav-component", Navigation);
