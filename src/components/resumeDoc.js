import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { FirebaseContext } from "../context/firebase";
import { useAuthListener } from "../hooks";
import { Loading } from "./loading";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
  },
  column1: {
    padding: 15,
    margin: "0 10",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    width: "70%",
  },
  column2: {
    padding: 15,
    margin: "0 10",
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  jobTitle: {
    display: "block",
    fontSize: 20,
    fontWeight: 500,
    color: "orange",
  },
  heading: {
    fontSize: 13,
    color: "#216DE0",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    margin: "15pt 10pt 0",
  },
  text: {
    fontSize: 15,
    lineHeight: 1.2,
    opacity: 0.85,
  },
  title: {
    fontSize: 17.5,
    fontWeight: 500,
    opacity: 1,
    display: "block",
  },
  subTitle: {
    fontSize: 15.5,
    display: "block",
  },
  date: {
    display: "block",
    fontSize: 13.5,
    fontStyle: "italic",
  },
  // list: {
  //   paddingLeft: "20pt"
  // },
  image: {
    width: 150,
    height: 150,
    alt: "Photo",
    borderRadius: "50%",
    opacity: 1,
  },
  listItem: {
    fontStyle: "italic",
    paddingLeft: "20pt",
    display: 'block'
  },
  block: {
    marginTop: 15
  }
});

const MyDocument = ({ data }) => {
  const { personalInfo, workExperience, education } = data;
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (user) {
      firebase
        .storage()
        .ref("users/" + user.uid + "/profile.jpg")
        .getDownloadURL()
        .then((imgUrl) => {
          setPhotoUrl(imgUrl);
        });
    }
  }, [firebase, user]);

  // address, skills, certs, languages
  // statement, education, experience, reference

  return data && photoUrl ? (
    <Document
      title={`${personalInfo.firstName + personalInfo.lastName}_resume`}
    >
      <Page style={styles.page}>
        <View style={styles.column1}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image style={styles.image} src={photoUrl} />
            <View>
              <Text style={styles.name}>
                {personalInfo.firstName + " " + personalInfo.lastName}
              </Text>
              <Text style={styles.jobTitle}>{personalInfo.jobTitle}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Professional Statement</Text>
            <Text style={styles.text}>{personalInfo.otherInfo}</Text>
          </View>
          {workExperience.length && (
            <View style={styles.section}>
              <Text style={styles.heading}>Work experience</Text>
              {workExperience.map((item, id) => (
                <View style={id ? styles.block : {}}>
                  <Text
                    style={styles.title}
                  >{`${item.jobTitle} - ${item.company}`}</Text>
                  <Text style={styles.subTitle}>
                    {item.city + " " + item.country}
                  </Text>
                  {item.month.end === "present" ||
                  item.year.end === "present" ? (
                    <Text
                      style={styles.date}
                    >{`${item.month.start} ${item.year.start} - present`}</Text>
                  ) : (
                    <Text
                      style={styles.date}
                    >{`${item.month.start} ${item.year.start} - ${item.month.end} ${item.year.end}`}</Text>
                  )}
                  <View style={styles.list}>
                    {Object.values(item.highlights).map((highlight, index) => (
                      <Text style={styles.listItem} key={`highligh- ${index + 1}`}>{`- ${highlight}`}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          )}
          {education.length && (
            <View style={styles.section}>
              <Text style={styles.heading}>Education</Text>
              {education.map((item, id) =>(
                <View style={id ? styles.block : {}}>
                  <Text 
                    style={styles.title}
                  >{item.institutionName}</Text>
                  <Text style={styles.subTitle}>{`${item.city}, ${item.country}`}</Text>
                  {item.month.end === "present" ||
                  item.year.end === "present" ? (
                    <Text
                      style={styles.date}
                    >{`${item.month.start} ${item.year.start} - present`}</Text>
                  ) : (
                    <Text
                      style={styles.date}
                    >{`${item.month.start} ${item.year.start} - ${item.month.end} ${item.year.end}`}</Text>
                  )}
                </View>
              ))}
            </View>

          )
          }
        </View>
        <View style={styles.column2}>
          <Text>Section #3</Text>
          <Text>Section #4</Text>
        </View>
      </Page>
    </Document>
  ) : (
    <Loading />
  );
};

export default function ResumeDoc() {
  const data = useSelector((state) => state.resumeData);

  return data ? <MyDocument data={data} /> : <button>Preview Resume</button>;
}
