import { types } from "mobx-state-tree";

// Define a model for managing like and dislike counts
export const LikeDislikeModel = types
  .model("LikeDislikeModel", {
    likes: types.optional(types.number, 0), // Initial like count
    dislikes: types.optional(types.number, 0), // Initial dislike count
  })
  .actions((self) => ({
    // Action to increment the like count
    incrementLikes() {
      self.likes += 1;
    },
    // Action to increment the dislike count
    incrementDislikes() {
      self.dislikes += 1;
    },
    // Action to decrement the like count
    decrementLikes() {
      if (self.likes > 0) self.likes -= 1;
    },
    // Action to decrement the dislike count
    decrementDislikes() {
      if (self.dislikes > 0) self.dislikes -= 1;
    },
  }));


