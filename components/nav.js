class ShelfieNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="container nav-content">
                    <p class="nav-app-name">Shel<span>fie</span></p>
                    <div class="nav-actions">
                        <a class="nav-button active" id="nav-search" href="index.html">Search</a>
                        <a class="nav-button" id="nav-saved" href="saved-page.html">Saved</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('shelfie-nav', ShelfieNav);