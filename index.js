function juftSonlar(current) {
  if (current > 100) return;

  if (current % 2 === 0) {
    console.log(current);
  }

  juftSonlar(current + 1);
}

juftSonlar(0);

