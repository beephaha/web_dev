function readNumber() {
    let num;

    while (!isFinite(num)) {
        num = prompt("Number", 0);
    }

    if (num == null || num == '') return null;

    return +num;
  }
  
  alert(`Read: ${readNumber()}`);