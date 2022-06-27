function areYouPlayingBanjo(name) {
  const caps = name.toUpperCase()
  if ( caps.charAt(0) == 'R'){
  return `${name} plays banjo`
} else {
  return `${name} does not play banjo`
}
}