function mayorArray(array) {
    if (array.length === 0) {
      return null;
    } else if (array.length === 1) {
      return array[0];
    } else {
      let mayor = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
          mayor = array[i];
        }
      }
      let j = 0;
      while (j < array.length) {
        console.log(array[j]);
        j++;
      }
      let contadorImpares = 0;
      do {
        if (array[j] % 2 !== 0) {
          contadorImpares++;
        }
        j++;
      } while (j < array.length);
      return mayor;
    }
  }  