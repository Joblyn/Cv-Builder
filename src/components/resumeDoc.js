import React, { useState, useEffect } from "react";
import { PDFViewer, Page,Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    border: '1px solid black'
  },
  column1: {
    margin: "0 10",
    padding: 10,
    flexGrow: 1,
    width: '70%'
  },
  column2: {
    margin: "0 10",
    padding: 10,
    flexGrow: 1,
    width: '30%'
  }
});
export const MyDocument = ({ counter }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.column1}>
          <Text>{counter}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default function ResumeDoc() {
  const data = useSelector((state) => state.resumeData);
  const [counter, setCounter] = useState(10);
  
  useEffect(() => {
    setCounter(counter => counter - 1);
    console.log(counter);
  }, [counter]);

  return (
    <PDFViewer style={{ width: '100%', minHeight: '100vh' }}>
      <MyDocument counter={counter}/>
    </PDFViewer>
  );
}
