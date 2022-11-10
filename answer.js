function DNAStrand(dna){
  var obj = {"A":"T","T":"A","C":"G","G":"C"}
  return dna.replace(/[ATCG]/g,x => obj[x])
}
