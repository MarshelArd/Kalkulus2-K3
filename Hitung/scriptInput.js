import {
  dotProduct,
  angleBetweenVectors,
  kosinusA,
  kosinusB,
  kosinusC,
} from "./rumus.js";

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

let data = { vector1: [], vector2: [] };
let hasil = null;

hitungBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    vektor1I.value === "" ||
    vektor1J.value === "" ||
    vektor2I.value === "" ||
    vektor2J.value === ""
  )
    return alert("Input tidak boleh kosong");
  vektor1K.value === ""
    ? (data.vector1 = [vektor1I.value, vektor1J.value])
    : (data.vector1 = [vektor1I.value, vektor1J.value, vektor1K.value]);
  vektor2K.value === ""
    ? (data.vector2 = [vektor2I.value, vektor2J.value])
    : (data.vector2 = [vektor2I.value, vektor2J.value, vektor2K.value]);
  if (data.vector1.length !== data.vector2.length) {
    alert("Jumlah vektor harus sama");
    return null;
  }
  //   end inputing data

  // processing data

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
    hasilKali.innerText = hasil.perkalianVektor;
    hasilSudut.innerText = `${hasil.sudutVektor}°`;
    v1cosA.innerText = hasil.cosinusArah.vektor1.cosa;
    v1cosB.innerText = hasil.cosinusArah.vektor1.cosb;
    hasil.cosinusArah.vektor1.cosc === null
      ? (v1cosC.innerText = "-")
      : (v1cosC.innerText = hasil.cosinusArah.vektor1.cosc);

    v2cosA.innerText = hasil.cosinusArah.vektor2.cosa;
    v2cosB.innerText = hasil.cosinusArah.vektor2.cosb;
    hasil.cosinusArah.vektor2.cosc === null
      ? (v2cosC.innerText = "-")
      : (v2cosC.innerText = hasil.cosinusArah.vektor2.cosc);
  };

  hasil ? calculated() : null;

  console.log(hasil);
});

// end of input
