export default [
  {
    id: "a",
    parentIds: []
  },
  {
    id: "b",
    parentIds: []
  },
  {
    id: "c",
    parentIds: []
  },
  {
    id: "d",
    parentIds: ["a", "b"]
  },
  {
    id: "e",
    parentIds: ["b", "c"]
  },
  {
    id: "f",
    parentIds: ["d", "e"]
  }
];
