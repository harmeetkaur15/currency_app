
function display () {
  function createNode (element) {
    return document.createElement(element)
  }

  function append (parent, el) {
    return parent.appendChild(el)
  }
  let ls = localStorage
  ls.setItem('base', 'CAD')

  let first = document.getElementById('one').value.toUpperCase()
  let second = document.getElementById('two').value.toUpperCase()
  let amount = document.getElementById('amount').value
  const url = 'https://api.fixer.io/latest?base='
  fetch(`${url}${first}`)
  .then((res) => res.json())
   .then((data) => {
     let q = data.rates[`${second}`]
     let p = q * amount
     let p1 = createNode('p')
     p1.innerHTML = ` ${p} ${second}`
     document.getElementById('display').append(p1)
   })
  .catch((e) => console.log(e, 'Something went wrong.'))
}
