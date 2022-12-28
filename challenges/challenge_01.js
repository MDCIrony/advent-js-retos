function wrapping(gifts){
    //Use map for generate the output list
    const wrapps = gifts.map(function(element) {
        var top_and_bot = '*' + '*'.repeat(element.length) + '*'
        let middle = `*${element}*`
        return `${top_and_bot}\n${middle}\n${top_and_bot}`
    });

    return wrapps
}

//
// ─── CHALLENGE 01 ────────────────────────────────────────────────────────────────
//

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
