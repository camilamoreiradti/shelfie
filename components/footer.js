class ShelfieFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p class="footer-text">Powered by Google Books API</p>
            </footer>
        `;
    }
}

customElements.define('shelfie-footer', ShelfieFooter);