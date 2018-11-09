const text = 'A simple typing effect application'
let i = 0

const typing = ()=> {
  if (i < text.length) {
    document.getElementById('app').innerHTML += text.charAt(i)
    i++;
  } else if ( i = text.length) {
    document.getElementById('app').innerHTML = ''
    i = 0
  }
  setTimeout(typing,100)
}

typing();
