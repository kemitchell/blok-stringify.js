var isArray = require('is-array')
var isObject = require('is-object')

function quote(argument) {
  return JSON.stringify(argument) }

function list(start, values, end) {
  return ( start + values.join(',') + end ) }

function isObject(argument) {
  return ( typeof argument === 'object' && argument !== null ) }

function stringify(argument) {
  if (typeof argument === 'string') {
    return quote(argument) }
   else if (isArray(argument)) {
     return list('[', argument.map(stringify), ']') }
   else if (isObject(argument)) {
     return list(
       '{',
       Object.keys(argument)
         .sort()
         .map(function(name) {
           return quote(name) + ':' + stringify(argument[name]) }),
      '}') }
  else {
    throw new TypeError() } }

function blokStringify(argument) {
  if (isObject(argument)) {
    return stringify(argument) }
  else {
    throw new TypeError() } }

module.exports = blokStringify
