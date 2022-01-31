import React from "react";
import NumberFormat from "react-number-format";
import QRCode from "qrcode.react";
import { Grid, Typography, Box } from "@material-ui/core";
import "../style/printBill.css";
import generateWords from "../helper/number2word";
class PrintBill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="bg">
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
                    <span className="txtPhetFont">ກະຊວງການເງີນ</span>
                    <span className="txtTimeNewFont">
                      / Ministry of Finance
                    </span>
                  </Box>
                  <Box>
                    <span className="txtPhetFont">ຄັງເງີນແຫ່ງຊາດ</span>
                    <span className="txtTimeNewFont">/ National Treasury</span>
                  </Box>
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <div style={{ marginTop: 100, width: 550, textAlign: "center" }}>
                <Typography>
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
                {/* <div className="textStyleID">AA 22</div> */}
                <div style={{ height: 50 }}></div>
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
                      <div style={{ height: 20 }}></div>
                      <Box>
                        <div
                          className="txtTimeNewFont"
                          style={{ paddingLeft: 10 }}
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
                        <span className="txtTimeNewFont">/ Receive from :</span>
                      </Grid>
                      <Grid item md={9}>
                        <span
                          className="txtSubTimeNewFont"
                          style={{ paddingLeft: 10 }}
                        >
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
                        <span
                          className="txtSubTimeNewFont"
                          style={{ paddingLeft: 10 }}
                        >
                          {data[0].Given}
                        </span>
                      </Grid>
                      <Grid
                        item
                        md={3}
                        style={{
                          textAlign: "center",
                          marginRight: 8,
                          marginLeft: 200,
                        }}
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
                  className="containerCenter"
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
                      <div style={{ height: 30 }} className="containerCenter">
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
                        style={{
                          height: 20,
                          borderTop: "1px solid black",
                        }}
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
                  // className="containerCenter"
                  style={{
                    borderLeft: 0,
                    paddingTop: 8,
                    borderRight: 0,
                    borderTop: "1px solid black",
                    height: 150,
                    textAlign: "center",
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
                    <span className="txtPhetFont">ຈຳນວນເງີນເປັນຕົວໜັງສື:</span>
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
                    marginLeft: 150,
                    textAlign: "right",
                  }}
                >
                  <QRCode value={data[0].TranID} size={100} />
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
                    <div style={{ height: 25 }}>
                      <span className="txtSubPhetFont">
                        {generateWords(data[0].Total)}
                      </span>
                    </div>
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
      </div>
    );
  }
}

export default PrintBill;
