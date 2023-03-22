export enum Attribute {
    "profile" = "profile",
    "user" = "user",
    "description" = "description",
    "image" = "image",
    "countlikes" = "countlikes",
    "countcomments" = "countcomments",
    "countrepost" = "countrepost"
}

class Tpost extends HTMLElement{
    profile?: string;
    user?: string;
    description?: string;
    image?: string;
    countlikes?: number;
    countcomments?: number;
    countrepost?: number;

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
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

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
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

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=`
                <link rel="stylesheet" href="./app/components/tpost/tpost.css">
                <section>
                    <section>
                    <img src="${this.profile}">
                        <section>
                        <p>${this.user}</p>
                        <p>${this.description}</p>
                        </section>    
                    </section>
                <img src="${this.image}">
                    <section>
                    <button></button>
                    <p>${this.countlikes}</p>
                    <button></button>
                    <p>${this.countcomments}</p>
                    <button></button>
                    <p>${this.countrepost}</p>
                    </section>
                </section>
                `;
            }
        }
}
customElements.define("my-post", Tpost);
export default Tpost;