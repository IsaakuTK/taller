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
        this.addEventListeners();
    }
    dissconnectedCallback() {
        console.log("unmounted");
        // this.removeEventListeners();
    }
    //   removeEventListeners() {
    //     if()
    //     this.shadowRoot
    //       .querySelector("button")
    //       .removeEventListener("click", this.onButtonClicked);
    //   }
    addEventListeners() {
        if (this.shadowRoot)
            this.shadowRoot
                .querySelector("button");
        addEventListener("click", this.onButtonClicked);
    }
    onButtonClicked() {
        const currentValue = this.getAttribute("countlikes") || 0;
        this.setAttribute("countlikes", "countlikes" + 1);
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
                    
                        <section class="nd">
                        <img class="prof" src="${this.profile}">
                        <p class="us">${this.user}</p>
                        </section>   

                        <p class="ndd">${this.description}</p> 

                    </section>
                <img class="pimg" src="${this.image}">
                    <section class="elpp">  
                    <button class="b1"><img class="i1" src="https://icons.veryicon.com/png/o/miscellaneous/icon-pack/heart-140.png"></button> 
                    <p class="p1">${this.countlikes}</p>
                    <button><img class="i1" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png"></button>
                    <p class="p2">${this.countcomments}</p>
                    <button><img class="i1" src="https://static.thenounproject.com/png/3566328-200.png"></button>
                    <p class="p3">${this.countrepost}</p>
                    </section>
                </section>
                `;
        }
    }
}
customElements.define("my-post", Tpost);
export default Tpost;
