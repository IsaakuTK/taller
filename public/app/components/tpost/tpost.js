export var Attribute;
(function (Attribute) {
    Attribute["profile"] = "profile";
    Attribute["user"] = "user";
    Attribute["description"] = "description";
    Attribute["image"] = "image";
    Attribute["countlikes"] = "countlikes";
    Attribute["countcomments"] = "countcomments";
    Attribute["countrepost"] = "countrepost";
})(Attribute || (Attribute = {}));
class Tpost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            profile: null,
            user: null,
            description: null,
            image: null,
            countlikes: null,
            countcomments: null,
            countrepost: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attribute.countlikes:
                this.countlikes = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.countcomments:
                this.countcomments = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.countrepost:
                this.countrepost = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/tpost/tpost.css"> 
                <section class="all">
                    <section>
                    <img class="prof" src="${this.profile}">
                        <section>
                        <p>${this.user}</p>
                        <p>${this.description}</p>
                        </section>    
                    </section>
                <img src="${this.image}">
                    <section>  
                    <button class="b1"></button>
                    <p>${this.countlikes}</p>
                    <button><img src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png"></button>
                    <p>${this.countcomments}</p>
                    <button><img src="https://static.thenounproject.com/png/3566328-200.png"></button>
                    <p>${this.countrepost}</p>
                    </section>
                </section>
                `;
        }
    }
}
customElements.define("my-post", Tpost);
export default Tpost;
