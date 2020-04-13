import "firebase/firestore";
import "firebase/storage";
import * as firebase from "firebase/app";
import * as functions from "./functions";

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
    })
    .catch(err => {
      return err;
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
    })
    .catch(err => {
      return err;
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
    })
    .catch(err => {
      return err;
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
    })
    .catch(err => {
      return err;
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
    })
    .catch(err => {
      return err;
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
      console.log(data, "contact us section")
      translation.contactUs = data;
    })
    .catch(err => {
      return err;
    });

  return translation;
};

const addCustomerQuery = async (
  firstName,
  lastName,
  email,
  phone,
  subj,
  body
) => {
  const newId = await getNewCustomerQueryId();
  await addNewQueryId(newId);
  console.log(newId, "newId");
  await db
    .collection("CustomerQuery")
    .doc(newId)
    .set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      querySubject: subj,
      query: body,
      createdAt: new Date(),
      updatedAt: null
    })
    .catch(err => {
      return err;
    });
  return newId;
};

const getNewCustomerQueryId = async () => {
  let queryID = "";
  await db
    .collection("CustomerID")
    .doc("IDs")
    .get()
    .then(doc => {
      let data = "";
      if (doc.exists) {
        data = doc.data();
      }
      const newIdNumber = data.IDList.length + 1;
      const newId = `QR${newIdNumber.toLocaleString("en", {
        minimumIntegerDigits: 6,
        minimumFractionDigits: 0,
        useGrouping: false
      })}`;
      queryID = newId;
    });
  return queryID;
};

const addNewQueryId = async queryID => {
  await db
    .collection("CustomerID")
    .doc("IDs")
    .update({
      IDList: firebase.firestore.FieldValue.arrayUnion({
        queryID: queryID,
        createdAt: new Date()
      }),
      lastUpdated: new Date()
    });
};

const addAuditLog = async () => {};

export { getHomePageContent, addCustomerQuery };
