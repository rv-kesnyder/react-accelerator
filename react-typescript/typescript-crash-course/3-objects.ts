// A sample object
const profile = {
  name1: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// To destructure out different values and give them types, it's the same process as annotating a variable.
// const { age, name1 } = profile
// Becomes:
// const { age, name1 }: { age: number; name1: string } = profile
// Just define your destructured values in a similar fashion
const { age, name1 }: { age: number; name1: string } = profile;

// To destructure out something a little more complex, you still destructure and then define what you're destructuring
// const { coords: { lat, lng } } = profile
// Becomes:
// const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile
// Notice how the definition values mirror the destructured values.
// Formatted:
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

// Had the initial object been an Object Literal, we would have given it type like this:
let profile2: {
  name1: string;
  age: number;
  coords: { lat: number; lng: number };
  setAge: (age: number) => void;
} = {
  name1: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};
