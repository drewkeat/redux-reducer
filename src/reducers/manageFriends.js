export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      let newFriend = action.friend
      return {friends: [...state.friends, newFriend]}
    case "REMOVE_FRIEND":
      let toRemove = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [...state.friends.slice(0, toRemove), ...state.friends.slice(toRemove + 1)]
      }
    default:
      return state
  }
}
