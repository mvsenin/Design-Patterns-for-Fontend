/**
* The Implementation defines the interface for all the product types
*/
export interface ProductTypeImplementation {
    renderTitle(): string;
    renderDescription(): string;
    renderThumbnail(): string;
    renderLink(): string;
    renderPrice(): string;
}

export class VideoProduct implements ProductTypeImplementation {
    protected title: string;
    protected description: string;
    protected screenSize: string;
    protected imageUrl: string;
    protected url: string;
    protected price: string;

    constructor(title: string, description: string, screenSize: string, imageUrl: string, url: string, price: string) {
        this.title = title;
        this.description = description;
        this.screenSize = screenSize;
        this.imageUrl = imageUrl;
        this.url = url;
        this.price = price;

    }

    renderTitle(): string {
        return `<i class="material-icons">tv</i> ${this.title} - ${this.screenSize}`;
    }
    renderDescription(): string {
        return `${this.description}`;
    }
    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }
    renderLink(): string {
        return `<a href='${this.url}'>${this.title} - ${this.screenSize}</a>`;
    }
    renderPrice(): string {
        return `${this.price}`;
    }
}

export class AudioProduct implements ProductTypeImplementation {
    protected title: string;
    protected description: string;
    protected form: string;
    protected imageUrl: string;
    protected url: string;
    protected price: string;

    constructor(title: string, description: string, form: string, imageUrl: string, url: string, price: string) {
        this.title = title;
        this.description = description;
        this.form = form;
        this.imageUrl = imageUrl;
        this.url = url;
        this.price = price;
    }

    renderTitle(): string {
        return `<i class="material-icons">headset</i> ${this.title} - ${this.form}`;
    }
    renderDescription(): string {
        return `${this.description}`;
    }
    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }
    renderLink(): string {
        return `<a href='${this.url}'>${this.title} - ${this.form}</a>`;
    }
    renderPrice(): string {
        return `${this.price}`;
    }
}

export class ComputerProduct implements ProductTypeImplementation {
    protected title: string;
    protected description: string;
    protected cpu: string;
    protected imageUrl: string;
    protected url: string;
    protected price: string;

    constructor(title: string, description: string, cpu: string, imageUrl: string, url: string, price: string) {
        this.title = title;
        this.description = description;
        this.cpu = cpu;
        this.imageUrl = imageUrl;
        this.url = url;
        this.price = price;
    }

    renderTitle(): string {
        return `<i class="material-icons">laptop</i> ${this.title} - ${this.cpu}`;
    }
    renderDescription(): string {
        return `${this.description}`;
    }
    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }
    renderLink(): string {
        return `<a href='${this.url}'>${this.title} - ${this.cpu}</a>`;
    }
    renderPrice(): string {
        return `${this.price}`;
    }
}

export class WatchProduct implements ProductTypeImplementation {
    protected title: string;
    protected type: string;
    protected imageUrl: string;
    protected url: string;
    protected price: string;

    constructor(title: string, type: string, imageUrl: string, url: string, price: string) {
        this.title = title;
        this.type = type;
        this.imageUrl = imageUrl;
        this.url = url;
        this.price = price;
    }

    renderTitle(): string {
        return `<i class="material-icons">watch</i> ${this.title}`;
    }
    renderDescription(): string {
        return `${this.type}`;
    }
    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }
    renderLink(): string {
        return `<a href='${this.url}'>${this.title} - ${this.type}</a>`;
    }
    renderPrice(): string {
        return `${this.price}`;
    }
}

export class PeripheralProduct implements ProductTypeImplementation {
    protected title: string;
    protected category: string;
    protected imageUrl: string;
    protected url: string;
    protected price: string;

    constructor(title: string, category: string, imageUrl: string, url: string, price: string) {
        this.title = title;
        this.category = category;
        this.imageUrl = imageUrl;
        this.url = url;
        this.price = price;
    }

    renderTitle(): string {
        return `<i class="material-icons">keyboard</i> ${this.title}`;
    }
    renderDescription(): string {
        return `${this.category}`;
    }
    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }
    renderLink(): string {
        return `<a href='${this.url}'>${this.title}</a>`;
    }
    renderPrice(): string {
        return `${this.price}`;
    }
}

export const sampleContent = [
    new VideoProduct(
        'SmartTV',
        'Modern TV with smart functions',
        '45"',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=TV',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=TV',
        '30000 ₽'
    ),
    new AudioProduct(
        'Headset',
        'Bluetooth',
        'Wireless',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=BT Headset',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=BT Headset',
        '1000 ₽'
    ),
    new ComputerProduct(
        'IBM PC',
        'Very fast computer',
        'Xeon',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=IBM PC',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=IBM PC',
        '50000 ₽'
    ),
    new WatchProduct(
        'Watch',
        'Sport',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=Watch',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=Watch',
        '15000 ₽'
    ),
    new PeripheralProduct(
        'Keyboard',
        'Wireless',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=Keyboard',
        'https://placehold.co/50/EEE/31343C?font=montserrat&text=Keyboard',
        '1500 ₽'
    ),
];