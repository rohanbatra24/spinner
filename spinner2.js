const clock = [ '|', '/', '-', '\\', '|', '/', '-', '\\', '|' ];
let timeout = 100;
for (let i = 0; i < clock.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r');
    process.stdout.write(clock[i]);
  }, 100 + i * 500);
}
