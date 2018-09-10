// ---------------------- LV 0 --------------------

// function numberOrNot(number){
//   return new Promise(function (resolve,reject){
//     if (typeof number === "number"){
//       resolve(number)
//     }
//     else {
//       reject(number)
//     }
//   })
// }

// numberOrNot(2)
//   .then(response => console.log(`${response} is number`))
//   .catch(error => console.log(`${error} is not a number`))

// numberOrNot(555)
//   .then(response => console.log(`${response} is number`))
//   .catch(error => console.log(`${error} is not a number`))

// numberOrNot([2, 1, 3])
//   .then(response => console.log(`${response} is number`))
//   .catch(error => console.log(`${error} is not a number`))

// ---------------- LV 1 ------------------------
// function numberOrNot(number) {
//   if (typeof number === "number") {
//     return Promise.resolve(number)
//   } else {
//     return Promise.reject(number)
//   }
// }


// numberOrNot(2)
//   .then(response => console.log(`${response} is number`))
//   .catch(error => console.log(`${error} is not a number`))

// numberOrNot(555)
//   .then(response => console.log(`${response} is number`))
//   .catch(error => console.log(`${error} is not a number`))

// numberOrNot([2, 1, 3])
//   .then(response => console.log(`${response} is number`))
//   .catch(error => console.log(`${error} is not a number`))

// ---------------------------- LV 2 ---------------
// function checkVariableType(input) {
//   if (typeof input === "number") {
//     return Promise.resolve(input)
//   } else if (typeof input === "string") {
//     return Promise.resolve(input)
//   } else if (typeof input === "boolean") {
//     return Promise.resolve(input)
//   } else {
//     return Promise.reject(input)
//   }
// }

// checkVariableType("abc")
//   .then(res => console.log(`${res} is a string`))
//   .catch(err => console.log(`${err} is not a string`))

// checkVariableType(2)
//   .then(res => console.log(`${res} is a number`))
//   .catch(err => console.log(`${err} is not a number`))

// checkVariableType(true)
//   .then(res => console.log(`${res} is a boolean`))
//   .catch(err => console.log(`${err} is not a boolean`))

// checkVariableType()
//   .then(res => console.log(`${res} is a empty`))
//   .catch(err => console.log(`please input a variabel`))


// ------------------- LV 3 ----------------------
const numberValidation = (input) => {
  if (typeof input === "number") {
    return Promise.resolve(input)
  } else {
    return Promise.reject(Error("Input is not a number"))
  }
}

const multipleByTwo = (result) => {
  return Promise.resolve(result * 2)
}
const multipleByThree = (result) => {
  return Promise.resolve(result * 3)
}
// numberValidation(2)
// .then(multipleByTwo)
// .then(multipleByTwo)
// .then(multipleByThree)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// numberValidation("")
// .then(multipleByTwo)
// .then(multipleByTwo)
// .then(multipleByThree)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// ----------------------- LV 4 -------------------
// const fn1 = async () => {
//   console.log("before promise")
//   await numberValidation(2)
//   .then(multipleByTwo)
//   .then(multipleByTwo)
//   .then(multipleByThree)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
//   console.log("after promise")
// }
// fn1()

// ----------------------- LV 5 ---------------------
const fn2 = async () => {
  let result = await numberValidation(2)
  .then(multipleByTwo)
  .then(multipleByTwo)
  .then(multipleByThree)
  .then(res => { return res })
  .catch(err => { return err })
  console.log(result)
}
fn2()