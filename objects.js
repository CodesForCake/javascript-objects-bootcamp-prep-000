var playlist={artist1:"song1", artist2:"song2"}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
}