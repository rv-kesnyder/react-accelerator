// Tuples are arrays that have a specific order
// For the interface "drink", we can make tuples as follows:
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};
const pepsi = ["brown", true, 40];
// To annotate a tuple, you define the type in the order it appears:
const sprite: [string, boolean, number] = ["clear", true, 35];

// To alleviate the pain of having to annotate a 10+ item tuple, you can also create what's called a 'type alias':
type Drink = [string, boolean, number];
// Now we can substitute our type alias wherever it would apply:
const drPepper: Drink = ["brown", true, 45];
