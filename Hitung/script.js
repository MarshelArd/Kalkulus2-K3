import {
  dotProduct,
  angleBetweenVectors,
  kosinusA,
  kosinusB,
  kosinusC,
} from "./rumus.js";

const MQ = MathQuill.getInterface(2);

const vektor1I = document.getElementById("vektor1I");
const vektor1J = document.getElementById("vektor1J");
const vektor1K = document.getElementById("vektor1K");

const vektor2I = document.getElementById("vektor2I");
const vektor2J = document.getElementById("vektor2J");
const vektor2K = document.getElementById("vektor2K");

const hitungBtn = document.getElementById("hitungBtn");

const hasilKali = document.getElementById("perkalianVektor");
const hasilSudut = document.getElementById("sudutVektor");
const v1cosA = document.getElementById("v1cosA");
const v1cosB = document.getElementById("v1cosB");
const v1cosC = document.getElementById("v1cosC");

const v2cosA = document.getElementById("v2cosA");
const v2cosB = document.getElementById("v2cosB");
const v2cosC = document.getElementById("v2cosC");

const clearInputBtn = document.getElementById("clrInputBtn");

let data = { vector1: [], vector2: [] };
let hasil = null;

clearInputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  vektor1I.value = "";
  vektor1J.value = "";
  vektor1K.value = "";
  vektor2I.value = "";
  vektor2J.value = "";
  vektor2K.value = "";
});

hitungBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    vektor1I.value === "" ||
    vektor1J.value === "" ||
    vektor2I.value === "" ||
    vektor2J.value === ""
  )
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      color : "white",
      background : "#091A2B",
      text: "Input minimal vektor 2 dimensi di kedua vektor!",
    });
  vektor1K.value === ""
    ? (data.vector1 = [vektor1I.value, vektor1J.value])
    : (data.vector1 = [vektor1I.value, vektor1J.value, vektor1K.value]);
  vektor2K.value === ""
    ? (data.vector2 = [vektor2I.value, vektor2J.value])
    : (data.vector2 = [vektor2I.value, vektor2J.value, vektor2K.value]);
  if (data.vector1.length !== data.vector2.length) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      color : "white",
      background : "#091A2B",
      text: "Jenis vektor harus sama (2 atau 3 dimensi saja)!",
    });
  }
  //   end inputing data

  // processing data
  console.log(hasil);
  data.vector1?.length === 3
    ? (hasil = {
        sudutVektor: angleBetweenVectors(data.vector1, data.vector2),
        perkalianVektor: dotProduct(data.vector1, data.vector2),
        cosinusArah: {
          vektor1: {
            cosa: kosinusA(data.vector1),
            cosb: kosinusB(data.vector1),
            cosc: kosinusC(data.vector1),
          },
          vektor2: {
            cosa: kosinusA(data.vector2),
            cosb: kosinusB(data.vector2),
            cosc: kosinusC(data.vector2),
          },
        },
      })
    : (hasil = {
        sudutVektor: angleBetweenVectors(data.vector1, data.vector2),
        perkalianVektor: dotProduct(data.vector1, data.vector2),
        cosinusArah: {
          vektor1: {
            cosa: kosinusA(data.vector1),
            cosb: kosinusB(data.vector1),
            cosc: null,
          },
          vektor2: {
            cosa: kosinusA(data.vector2),
            cosb: kosinusB(data.vector2),
            cosc: null,
          },
        },
      });

  const calculated = () => {
    hasilKali.textContent = hasil.perkalianVektor;
    hasilSudut.textContent = `${hasil.sudutVektor}°`;
    v1cosA.textContent = hasil.cosinusArah.vektor1.cosa;
    v1cosB.textContent = hasil.cosinusArah.vektor1.cosb;
    hasil.cosinusArah.vektor1.cosc === null
      ? (v1cosC.textContent = "-")
      : (v1cosC.textContent = hasil.cosinusArah.vektor1.cosc);

    v2cosA.textContent = hasil.cosinusArah.vektor2.cosa;
    v2cosB.textContent = hasil.cosinusArah.vektor2.cosb;
    hasil.cosinusArah.vektor2.cosc === null
      ? (v2cosC.textContent = "-")
      : (v2cosC.textContent = hasil.cosinusArah.vektor2.cosc);
  };

  hasil ? calculated() : null;

  MQ.StaticMath(hasilKali);
  MQ.StaticMath(hasilSudut);
  MQ.StaticMath(v1cosA);
  MQ.StaticMath(v1cosB);
  MQ.StaticMath(v1cosC);
  MQ.StaticMath(v2cosA);
  MQ.StaticMath(v2cosB);
  MQ.StaticMath(v2cosC);

  console.log(hasil);
});

// end of input
