function DNAStrand(dna){
  var obj = {"A":"T","T":"A","C":"G","G":"C"}
  return dna.replace(/[ATCG]/g,x => obj[x])
}

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
