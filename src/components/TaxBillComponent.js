import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../api/AxiosService";
import "../App.css";
import NumberFormat from "react-number-format";
import QRCode from "qrcode.react";
export default function TaxBillComponent() {
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
      <div className="Bill">
        {data.length === 0 ? (
          <div className="load">
            <CircularProgress />
          </div>
        ) : (
          <Grid container>
            <Grid item container xs={12}>
              <Grid item md={4}>
                <div
                  style={{
                    height: 150,
                    textAlign: "left",
                    paddingLeft: 20,
                    paddingTop: 20,
                  }}
                >
                  <Typography component="div">
                    <Box>
                      <span className="txtPhetFont">ກະຊວງການເງີນ</span>{" "}
                      <span className="txtTimeNewFont">
                        / Ministry of Finance
                      </span>
                    </Box>
                    <Box>
                      <span className="txtPhetFont">ຄັງເງີນແຫ່ງຊາດ</span>{" "}
                      <span className="txtTimeNewFont">
                        / National Treasury
                      </span>
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4}>
                <div style={{ marginTop: 100 }}>
                  <Typography component="div">
                    <Box>
                      <span className="txtTitlePhetFont">ໃບຮັບເງີນ</span>
                    </Box>
                    <Box>
                      <span className="txtTitleTimeNewFont">Receipt</span>
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="centerContent">
                  <div className="textStyleID">AA 22</div>
                  <Grid container>
                    <Grid item md={4}>
                      <Typography component="div">
                        <Box>
                          <span className="txtPhetFont">ເລກທີ</span>
                          <span className="txtTimeNewFont">/ No</span>
                        </Box>
                        <Box>
                          <span className="txtPhetFont">ວັນທີ</span>
                          <span className="txtTimeNewFont">/ Date </span>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography component="div">
                        <Box>
                          <div className="txtTimeNewFont"> 501928211</div>
                        </Box>
                        <Box>
                          <div
                            className="txtTimeNewFont"
                            style={{ paddingTop: 4, paddingLeft: 5 }}
                          >
                            {data[0].Created}
                          </div>
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box>
                    <div className="txtTimeNewFont" style={{ paddingTop: 10 }}>
                      {data[0].BARCD}
                    </div>
                  </Box>
                </div>
              </Grid>

              <Grid item md={12}>
                <div style={{ textAlign: "left", padding: 20 }}>
                  <Typography component="div">
                    <Box>
                      <Grid container>
                        <Grid item md={3}>
                          <span className="txtPhetFont">ໄດ້ຮັບເງີນຈາກ </span>
                          <span className="txtTimeNewFont">
                            / Receive from :
                          </span>
                        </Grid>
                        <Grid item md={9}>
                          <span className="txtSubTimeNewFont">
                            {data[0].From}
                          </span>
                        </Grid>
                      </Grid>
                      {/* <span className="txtPhetFont">ໄດ້ຮັບເງີນຈາກ </span>
                    <span className="txtTimeNewFont">/ Receive from: </span> */}
                    </Box>
                    <Box>
                      <Grid container>
                        <Grid item md={3}>
                          <span className="txtPhetFont">ມອບເຂົ້າບັນຊິ </span>
                          <span className="txtTimeNewFont">
                            / Given Account :
                          </span>
                        </Grid>
                        <Grid item md={4}>
                          <span className="txtSubTimeNewFont">
                            {data[0].Given}
                          </span>
                        </Grid>
                        <Grid
                          item
                          md={3}
                          style={{ textAlign: "right", marginRight: 8 }}
                        >
                          <span className="txtPhetFont">ເລກບັນຊິ </span>
                          <span className="txtTimeNewFont">
                            / Account number :
                          </span>
                        </Grid>
                        <Grid item md={1}>
                          <span className="txtSubTimeNewFont">
                            {data[0].AccNo}
                          </span>
                        </Grid>
                      </Grid>
                    </Box>
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                container
                md={12}
                style={{
                  border: "1px solid black",
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <Grid item xs={1}>
                  <div
                    className="containerCenter"
                    style={{
                      height: 50,
                    }}
                  >
                    <Typography component="div">
                      <Box>
                        <span className="txtPhetFont">ລ/ດ</span>
                      </Box>
                      <Box>
                        <span className="txtTimeNewFont">No</span>
                      </Box>
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div
                    style={{
                      height: 50,
                      borderTop: "0px",
                      borderLeft: "1px solid black",
                      // border: "1px solid black",
                    }}
                  >
                    <Typography component="div">
                      <Box>
                        <span className="txtPhetFont">ເນື້ອໃນລາຍຮັບ</span>
                      </Box>
                      <Box>
                        <span className="txtTimeNewFont">Deseription</span>
                      </Box>
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      height: 50,
                      borderTop: "0px",
                      borderLeft: "1px solid black",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <div style={{ height: 30 }}>
                          <Typography component="div">
                            <Box>
                              <span className="txtPhetFont">ຈຳນວນ </span>
                              <span className="txtTimeNewFont">/ Amount</span>
                            </Box>
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          className="containerCenter"
                          style={{ height: 20, borderTop: "1px solid black" }}
                        >
                          <Typography component="div">
                            <Box>
                              <span className="CurrencyLao">ສະກຸນເງີນ </span>
                              <span className="CurrencyEN">/ Currency</span>
                            </Box>
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          className="containerCenter"
                          style={{
                            height: 20,
                            borderTop: "1px solid black",
                            borderLeft: "1px solid black",
                          }}
                        >
                          <Typography component="div">
                            <Box>
                              <span className="CurrencyEN">LAK</span>
                            </Box>
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item xs={1}>
                  <div
                    style={{
                      borderLeft: 0,
                      paddingTop: 8,
                      borderRight: 0,
                      borderTop: "1px solid black",
                      height: 150,
                    }}
                  >
                    {data[0].Descrition.map((e, index) => {
                      return index + 1;
                    })}
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div
                    style={{
                      paddingTop: 8,
                      borderLeft: "1px solid black",
                      borderRight: 0,
                      height: 150,
                      borderTop: "1px solid black",
                      textAlign: "left",
                      paddingLeft: 10,
                    }}
                  >
                    {data[0].Descrition.map((e, index) => {
                      return e.ACC_CD_NM;
                    })}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      paddingTop: 8,
                      borderLeft: "1px solid black",
                      borderRight: 0,
                      height: 150,
                      borderTop: "1px solid black",
                      paddingRight: 10,
                      textAlign: "right",
                    }}
                  >
                    {data[0].Descrition.map((e, index) => {
                      return (
                        <span className="txtSubTimeNewFont">
                          <NumberFormat
                            value={e.CUR_PAY_AMT}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                      );
                    })}
                  </div>
                </Grid>

                <Grid item xs={1}>
                  <div
                    style={{
                      height: 30,
                      borderTop: "1px solid black",
                    }}
                  ></div>
                </Grid>
                <Grid item xs={7}>
                  <div
                    style={{
                      height: 30,
                      borderLeft: "1px solid black",
                      borderRight: 0,
                      borderTop: "1px solid black",
                      // border: "1px solid black",
                      textAlign: "right",
                      paddingRight: 20,
                    }}
                  >
                    <Typography component="div">
                      <Box>
                        <span className="txtPhetFont">ຈຳນວນເງີນທັງໝົດ </span>
                        <span className="txtTimeNewFont">/ Total: </span>
                      </Box>
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      height: 30,
                      borderLeft: "1px solid black",
                      borderRight: 0,
                      borderTop: "1px solid black",
                      textAlign: "right",
                      paddingRight: 10,
                    }}
                  >
                    <span className="txtSubTimeNewFont">
                      <NumberFormat
                        value={data[0].Total}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </span>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={3}>
                <div
                  style={{
                    paddingRight: 20,
                    marginTop: 20,
                    textAlign: "right",
                  }}
                >
                  <Typography component="div">
                    <Box>
                      <span className="txtPhetFont">
                        ຈຳນວນເງີນເປັນຕົວໜັງສື:
                      </span>
                    </Box>
                  </Typography>
                  <Typography component="div">
                    <Box>
                      <span className="txtTimeNewFont">Amount in world: </span>
                    </Box>
                  </Typography>

                  <div
                    style={{
                      backgroundColor: "red",
                      height: 80,
                      width: 80,
                      marginTop: 10,
                      marginLeft: 100,
                      textAlign: "right",
                    }}
                  >
                    <QRCode value={data[0].AccNo} size={100} />,
                  </div>
                </div>
              </Grid>
              <Grid item xs={9}>
                <div
                  style={{
                    marginTop: 20,
                    textAlign: "left",
                    marginRight: 20,
                    paddingLeft: 16,
                    border: "1px solid black",
                  }}
                >
                  <Typography component="div">
                    <Box>
                      <span className="txtSubPhetFont">ສີບລ້ານ</span>
                    </Box>
                  </Typography>
                </div>
                <div
                  style={{
                    marginTop: 20,
                    textAlign: "right",
                    marginRight: 40,
                    paddingLeft: 16,
                  }}
                >
                  <Typography component="div">
                    <Box>
                      <span className="txtPhetFont">ຜູ້ຮັບເງິນ </span>
                      <span className="txtTimeNewFont">/ Recipient</span>
                    </Box>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </Container>
  );
}
