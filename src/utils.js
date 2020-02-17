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
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
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
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
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
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
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
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
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
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
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
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
      translation.contactUs = data;
    });

  return translation;
};

export { getHomePageContent };
