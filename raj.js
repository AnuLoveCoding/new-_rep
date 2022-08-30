// console.log("Hello Anurag!")

let num = 6
for (let n = 1; n <= 6; n++) {
  let bag = ""
  for (let i = 1; i <= 6; i++) {
    if (i == 1 || n == 1 || n == num) {
      bag = bag + "*" + ""
    } else {
      bag = bag + " "
    }
  }
  console.log(bag)
}