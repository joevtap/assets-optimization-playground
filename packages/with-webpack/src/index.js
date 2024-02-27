const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const main = () => {
  const wrapper = document.querySelector("#wrapper");

  const result = fibonacci(10);
  wrapper.innerHTML = `Fibonacci(10) = ${result}`;
};

main();
