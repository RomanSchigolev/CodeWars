function openOrSenior(data){
  return data.map(item => {
    if (item[0] >= 55 && item[1] > 7) {return 'Senior';}
    else {return 'Open';}
  })
}
openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);