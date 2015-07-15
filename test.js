var stringify = require('./')

require('tape')(function(t) {
  t.equal(stringify({}), '{}', 'empty object')

  t.equal(stringify({ a: '1' }), '{"a":"1"}', 'simple object')

  t.throws(
    function() { stringify("") },
    TypeError,
    'rejects plain string')

  t.throws(
    function() { stringify({ a: false }) },
    TypeError,
    'rejects boolean value')

  t.throws(
    function() { stringify({ a: 1 }) },
    TypeError,
    'rejects numeric')

  t.throws(
    function() { stringify({a: Infinity }) },
    TypeError,
    'rejects Infinity')

  t.throws(
    function() { stringify({ a: null }) },
    TypeError,
    'rejects null')

  t.throws(
    function() { stringify({ a: NaN }) },
    TypeError,
    'rejects NaN')

  t.end() })
