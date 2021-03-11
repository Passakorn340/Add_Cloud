<template>
  <b-container>
    <b-row align-h="center">
      <b-card border-variant="dark" id="bg">
        <b-row align-h="center">
          <h1 class="mt-1 mr-2">Food</h1>
        </b-row>
        <b-row align-h="center">
          <p class="mt-1 mr-2">Food Name :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-5 mr-2"
            v-model="name"
          ></b-form-input>
        </b-row>
        <b-row align-h="center" class="mt-3">
          <p class="mt-1 mr-2">ราคา :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-3 mr-2"
            v-model="price"
          ></b-form-input>
          <p class="mt-1 mr-2">บาท</p>
        </b-row>
        <b-row align-h="center">
          <p class="mt-1 mr-2">ความนิยม 3 เวลา(คน)</p>
        </b-row>
        <b-row align-h="center">
          <p class="mr-2">เช้า</p>
          <b-form-input
            class="col-5"
            v-model="morning"
            type="range"
            number
            min="0"
            max="100"
            step="1"
          ></b-form-input>
          <p class="text-monospace ml-2">
            {{ morning }}
          </p>
        </b-row>
        <b-row align-h="center" class="mt-2">
          <p class="mr-2">เที่ยง</p>
          <b-form-input
            class="col-5"
            v-model="noon"
            type="range"
            number
            min="0"
            max="100"
            step="1"
          ></b-form-input>
          <p class="text-monospace ml-2">
            {{ noon }}
          </p>
        </b-row>
        <b-row align-h="center" class="mt-2">
          <p class="mr-2">เย็น</p>
          <b-form-input
            class="col-5"
            v-model="evening"
            type="range"
            number
            min="0"
            max="100"
            step="1"
          ></b-form-input>
          <p class="text-monospace ml-2">
            {{ evening }}
          </p>
        </b-row>

        <b-row align-h="center" class="mt-3">
          <router-link to="/login">
            <b-button class="mr-2" variant="success" @click="addData"
              >Add Food</b-button
            >
          </router-link>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";

export default {
  data() {
    return {
      name: "",
      price: null,
      morning: 0,
      noon: 0,
      evening: 0,
    };
  },
  methods: {
    addData() {
      alert("Complete");
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        Name: this.name,
        Price: this.price,
        Morning: this.morning,
        Noon: this.noon,
        Evening: this.evening,
      };
      db.collection("MyForm")
        .doc("formdata")
        .set(data)
        .then(function () {
          console.log("Document successfully written! -> MyForm");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        txt: this.txt,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Document successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style>
#bg {
  background-color: rgb(252, 156, 121);
}
</style>