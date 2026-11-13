/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion } from "framer-motion";
import ReactToPrint from "react-to-print";
import React, { useRef } from "react";
import { useRouter } from "next/router";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const ReceiptPageComp = () => {
  const router = useRouter();
  const componentRef = useRef();

  const receipt = {
    receipt_no: "RCPT-2026-2617",
    date: "May 7, 2026",
     client_mail: "unitedwinners316@gmail.com",
    client_name: "Naomi Oloye",
    project_name: "Winners Training Academy Website",
    payment_stage: "First Installment",
    amount_paid: "₦1,351,540",
    payment_method: "Bank Transfer",
    issued_by: "Chukwuyem Eboigbodin",
    role: "Design Engineer",
    email: "eboigbodinchukwuyem@gmail.com",
    website: "https://chukwuyem.com",
  };

  const generateReceiptNo = () => {
  const prefix = "RCPT";
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);

  return `${prefix}-${year}-${random}`;
};

  return (
    <div css={{ backgroundColor: "#f4f4f4", minHeight: "100vh", paddingBottom: 60 }}>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <div css={mq({ width: ["100%", "70%", "60%"], marginTop: 50 })}>

          {/* ACTIONS */}
          <div css={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
            <div css={{ display: "flex", gap: 20 }}>
              <motion.button
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                css={mq({
                  height: 56,
                  borderRadius: 30,
                  width: [140, 160, 200],
                  padding: "16px 24px",
                  fontSize: [14, 14, 18],
                  cursor: "pointer",
                  fontWeight: 600,
                  border: "none",
                  backgroundColor: "#fff",
                })}
                onClick={() => router.push("/")}
              >
                Home
              </motion.button>

              <ReactToPrint
                trigger={() => (
                  <motion.button
                    whileHover={{ backgroundColor: "#eee" }}
                    css={mq({
                      height: 56,
                      borderRadius: 30,
                      width: [140, 160, 200],
                      padding: "16px 24px",
                      fontSize: [14, 14, 18],
                      cursor: "pointer",
                      fontWeight: 600,
                      border: "none",
                      backgroundColor: "#fff",
                    })}
                  >
                    Download Receipt
                  </motion.button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>

          {/* RECEIPT */}
          <div css={{ display: "flex", justifyContent: "center" }}>
            <div
              ref={componentRef}
              css={mq({
                width: ["95%", "90%", "80%"],
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: ["24px", "32px", "48px"],
                // boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
              })}
            >
              {/* HEADER */}
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: 40,
                }}
              >
                <div>
                  <div css={{ fontSize: 34, fontWeight: 800 }}>
                    PAYMENT RECEIPT
                  </div>

                  <div css={{ marginTop: 8, color: "#666" }}>
                    Receipt No: {receipt.receipt_no}
                    {/* {generateReceiptNo()} */}
                  </div>

                  <div css={{ marginTop: 4, color: "#666" }}>
                    Date: {receipt.date}
                  </div>

                  <div css={{ marginTop: 12, fontWeight: 700 }}>
                    {receipt.payment_stage}
                  </div>
                </div>

                <div css={{ textAlign: "right" }}>
                  <div css={{ fontSize: 20, fontWeight: 700 }}>
                    {receipt.issued_by}
                  </div>
                  {/* <div css={{ color: "#666", fontSize: 14 }}>
                    {receipt.role}
                  </div> */}
                  <div css={{ color: "#666", fontSize: 14 }}>
                    {receipt.email}
                  </div>
                  <div css={{ color: "#666", fontSize: 14 }}>
                    {receipt.website}
                  </div>
                </div>
              </div>

              {/* CLIENT INFO */}
              <div css={{ marginBottom: 40 }}>
                <div css={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                  Payment For
                </div>

                <div css={{ color: "#444", lineHeight: 1.8 }}>
                  <div><strong>Client Email:</strong> {receipt.client_mail}</div>
                  <div><strong>Client Name:</strong> {receipt.client_name}</div>
                  <div><strong>Project:</strong> {receipt.project_name}</div>
                  <div><strong>Payment Method:</strong> {receipt.payment_method}</div>
                </div>
              </div>

              {/* PAYMENT SUMMARY */}
              <div
                css={{
                  border: "1px solid #eee",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <div
                  css={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    backgroundColor: "#f8f8f8",
                    padding: "16px 20px",
                    fontWeight: 700,
                  }}
                >
                  <div>Description</div>
                  <div css={{ textAlign: "right" }}>Amount</div>
                </div>

                <div
                  css={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    padding: "20px",
                  }}
                >
                  <div>
                    {receipt.payment_stage} payment for {receipt.project_name}
                  </div>

                  <div css={{ textAlign: "right", fontWeight: 600 }}>
                    {receipt.amount_paid}
                  </div>
                </div>
              </div>

              {/* NOTE */}
              <div css={{ marginTop: 40 }}>
                <div css={{ fontWeight: 700, marginBottom: 8 }}>Note</div>
                <div css={{ color: "#666", lineHeight: 1.7, fontSize: 14 }}>
                  This receipt confirms that the {receipt.payment_stage.toLowerCase()} has been successfully received for the project. Further installments (if any) will be documented separately using the same format.
                <div css={{ marginTop: 10 }}>
  Any questions and payment proof should be sent to{" "}
  <strong>{receipt.email}</strong>{" "}
  or <strong>+234 810 709 9859</strong> on WhatsApp.
</div>
                </div>
              </div>

              {/* FOOTER */}
              <div
                css={{
                  marginTop: 60,
                  borderTop: "1px solid #eee",
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div css={{ color: "#777", fontSize: 14 }}>
                  Thank you for your payment.
                </div>

                <div css={{ textAlign: "right" }}>
                  <div css={{ fontWeight: 700 }}>
                    {receipt.issued_by}
                  </div>
                  <div css={{ color: "#777", fontSize: 14 }}>
                    Authorized Signature
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReceiptPageComp;