import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { db } from "../firebase";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  CollectionReference,
  Query,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollecton = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));
  useEffect(() => {
    onSnapshot(collectionRef, (quarySnapshot) => {
      const channelsResults: Channels[] = [];
      quarySnapshot.docs.forEach((doc) =>
        // console.log(doc.id,doc.data())
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default useCollecton;
