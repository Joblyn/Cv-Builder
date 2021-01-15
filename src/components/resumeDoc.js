import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PDFViewer,
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
    display: 'flex',
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  column1: {
    margin: "0 10",
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 10,
    flexGrow: 1,
  },
  column2: {
    margin: "0 10",
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = ({ data }) => {
  const { personalInfo } = data;
  console.log(personalInfo);
  return (
    <Document title={`${personalInfo.firstName + personalInfo.lastName}_resume`}>
      <Page style={styles.page}>
        <View style={styles.column1}>
          <Text>Section #1</Text>
          <Text>Section #2</Text>
        </View>
        <View style={styles.column1}>
          <Text>Section #3</Text>
          <Text>Section #4</Text>
        </View>
      </Page>
    </Document>
  );
};

export default function ResumeDoc() {
  const data = useSelector((state) => state.resumeData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(setReady(true), 1);
  }, [ready]);

  return data ? (
    // <PDFViewer style={{width: '100%', height: '100vh', backgroundColor:'#fff'}}>
      <MyDocument data={data}/>
    // </PDFViewer>
  ) : (
    <button onClick={() => setTimeout(setReady(true), 1)}>View pdf</button>
  );
};