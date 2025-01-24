import { ProductTypeImplementation } from "./Implementation";

/**
 * The Abstraction defines list views for different product types in a list
 * inside a webpage
 */
export abstract class ListItemAbstraction {
    protected contentType: ProductTypeImplementation;
    static tag: string;

    constructor(contentType: ProductTypeImplementation) {
        this.contentType = contentType;
    }

    abstract renderListItem(): string;
  }
  
/**
 * Let's Extend the Abstraction with the different views and independently
 * of the content types
 */
export class ListItemImageView extends ListItemAbstraction {
    static tag: string = 'ul';

    renderListItem(): string {
        return `<li>
            <span>${this.contentType.renderThumbnail()}
            ${this.contentType.renderLink()}</span>
            <span>${this.contentType.renderPrice()}</span>
            </li>`;
    }
}
  
export class ListItemTextView extends ListItemAbstraction {
    static tag: string = 'ul';

    renderListItem(): string {
    return `<li>
        <span>${this.contentType.renderTitle()} - ${this.contentType.renderDescription()}</span>
        <span>${this.contentType.renderPrice()}</span>
        </li>`;
    }
}

export class ListItemTableView extends ListItemAbstraction {
    static tag: string = 'table';

    renderListItem(): string {
        return `<tr>
            <td>${this.contentType.renderThumbnail()}</td>
            <td>${this.contentType.renderLink()}</td>
            <td>${this.contentType.renderPrice()}</td>
            </tr>`;
    }
}