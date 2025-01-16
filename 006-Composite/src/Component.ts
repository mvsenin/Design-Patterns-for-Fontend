/*
    The Component is an abstraction (an nterface) that defines all the methods
    or common operations for both Leaf and Composite classes
*/

export default interface Component {
    // Common method for output
    print(): string[];
  
    // Common method for getting size of a component
    getSize(): number;
}