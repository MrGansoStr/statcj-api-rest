
const SearchComments = (ArrToSearch, Data) => {
  let FoundComments = [];
  for(let i = 0; i < ArrToSearch.length; i++) {
    for(let j = 0; j < Data.length; j++) {
      if(ArrToSearch[i] === Data[j].idComment) {
        FoundComments.push(Data[j]);
      }
    }
  }
  //console.log("Comentarios Encontrados -> ", FoundComments);
  return FoundComments;
}

const SearchIdCommentToHide = (Data) => {
  let ArrayIds = [];
  Data.forEach(e => {
    if(e?.childComments?.length != 0) {
      for(let i = 0; i < e.childComments.length; i++) {
        ArrayIds.push(e.childComments[i]);
      }
    }
  })
  return ArrayIds;
}


const TransformData = (Data = []) => {
  let IdToHide = SearchIdCommentToHide(Data)
  let TransformedData = [];
  for(let i = Data.length - 1; i >= 0; i--) {
    if(Data[i].childComments?.length != 0) {
      Data[i].Comments = SearchComments(Data[i].childComments, Data);
    }
  }
  TransformedData = Data.filter(e => !IdToHide.includes(e.idComment))
  return TransformedData;
}


module.exports = TransformData;