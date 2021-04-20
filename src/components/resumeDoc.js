import React
//  { useContext, useState, useEffect } 
 from "react";
import { useSelector } from "react-redux";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  // Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
// import { FirebaseContext } from "../context/firebase";
// import { useAuthListener } from "../hooks";
import { Loading } from "./loading";
import Twitter from "../icons/twitter.png";
import Facebook from "../icons/facebook.png";
import LinkedIn from "../icons/linkedin.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 10,
    opacity: 0.85,
    lineHeight: 1.4,
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
    fontSize: 23,
    fontWeight: 800,
  },
  jobTitle: {
    display: "block",
    fontSize: 16,
    fontWeight: 600,
    color: "orange",
  },
  heading: {
    fontSize: 12,
    color: "#216DE0",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
    lineHeight: "normal",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    margin: "10pt 0 0",
  },
  text: {
    // fontSize: 15,
    // lineHeight: 1.2,
    // opacity: 0.85,
  },
  title: {
    fontSize: 12,
    fontWeight: 500,
    opacity: 1,
    display: "block",
    // lineHeight: 1.8,
  },
  subTitle: {
    fontSize: 10,
    display: "block",
    lineHeight: 1.6,
  },
  date: {
    display: "block",
    fontSize: 8,
    fontStyle: "italic",
    lineHeight: 1.6,
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
    // fontStyle: "italic",
    paddingLeft: "20pt",
    display: "block",
    // lineHeight: 1.,
    // fontSize: 15
  },
  block: {
    marginTop: 12,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    display: "block",
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
              {/* {photoUrl ? <Image style={styles.image} src={photoUrl} alt="profile" /> : ''} */}
              <View style={{ padding: "10pt 5pt" }}>
                <Text style={styles.name}>
                  {(personalInfo.firstName || personalInfo.lastName) &&
                    personalInfo.firstName + " " + personalInfo.lastName}
                </Text>
                <Text style={styles.jobTitle}>{personalInfo.jobTitle && personalInfo.jobTitle}</Text>
              </View>
            </View>
            {personalInfo.otherInfo && <View style={styles.section}>
              <Text style={styles.heading}>Professional Statement </Text>
              <Text style={{...styles.text, minHeight: 50}}>{personalInfo.otherInfo}</Text>
            </View>}
            {workExperience.length && (
              <View style={styles.section}>
                {(workExperience[0].jobTitle || workExperience[0].companyName) && <Text style={styles.heading}>Work experience</Text>}
                {workExperience.map((item, id) => (
                  <View
                    style={id ? {...styles.block, minHeight: 80} : {minHeight: 80}}
                    key={`work-exp-${id + 1}`}
                  >
                    <Text style={styles.title}>
                      {(item.jobTitle && item.companyName) ? `${item.jobTitle} - ${item.company}` : ''}
                    </Text>
                    <Text style={styles.subTitle}>
                      {(item.city && item.country) ? item.city + " " + item.country : ''}
                    </Text>
                    {item.month.end === "present" ||
                    item.year.end === "present" ? (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} - present`}
                      </Text>
                    ) : (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} ${item.month.end && (`, ${item.month.end}`)} ${item.year.end}`}
                      </Text>
                    )}
                    <View style={styles.list}>
                      {Object.values(item.highlights).map(
                        (highlight, index) => (
                          <Text
                            style={
                              index === 0
                                ? { ...styles.listItem, marginTop: 3 }
                                : { ...styles.listItem, marginTop: 1 }
                            }
                            key={`highligh- ${index + 1}`}
                          >
                            {highlight && `- ${highlight}`}
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
                {education[0].institutionName && <Text style={styles.heading}>Education</Text>}
                {education.map((item, id) => (
                  <View style={id ? styles.block : {minHeight: 20}} key={`edu-${id + 1}`}>
                    <Text style={styles.title}>{item.institutionName && item.institutionName}</Text>
                    <Text style={styles.subTitle}>
                      {`${item.city && item.city}${item.country  && (`, ${item.country}`)}`}
                    </Text>
                    {item.month.end === "present" ||
                    item.year.end === "present" ? (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} - present`}
                      </Text>
                    ) : (
                      <Text style={styles.date}>
                        {`${item.month.start} ${item.year.start} ${item.month.end && (`- ${item.month.end}`)} ${item.year.end}`}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            )}
            {references.length && (
              <View style={{...styles.section, minHeight: 30}}>
                {references[0].fullName && <Text style={styles.heading}>Referrals</Text>}
                {references.map((item, id) => (
                  <View style={id ? styles.block : {}} key={`ref-${id + 1}`}>
                    <Text style={styles.title}>{item.fullName}</Text>
                    <Text style={{ display: "block", marginTop: "2pt" }}>
                      {item.jobTitle}
                    </Text>
                    <Text style={{ display: "block", marginTop: "2pt" }}>
                      {item.email}
                    </Text>
                    <Text style={{ display: "block", marginTop: "2pt" }}>
                      {item.phoneNo}
                    </Text>
                    <Text style={{ display: "block", marginTop: "2pt" }}>
                      {item.location}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View style={styles.column2}>
            <View style={{ height: 150 }}>
              {personalInfo.location && (
                <Text style={{ display: "block" }}>
                  {personalInfo.location}
                </Text>
              )}
              {personalInfo.phoneNumber && (
                <Text style={{ display: "block" }}>
                  {personalInfo.phoneNumber}
                </Text>
              )}
              {personalInfo.email && (
                <Text style={{ display: "block" }}>{personalInfo.email}</Text>
              )}
              <View style={{ display: "flex", flexDirection: "column" }}>
                {personalInfo.twitter && (
                  <View style={styles.social}>
                    <Image src={Twitter} style={styles.icon} name="twitter" alt="" />
                    <Text>{personalInfo.twitter}</Text>
                  </View>
                )}
                {personalInfo.facebook && (
                  <View style={styles.social}>
                    <Image src={Facebook} style={styles.icon} name="facebook" alt="" />
                    <Text>
                      {personalInfo.facebook && personalInfo.facebook}
                    </Text>
                  </View>
                )}
                {personalInfo.linkedIn && (
                  <View style={styles.social}>
                    <Image src={LinkedIn} style={styles.icon} name="linkedin" alt="" />
                    <Text>{personalInfo.linkedIn}</Text>
                  </View>
                )}
              </View>
            </View>

            {skills.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.heading}>Skills</Text>
                <View>
                  {skills.map((item, id) => (
                    <Text
                      key={`skill-${id + 1}`}
                      style={{ display: "block", marginTop: "3pt" }}
                    >
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {achievements.length > 0 && (
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

            {certifications.length > 0 && (
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

            {languages.length > 0 && (
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
