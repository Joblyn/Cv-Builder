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
    padding: 57.6,
  },
  column1: {
    padding: 15,
    margin: "0 15pt 0 10pt",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    width: "70%",
    fontSize: 15,
  },
  column2: {
    padding: 15,
    margin: "0 10pt 0 15pt",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    width: "30%",
    fontSize: 15,
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
    margin: "15pt 0 0",
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
  image: {
    width: 150,
    height: 150,
    alt: "Photo",
    borderRadius: "50%",
    opacity: 1,
    marginRight: 20,
  },
  listItem: {
    fontStyle: "italic",
    paddingLeft: "20pt",
    display: "block",
  },
  block: {
    marginTop: 10,
  },
});

export const MyDocument = ({ data }) => {
  const {
    personalInfo,
    workExperience,
    education,
    references,
    skills,
    achievements,
    certifications,
    languages,
  } = data;
  // const { firebase } = useContext(FirebaseContext);
  // const { user } = useAuthListener();
  // const [photoUrl, setPhotoUrl] = useState("");

  // useEffect(() => {
  //   if (user) {
  //     firebase
  //       .storage()
  //       .ref("users/" + user.uid + "/profile.jpg")
  //       .getDownloadURL()
  //       .then((imgUrl) => {
  //         setPhotoUrl(imgUrl);
  //       });
  //   }
  // }, [firebase, user]);

  return (
    data && (
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
              {/* <Image style={styles.image} src={""} /> */}
              <View>
                <Text style={styles.name}>
                  {personalInfo.firstName + " " + personalInfo.lastName}
                </Text>
                <Text style={styles.jobTitle}> {personalInfo.jobTitle} </Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}> Professional Statement </Text>
              <Text style={styles.text}> {personalInfo.otherInfo} </Text>
            </View>
            {workExperience.length && (
              <View style={styles.section}>
                <Text style={styles.heading}> Work experience </Text>
                {workExperience.map((item, id) => (
                  <View
                    style={id ? styles.block : {}}
                    key={`work-exp-${id + 1}`}
                  >
                    <Text style={styles.title}>
                      {`${item.jobTitle} - ${item.company}`}
                    </Text>
                    <Text style={styles.subTitle}>
                      {item.city + " " + item.country}
                    </Text>
                    {item.month.end === "present" ||
                    item.year.end === "present" ? (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} - present`}
                      </Text>
                    ) : (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} - ${item.month.end} ${item.year.end}`}
                      </Text>
                    )}
                    <View style={styles.list}>
                      {Object.values(item.highlights).map(
                        (highlight, index) => (
                          <Text
                            style={styles.listItem}
                            key={`highligh- ${index + 1}`}
                          >
                            {`- ${highlight}`}
                          </Text>
                        )
                      )}
                    </View>
                  </View>
                ))}
              </View>
            )}
            {education.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Education</Text>
                {education.map((item, id) => (
                  <View style={id ? styles.block : {}} key={`edu-${id + 1}`}>
                    <Text style={styles.title}> {item.institutionName} </Text>
                    <Text style={styles.subTitle}>
                      {`${item.city}, ${item.country}`}
                    </Text>
                    {item.month.end === "present" ||
                    item.year.end === "present" ? (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} - present`}
                      </Text>
                    ) : (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} - ${item.month.end} ${item.year.end}`}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            )}
            {references.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Referrals</Text>
                {references.map((item, id) => (
                  <View style={id ? styles.block : {}} key={`ref-${id + 1}`}>
                    <Text
                      style={{
                        display: "block",
                        fontSize: 15.5,
                        fontWeight: "500",
                      }}
                    >
                      {item.fullName}
                    </Text>
                    <Text style={{ display: "block" }}>{item.jobTitle}</Text>
                    <Text style={{ display: "block" }}>{item.email}</Text>
                    <Text style={{ display: "block" }}>{item.phoneNo}</Text>
                    <Text style={{ display: "block" }}>{item.location}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View style={styles.column2}>
            <View style={{ height: 150 }}>
              <Text style={{ display: "block" }}>{personalInfo.location}</Text>
              <Text style={{ display: "block" }}>
                {personalInfo.phoneNumber}
              </Text>
              <Text style={{ display: "block" }}>{personalInfo.email}</Text>
              <View>
                <Text>TW</Text>
                <Text style={{ marginLeft: 20 }}>LN</Text>
                <Text style={{ marginLeft: 20 }}>FB</Text>
              </View>
            </View>

            {skills.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Skills</Text>
                <View>
                  {skills.map((item, id) => (
                    <Text key={`skill-${id + 1}`} style={{ display: "block" }}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {achievements.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Achievements</Text>
                <View>
                  {achievements.map((item, id) => (
                    <Text
                      key={`achievement-${id + 1}`}
                      style={{ display: "block" }}
                    >
                      {item.achievement}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {certifications.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Certifications</Text>
                <View>
                  {certifications.map((item, id) => (
                    <View
                      key={`cert-${id + 1}`}
                      style={{ display: "block", marginTop: "3pt" }}
                    >
                      <Text>{item.name}</Text>
                      <Text
                        style={{ fontStyle: "italic" }}
                      >{` - ${item.year}`}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {languages.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Languages</Text>
                <View>
                  {languages.map((item, id) => (
                    <Text style={{ display: "block" }} key={`lang-${id + 1}`}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        </Page>
      </Document>
    )
  );
};

export default function ResumeDoc() {
  const data = useSelector((state) => state.resumeData);

  return data ? <MyDocument data={data} /> : <Loading />;
}
