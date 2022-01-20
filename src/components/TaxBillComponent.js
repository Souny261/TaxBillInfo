import { Container, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Axios from "../api/AxiosService";
import "../App.css";
import Button from "@material-ui/core/Button";
import { useReactToPrint } from "react-to-print";

import BillComponent from "./BillComponent";
import PrintBill from "./PrintBillComponent";

import PrintIcon from "@material-ui/icons/Print";
export default function TaxBillComponent() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { billID } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(billID);
    Axios.post("billinfo", {
      BARCD: billID,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Container>
      <div style={{ textAlign: "end", paddingRight: 90 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
        >
          Print
        </Button>
      </div>
      <div>
        {loading ? (
          <div className="load">
            <CircularProgress />
          </div>
        ) : data.length === 0 ? (
          <div className="load">ບໍ່ພົບຂໍ້ມູນ</div>
        ) : (
          <div>
            <PrintBill data={data} ref={componentRef} />
            <BillComponent data={data} />
          </div>
        )}
      </div>
    </Container>
  );
}
