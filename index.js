function quote(argument) {
  return ( '"' + argument.replace(/"/g, '\\"') + '"' ) }

function list(start, values, end) {
  return ( start + values.join(',') + end ) }

function blokStringify(argument) {
  if (typeof argument === 'string') {
    return quote(argument) }
   else if (Array.isArray(argument)) {
     return list('[', argument.map(blokStringify), ']') }
   else if (typeof argument === 'object' && argument !== null) {
     return list(
       '{',
       Object.keys(argument)
         .sort()
         .map(function(name) {
           return quote(name) + ':' + blokStringify(argument[name]) }),
      '}') }
  else {
    throw new TypeError() } }

module.exports = blokStringify
