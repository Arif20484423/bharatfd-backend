import * as chai from "chai";
import chaiHttp from "chai-http";
import { describe, it, before } from "mocha";
import app from "../app.js";

const { expect } = chai;
chai.use(chaiHttp);

describe("FAQs API Tests", function () {
  let server;

  // Start server before running tests
  before((done) => {
    server = app.listen(4000, () => {
      console.log("Test server running on port 4000");
      done();
    });
  });

  // Close server after tests
  after((done) => {
    server.close(() => {
      console.log("Test server closed");
      done();
    });
  });

  let faqId; // to store created FAQ ID for later testing

  // test GET /api/faqs - Should return an array of FAQs
  it("should return an array of FAQs", function (done) {
    chai
      .request(server)
      .get("/api/faqs")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  // test GET /api/faqs?lang=hi - Should return FAQs in Hindi
  it("should return an array of FAQs in Hindi", function (done) {
    chai
      .request(server)
      .get("/api/faqs?lang=hi")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  //  test POST /api/createfaq - Should create a new FAQ
  it("should create a new FAQ", function (done) {
    const newFaq = {
      question: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime environment.",
      lang: "en",
    };

    chai
      .request(server)
      .post("/api/createfaq")
      .send(newFaq)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("question").equal(newFaq.question);
        expect(res.body).to.have.property("answer").equal(newFaq.answer);

        faqId = res.body._id; // Store created FAQ ID for later use
        done();
      });
  });


});
