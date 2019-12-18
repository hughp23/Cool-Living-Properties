import "firebase/firestore";
import "firebase/storage";
import * as firebase from "firebase/app";

const { firestore } = require("./config.js");

const db = firebase.firestore();

const getHomePageContent = async (language, section, subSection) => {
  const translation = {
    navBar: {},
    titleSection: {},
    ourServices: {},
    ourTeam: {},
    aboutUs: {},
    contactUs: {}
  };
  await db
    .collection("Languages")
    .doc(language)
    .collection("NavBar")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      // console.log(snapshot, "snapshot");
      // const text = snapshot.data();
      const data = snapshot.docs.map(doc => {
        // console.log(doc.data(), "doc data");
        return doc.data();
      });
      console.log(data, "data in function");
      translation.navBar = data;
    });
  await db
    .collection("Languages")
    .doc(language)
    .collection("TitleSection")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      // console.log(snapshot, "snapshot");
      // const text = snapshot.data();
      const data = snapshot.docs.map(doc => {
        // console.log(doc.data(), "doc data");
        return doc.data();
      });
      console.log(data, "data in function");
      translation.titleSection = data;
    });
  await db
    .collection("Languages")
    .doc(language)
    .collection("OurServices")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      // console.log(snapshot, "snapshot");
      // const text = snapshot.data();
      const data = snapshot.docs.map(doc => {
        // console.log(doc.data(), "doc data");
        return doc.data();
      });
      console.log(data, "data in function");
      translation.ourServices = data;
    });
  await db
    .collection("Languages")
    .doc(language)
    .collection("OurTeam")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      // console.log(snapshot, "snapshot");
      // const text = snapshot.data();
      const data = snapshot.docs.map(doc => {
        // console.log(doc.data(), "doc data");
        return doc.data();
      });
      console.log(data, "data in function");
      translation.ourTeam = data;
    });
  await db
    .collection("Languages")
    .doc(language)
    .collection("AboutUs")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      // console.log(snapshot, "snapshot");
      // const text = snapshot.data();
      const data = snapshot.docs.map(doc => {
        // console.log(doc.data(), "doc data");
        return doc.data();
      });
      console.log(data, "data in function");
      translation.aboutUs = data;
    });
  await db
    .collection("Languages")
    .doc(language)
    .collection("ContactUs")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      // console.log(snapshot, "snapshot");
      // const text = snapshot.data();
      const data = snapshot.docs.map(doc => {
        // console.log(doc.data(), "doc data");
        return doc.data();
      });
      console.log(data, "data in function");
      translation.contactUs = data;
    });
  console.log(translation, "translation");

  return translation;
};

const getTitleSectionContent = (language, section, subSection) =>
  db
    .collection("Languages")
    .doc(language)
    .collection("TitleSection")
    .get()
    .then(querySnapshot => {
      if (querySnapshot.empty) {
        return [];
      }
      // const text = doc.collection
      // console.log(querySnapshot, "text");
      querySnapshot.docs.forEach(doc => {
        console.log(doc.data(), "doc data");
      });
      return [];
    });

const testFunction = () => {
  console.log(firebase, "firebase");
  console.log(db, "in function");
};

export { getHomePageContent, getTitleSectionContent, testFunction };
