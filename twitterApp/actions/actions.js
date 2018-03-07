export function addTweet(username, handle, message, date) {
  return {
    type: 'ADD_TWEET',
    username,
    handle,
    message,
    date
  }
}
