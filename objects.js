var playlist={artist1:"song1", artist2:"song2"}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistNamet]=songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
}