function superbowlWin(array) {
    const win = array.find(obj => obj.result === "W");
    return win ? win.year : undefined;
  }



const superbowls = [
    { year: 2022, result: "L" },
    { year: 2021, result: "W" },
    { year: 2020, result: "L" },
    
  ];
  
  console.log(superbowlWin(superbowls)); 