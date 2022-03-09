// algoritm
// create func markFavorites that use recurseve

// input: object, array
// return: object
export const markFavorites = (tree, favorites) => {
  return {
    ...tree,
    isFavorite: favorites.includes(tree.id),
    nodes: tree.nodes.map(item => markFavorites(item, favorites)),
  };
};
