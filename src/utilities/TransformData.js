
const SearchComments = (ArrToSearch, Data) => {
  let FoundComments = [];
  for(let i = 0; i < ArrToSearch.length; i++) {
    for(let j = 0; j < Data.length; j++) {
      if(ArrToSearch[i] === Data[j].idComment) {
        FoundComments.push(Data[j]);
      }
    }
  }
  //console.log(FoundComments);
  return FoundComments;
}

const SearchIdCommentToHide = (Data) => {
  let ArrayIds = [];
  Data.forEach(e => {
    if(e?.childComments?.length != 0) {
      for(let i = 0; i < e.childComments?.length; i++) {
        ArrayIds.push(e.childComments[i]);
      }
    }
  })
  return ArrayIds;
}

const TransformData = (Data = []) => {
  let IdToHide = SearchIdCommentToHide(Data);
  let DataToTransform = [];
  //console.log("The data: ", Data);
  //console.log("Data to Transform ->", DataToTransform)
  for(let i = Data.length - 1; i >= 0; i--) {
    let ObjComment = Data[i];
    if(Data[i].childComments?.length != 0) {
      ObjComment.Comments = SearchComments(Data[i].childComments, Data); // dont move
      //console.log("Los comentarios hijos: ", ObjComment);
      DataToTransform.push({...Data[i], Comments: SearchComments(Data[i].childComments, Data)});
    }
    else{
      DataToTransform.push(Data[i]);
    }
  }
  const TransformedData = DataToTransform.filter(e => !IdToHide.includes(e.idComment));
  //console.log("TransformedData -> ", TransformedData);
  return TransformedData;
}

module.exports = TransformData;