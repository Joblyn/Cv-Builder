import React from "react";
import { useSelector } from "react-redux";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";

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
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 1.2,
  },
});

const MyDocument = ({ data }) => {
  const { personalInfo } = data;

  // address, skills, certs, languages
  // statement, education, experience, reference

  return (
    <Document
      title={`${personalInfo.firstName + personalInfo.lastName}_resume`}
    >
      <Page style={styles.page}>
        <View style={styles.column1}>
          <Text style={styles.name}>
            {personalInfo.firstName + " " + personalInfo.lastName}
          </Text>
          <View style={styles.section}>
            <Text style={styles.heading}>Professional Statement</Text>
            <Text style={styles.text}>{personalInfo.otherInfo}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Work experience</Text>
            <Text></Text>
          </View>
        </View>
        <View style={styles.column2}>
          <Text>Section #3</Text>
          <Text>Section #4</Text>
        </View>
      </Page>
    </Document>
  );
};

export default function ResumeDoc() {
  const data = useSelector((state) => state.resumeData);

  return data ? <MyDocument data={data} /> : <button>View pdf</button>;
}
