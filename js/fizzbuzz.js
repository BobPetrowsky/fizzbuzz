function fizzbuzz(n) {
  for (i = 1; i < n; i++) {
    if (i % 15 == 0) {
      $('#output').append('<li>fizzbuzz</li>');
    } else if (i % 5 == 0) {
      $('#output').append('<li>buzz</li>');
    } else if (i % 3 == 0) {
      $('#output').append('<li>fizz</li>');
    } else {
      $('#output').append('<li>' + i + '</li>');
    }
  }
}
