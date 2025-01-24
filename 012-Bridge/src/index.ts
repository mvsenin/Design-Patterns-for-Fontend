import { ListItemAbstraction, ListItemImageView, ListItemTableView, ListItemTextView } from "./Abstraction";
import { sampleContent, ProductTypeImplementation } from "./Implementation";

// Getting UI elements
var output = document.getElementById('output') as HTMLElement;
var btnImageView = document.getElementById('image-view') as HTMLButtonElement;
var btnTextView = document.getElementById('text-view') as HTMLButtonElement;
var btnTableView = document.getElementById('table-view') as HTMLButtonElement;

// Generic methods of product list generation

// List & table view generation
function generatList<ListType extends ListItemAbstraction>(
  listType: new(i: ProductTypeImplementation) => ListType,
  content: ProductTypeImplementation[]
): string {

  // Rendering product list from the array of
  // `ProductTypeImplementation` instances
  var productList = content.map(i => new listType(i));

  // Render & return HTML with list of items
  var res = `<${listType.prototype.constructor.tag}>`;
  for (const productItem of productList) {
    res += productItem.renderListItem();
  }
  res += `</${listType.prototype.constructor.tag}>`;

  return res;
}

// Event processing
btnImageView.onclick = (event) => {
  output.innerHTML = generatList(ListItemImageView, sampleContent);
}

btnTextView.onclick = (event) => {
  output.innerHTML = generatList(ListItemTextView, sampleContent);
}

btnTableView.onclick = (event) => {
  output.innerHTML = generatList(ListItemTableView, sampleContent);
}