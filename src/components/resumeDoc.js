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
    padding: 10,
    fontSize: 10,
    opacity: 0.85,
    lineHeight: 1.2,
  },
  column1: {
    padding: 15,
    // margin: "0 15pt 0 10pt",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    // justifyContent: "space-between",
    width: "70%",
  },
  column2: {
    padding: 15,
    // margin: "0 10pt 0 15pt",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    width: "30%",
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
  },
  jobTitle: {
    display: "block",
    fontSize: 18,
    fontWeight: 500,
    color: "orange",
  },
  heading: {
    fontSize: 12,
    color: "#216DE0",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    margin: "8pt 0 0",
  },
  text: {
    // fontSize: 15,
    // lineHeight: 1.2,
    // opacity: 0.85,
  },
  title: {
    fontSize: 10,
    fontWeight: 500,
    opacity: 1,
    display: "block",
  },
  subTitle: {
    fontSize: 8,
    display: "block",
  },
  date: {
    display: "block",
    fontSize: '6rem',
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
              <View style={{ padding: "10pt 5pt"}}>
                <Text style={styles.name}>
                  {personalInfo.firstName + " " + personalInfo.lastName}
                </Text>
                <Text style={styles.jobTitle}>{personalInfo.jobTitle}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}> Professional Statement </Text>
              <Text style={styles.text}>{personalInfo.otherInfo}</Text>
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
                    <Text style={styles.title}>{item.institutionName}</Text>
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
                    <Text style={styles.title}>{item.fullName}</Text>
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
              <View style={{display:'flex', justifyContent:'space-between'}}>
                <Text>TW</Text>
                <Text>LN</Text>
                <Text>FB</Text>
              </View>
            </View>

            {skills.length && (
              <View style={styles.section}>
                <Text style={styles.heading}>Skills</Text>
                <View>
                  {skills.map((item, id) => (
                    <Text key={`skill-${id + 1}`} style={{ display: "block", marginTop: '3pt' }}>
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
                      style={{ display: "block", marginTop: "3pt" }}
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
